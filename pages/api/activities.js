import supabase from '../../lib/supabase'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { data: activities } = await supabase
            .from('activities')
            .select()

        return res.status(200).json(activities)
    }

    if (req.method === 'POST') {
        // Get activity data from request body
        const { name, description, category, duration } = req.body

        // Insert activity into Supabase
        const { data, error } = await supabase
            .from('activities')
            .insert({
                name,
                description,
                category,
                duration
            })

        if (error) {
            return res.status(500).json({ error: error.message })
        }

        // Return inserted activity
        return res.status(201).json(data)
    }

    if (req.method === 'PUT') {
        const { data: updatedActivity } = await supabase
            .from('activities')
            .update({ ...req.body })
            .eq('id', req.body.id)

        return res.status(200).json(updatedActivity)
    }

    if (req.method === 'DELETE') {
        const { data: deletedActivity } = await supabase
            .from('activities')
            .delete()
            .eq('id', req.params.id)

        return res.status(200).json(deletedActivity)
    }
}

