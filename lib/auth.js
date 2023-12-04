import bcrypt from 'bcryptjs'
import supabase from '@/lib/supabase'
import { router } from 'next/router'
import {useState, useEffect} from 'react'
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

export async function getUser() {
  // console.log(supabase.auth.user())

  const { data: { user } } = await supabase.auth.getUser()
  console.log("Got user!: ", user);
  return user;
}


export async function logIn(email, password) {

  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  console.log(email, password);
  console.log("logIn():", data.session, data.user, error);

  // localStorage.setItem('user_id', data.user.id);

  return { data, error };

}

export async function signUp(name, email, password) {

  let { data, error } = await supabase.auth.signUp({ email, password })
  // console.log("signUp():", data.session, data.user, error);


  if (!error) {
    // console.log("Creando usuario con id ", data.user.id)
    // Signup successful
    // Create new user object

    const user = {
      id: data.user.id,
      name,
      email,
      password
    };

    

    // Make POST request
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    // Handle response
    // if (res.ok) {
    //   console.log("User created!");
    // } else {
    //   console.log("Error creating user");
    // }
  }
  return { data, error }

}

export async function logOut() {
  console.log('logging out user:', getUser())

  let { error } = await supabase.auth.signOut()
  if (error) {
    console.log("Error: ", error.message)
  }

  router.push('/')

  return
}

export const userAuthenticated = async () => {

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    router.push('/login')
  }

}

export async function getSession() {

  const { data, error } = await supabase.auth.getSession()
  return data.session, error

}

export function useAuth(){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const {
          data: { user },
          error_getuser,
        } = await supabase.auth.getUser();
        if (error_getuser) throw error_getuser;
        console.log("user: ", user);
        setUser(user);


        let { data: profile, error_select_user } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single()
      

        console.log("profile: ", profile);
        if (error_select_user) throw error_select_user;

        setProfile(profile);
      } catch (error) {
        console.log("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

return { user, loading, profile }
}