import supabase from '../../lib/supabase'

export default async function handler(req, res) {

    if (req.method === 'GET') {
        // Handle GET request
        // Fetch plans
        const { data: plans, error } = await supabase
            .from('plans')
            .select()

        if (error) return res.status(500).json(error)

        res.status(200).json(plans)
    }

    if (req.method === 'POST') {
        // Handle POST request
        // Insert new plan
        const { user_id, plan_date, activities } = req.body

        const { data, error } = await supabase
            .from('plans')
            .insert({ user_id, plan_date, activities })

        if (error) return res.status(500).json(error)

        res.status(201).json(data)
    }

    if (req.method === 'PUT') {
        // Handle PUT request
        // Update a plan

        const { id, user_id, activities } = req.body

        const { data, error } = await supabase
            .from('plans')
            .update({ user_id, activities })
            .eq('id', id)

        if (error) return res.status(500).json(error)

        res.status(200).json(data)
    }

    if (req.method === 'DELETE') {
        // Handle DELETE request
        // Delete a plan

        const { id } = req.body

        const { data, error } = await supabase
            .from('plans')
            .delete()
            .eq('id', id)

        if (error) return res.status(500).json(error)

        res.status(200).json({ message: 'Plan deleted' })
    }

    return res.status(405).end() // Method Not Allowed


}
