import bcrypt from 'bcryptjs'
import supabase from '@/lib/supabase'
import { router } from 'next/router'

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
  console.log("signUp():", data.session, data.user, error);


  if (!error) {
    console.log("Creando usuario con id ", data.user.id)
    // Signup successful
    // Create new user object

    const user = {
      id: data.user.id,
      name,
      email,
      password
    };

    ;

    // Make POST request
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    // Handle response
    if (res.ok) {
      console.log("User created!");
    } else {
      console.log("Error creating user");
    }
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