import { useEffect, useState } from "react";

type UserDetails = {
  id?: string | number;
  firstname?: string;
  lastname?: string;
};

export const useUserDetails = () => {
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    const readUser = () => {
      try {
        const stored = localStorage.getItem("user_details");
        setUser(stored ? JSON.parse(stored) : null);
      } catch (error) {
        console.error("Failed to read user_details from localStorage", error);
        setUser(null);
      }
    };

    readUser();

    window.addEventListener("storage", readUser);

    return () => {
      window.removeEventListener("storage", readUser);
    };
  }, []);

  return user;
};
