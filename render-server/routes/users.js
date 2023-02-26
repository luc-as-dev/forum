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
    res.status(400).send({ message: e.message });
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
    res.status(400).send({ message: e.message });
  }
});

// Logout user
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => token === req.token);
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

// Logout user from every device
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

// Get user information
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

// Patch user
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = VALID_TO_UPDATE;
  const isValid = updates.every((u) => allowedUpdates.includes(u));

  if (!isValid) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();

    res.send(req.user);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

// Delete User
router.delete("/users/me", auth, async (req, res) => {
  try {
    const user = await req.user.remove();
    res.send(user);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});
