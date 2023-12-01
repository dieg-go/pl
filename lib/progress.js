// lib/progress.js
import supabase from "./supabase"
export async function getProgress(userId) {
    const { data, error } = await supabase
        .from('progress')
        .select()
        .eq('user_id', userId)

    if (error) {
        throw error
    }

    return data
}


export async function getProgressById(id) {

    const { data, error } = await supabase
        .from('progress')
        .select()
        .eq('id', id)
        .single()

    if (error) {
        throw error
    }

    return data
}


export async function createProgress(progressData) {

    const { data, error } = await supabase
        .from('progress')
        .insert([
            {
                user_id: progressData.userId,
                date: progressData.date,
                activities_completed: progressData.activitiesCompleted,
                total_duration: progressData.totalDuration
            }
        ])
        .single()

    if (error) {
        throw error
    }

    return data

}


export async function updateProgress(id, progressData) {

    const { data, error } = await supabase
        .from('progress')
        .update({
            activities_completed: progressData.activitiesCompleted,
            total_duration: progressData.totalDuration
        })
        .eq('id', id)
        .single()

    if (error) {
        throw error
    }

    return data

}

export async function deleteProgress(id) {

    const { error } = await supabase
        .from('progress')
        .delete()
        .eq('id', id)

    if (error) {
        throw error
    }

}
