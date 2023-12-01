// lib/plans.js
import supabase from "./supabase"
export async function getPlans(userId) {
    // Fetch plans for a user
    const { data: plans, error } = await supabase
        .from('plans')
        .select()
        .eq('user_id', userId)

    if (error) throw error
    return plans

}

export async function getPlanById(id) {
    // Get single plan by id
    const { data: plan, error } = await supabase
        .from('plans')
        .select()
        .eq('id', id)
        .single()

    if (error) throw error
    return plan

}

// Create new plan
export async function createPlan(planData) {
    const { data: plan, error } = await supabase
        .from('plans')
        .insert({
            user_id: planData.userId,
            plan_date: planData.date,
            activities: planData.activities
        })
        .single()

    if (error) {
        throw error
    }

    return plan
}

// Update existing plan
export async function updatePlan(id, planData) {

    const { data, error } = await supabase
        .from('plans')
        .update({
            plan_date: planData.date,
            activities: planData.activities
        })
        .eq('id', id)
        .single()

    if (error) {
        throw error
    }

    return data
}

// Delete a plan
export async function deletePlan(id) {

    const { error } = await supabase
        .from('plans')
        .delete()
        .eq('id', id)

    if (error) {
        throw error
    }

}

