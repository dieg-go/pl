// pages/api/progress.js

import supabase from "@/lib/supabase"
export default async function handler(req, res) {

    if (req.method === 'GET') {

        const { data: progress } = await supabase
            .from('progress')
            .select()

        return res.status(200).json(progress)
    }

    if (req.method === 'POST') {

        const { data, error } = await supabase
            .from('progress')
            .insert(req.body)

        if (error) {
            return res.status(500).json({ error: error.message })
        }

        return res.status(201).json(data)
    }
}
