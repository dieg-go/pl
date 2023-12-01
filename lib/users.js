// users.js

import supabase from './supabase'

// Get user by ID
export async function getUser(userId) {

    const { data: user, error } = await supabase
        .from('users')
        .select()
        .eq('id', userId)
        .single()

    // if (!user) {
    //     throw new Error('No user found with that ID')
    // }

    if (error) {
        throw error
    }

    return user
}

// Get user by email
export async function getUserByEmail(email) {

    const { data: user, error } = await supabase
        .from('users')
        .select()
        .eq('email', email)
        .single()

    // if (!user) {
    //     throw new Error('No user found with that email')
    // }

    // if (error) {
    //     throw error
    // }

    return user

}

 
// Create new user
export async function createUser(userData) {

    const { data: user, error } = await supabase
        .from('users')
        .insert([
            {
                email: userData.email,
                password: userData.password // encrypted
            }
        ])
        .single()

    if (error) {
        throw error
    }

    return user

}


// Update user
export async function updateUser(userId, userData) {

    const { data, error } = await supabase
        .from('users')
        .update({
            name: userData.name,
            avatar_url: userData.avatarUrl
        })
        .eq('id', userId)
        .single()

    if (error) {
        throw error
    }

    return data

}


// Delete user
export async function deleteUser(userId) {

    const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId)

    if (error) {
        throw error
    }

}

