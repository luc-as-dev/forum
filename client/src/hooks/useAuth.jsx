import { createContext, useContext, useEffect, useState } from "react";

const SERVER_URL = import.meta.env.VITE_SOME_SERVER_URL;
console.log("SERVER URL: ", SERVER_URL);

const TOKEN_KEY = "token";

function setToken(token) {
  // TODO find a better solution for token
  localStorage.setItem(TOKEN_KEY, token);
}

function getToken() {
  // TODO find a better solution for token
  return localStorage.getItem(TOKEN_KEY);
}

function clearToken() {
  // TODO find a better solution for token
  localStorage.removeItem(TOKEN_KEY);
}

function fixedUser(user) {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    dateOfBirth: user.dateOfBirth,
    profile: {
      firstName: user.profile.firstName,
      lastName: user.profile.lastName,
      avatar: `${SERVER_URL}${user.profile.avatar}`,
      bio: user.profile.bio,
    },
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      getMe(token);
    }
  }, []);

  async function signUp(data, userCallback, errCallback) {
    setIsLoading(true);
    try {
      const response = await fetch(`${SERVER_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsLoading(false);
      if (response.ok) {
        const { user, token } = await response.json();

        setToken(token); // TODO find a better way to store token.
        setUser(fixedUser(user));
        if (userCallback) userCallback(user);
        console.log(user);
      } else {
        const error = await response.json();
        setError(error);
        if (errCallback) errCallback(error);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  async function login(data, userCallback, errCallback) {
    setIsLoading(true);
    try {
      const response = await fetch(`${SERVER_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const { user, token } = await response.json();
        setToken(token); // TODO find a better way to store token.
        setUser(fixedUser(user));
        if (userCallback) userCallback(user);
      } else {
        const error = await response.json();
        setError(error);
        if (errCallback) errCallback(error);
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  async function logout() {
    setIsLoading(true);
    const token = getToken();
    try {
      const response = await fetch(`${SERVER_URL}/users/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        clearToken(); // TODO find a better way to store token.
        setUser(null);
      } else {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  async function getMe() {
    setIsLoading(true);
    const token = getToken();
    if (token) {
      try {
        const response = await fetch(`${SERVER_URL}/users/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const user = await response.json();
          setUser(fixedUser(user));
        } else {
          const error = await response.json();
          setError(error);
          console.log(err);
        }
      } catch (err) {
        console.log(err);
      }
    }
    setIsLoading(false);
  }

  return {
    user,
    signUp,
    login,
    logout,
    error,
    isLoading,
  };
}

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);
