// lib/activities.js

import  supabase  from './supabase'

export async function getActivities(userId) {
  const { data: activities, error } = await supabase
    .from('activities')
    .select()
    .eq('user_id', userId)

  if (error) throw error
  return activities
}

// Get single activity by id
export async function getActivityById(id) {
    const { data: activity, error } = await supabase
      .from('activities')
      .select()
      .eq('id', id)
      .single()
  
    if (error) throw error
    return activity
  }
  
  // Create a new activity
  export async function createActivity(activityData) {
    const { data: activity, error } = await supabase
      .from('activities')
      .insert(activityData)
      .single()
  
    if (error) throw error
    return activity
  }
  
  // Update an existing activity
  export async function updateActivity(id, activityData) {
    const { data: activity, error } = await supabase
      .from('activities')
      .update(activityData)
      .eq('id', id)
      .single()
  
    if (error) throw error
    return activity
  }
  
  // Delete an activity
  export async function deleteActivity(id) {
    const { error } = await supabase
      .from('activities')
      .delete()
      .eq('id', id)
  
    if (error) throw error
    return
  }
  

  