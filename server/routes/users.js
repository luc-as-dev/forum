import { User, VALID_TO_UPDATE } from "../../database/models/user.js";
import express from "express";
import auth from "../middleware/auth.js";

export const router = new express.Router();

//  Create new user
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send({ signUp: e });
  }
});

//  Login user
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send({ login: { message: e.message } });
  }
});

// Logout user
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => token === req.token);
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send({ logout: { message: e.message } });
  }
});

// Logout user from every device
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send({ logoutAll: { message: e.message } });
  }
});

// Get list of users, public information
router.get("/users", async (req, res) => {
  const filter = {};
  const options = {
    limit: parseInt(req.query.limit),
    skip: parseInt(req.query.skip),
    sort: {},
  };

  if (req.query.search) {
    const parts = req.query.search.split(":");
    console.log(parts);
    filter[parts[0]] = new RegExp(parts[1]);
  }

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    options.sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  try {
    const users = await User.find(filter, undefined, options);
    res.send(users);
  } catch (e) {
    res.status(500).send({ users: { message: e.message } });
  }
});

// Get user information
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

// Get public user information by id
router.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .send({ users: { message: `Could not find user by id: ${id}` } });
    }
    res.send(user.getPublic());
  } catch (e) {
    res.status(500).send({ users: { message: e.message } });
  }
});

// Patch user
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = VALID_TO_UPDATE;
  const isValid = updates.every((u) => allowedUpdates.includes(u));

  if (!isValid) {
    return res.status(400).send({ me: { message: e.message } });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();

    res.send(req.user);
  } catch (e) {
    res.status(500).send({ me: { message: e.message } });
  }
});

// Delete User
router.delete("/users/me", auth, async (req, res) => {
  try {
    const user = await req.user.remove();
    res.send(user);
  } catch (e) {
    res.status(500).send({ me: { message: e.message } });
  }
});
