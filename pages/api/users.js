// /api/users.js
import supabase from '@/lib/supabase'
import bcrypt from 'bcryptjs'


export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Get single user
        const { userId } = req.query
        const { data: user, error } = await supabase
            .from('users')
            .select()
            .eq('id', userId)
            .single()

        if (error) {
            return res.status(401).json({ error: error.message })
        }

        res.status(200).json(user)
    }



    if (req.method === 'POST') {
        // Insert user data
        const { id, name, email, password } = req.body
        const password_hash = await bcrypt.hash(password, 10)
        const { data, error } = await supabase
            .from('users')
            .insert([
                {
                    id,
                    email,
                    name,
                    password: password_hash
                }
            ])


        if (error) {
            return res.status(500).json({ error: error.message })
        }

        // Return inserted user
        res.status(201).json(data)
    }

    if (req.method === 'PUT') {
        const { data: updatedUser } = await supabase
            .from('users')
            .update({ ...req.body })
            .eq('id', req.body.id)

        return res.status(200).json(updatedActivity)
    }

    if (req.method === 'DELETE') {
        const { data: deletedUser } = await supabase
            .from('users')
            .delete()
            .eq('id', req.params.id)

        return res.status(200).json(deletedActivity)
    }



}
