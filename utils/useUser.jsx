import { useState, useEffect } from "react";
import supabase from "@/lib/supabase";

export default function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);

        const {
          data: { user },

          error,
        } = await supabase.auth.getUser();

        if (error) throw error;

        setUser(user);
      } catch (error) {
        console.log("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);
  return { user, loading };
}
