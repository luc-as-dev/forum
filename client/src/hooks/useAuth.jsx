import { createContext, useContext, useState } from "react";

const SERVER_URL = import.meta.env.VITE_SOME_SERVER_URL;

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

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
        user.token = token; // TODO find a better way to store token.
        setUser(user);
        if (userCallback) userCallback(user);
        console.log(user);
      } else {
        const error = await response.json();
        setError(error);
        if (errCallback) errCallback(error);
      }
    } catch (error) {
      console.log(error);
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
        user.token = token; // TODO find a better way to store token.
        setUser(user);
        if (userCallback) userCallback(user);
      } else {
        const error = await response.json();
        setError(error);
        if (errCallback) errCallback(error);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  async function logout() {}

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
