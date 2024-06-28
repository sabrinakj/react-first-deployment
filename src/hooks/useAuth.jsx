import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(() => {
    const savedUser = window.localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(!!user); //Booleano che indica se l'utente è autenticato.

  const login = (username, password) => { //Funzione per effettuare il login.
    const userData = { username, password };
    setUser(userData);
    setIsAuthenticated(true);
    window.localStorage.setItem("user", JSON.stringify(userData)); // salva nel localStorage, facendolo diventare una stringa
    window.location.reload();
  };

  const logout = () => { //Cancella le credenziali dell'utente e segna l'utente come non autenticato.
    setUser(null);
    setIsAuthenticated(false);
    window.localStorage.removeItem("user");
    window.location.reload();
  };

  return [user, isAuthenticated, login, logout];
}