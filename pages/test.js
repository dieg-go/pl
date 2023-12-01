import { useState, useEffect } from 'react'
// import { getActivities } from '../lib/activities'
import supabase from '@/lib/supabase'
import { getUser } from '@/lib/users'
import { getPlans } from '@/lib/plans'
import { getProgress } from '@/lib/progress'
import { getActivities } from '@/lib/activities'
import { createPlan } from '@/lib/plans'
import { createActivity } from '@/lib/activities'
import { createProgress } from '@/lib/progress'
// Plans
// await createPlan({
//     user_id: 'b60c334a-3356-4a7c-9056-ae674cf21e6d',
//     plan_date: '2023-03-01',
//     activities: [1, 2, 3]
//   })
  
//   await createPlan({
//     user_id: 'b60c334a-3356-4a7c-9056-ae674cf21e6d',
//     plan_date: '2023-03-02',
//     activities: [2, 4]
//   })
  
//   // Activities
//   await createActivity({
//     user_id: 'b60c334a-3356-4a7c-9056-ae674cf21e6d',
//     name: 'Walk dog',
//     category: 'exercise',
//     duration: 30
//   })
  
//   await createActivity({
//     user_id: 'b60c334a-3356-4a7c-9056-ae674cf21e6d',
//     name: 'Make dinner',
//     category: 'cooking',
//     duration: 45
//   })
  
//   // Progress
//   await createProgress({
//     user_id: 'b60c334a-3356-4a7c-9056-ae674cf21e6d',
//     date: '2023-03-01',
//     activities_completed: [1],
//     total_duration: 30
//   })
  
//   await createProgress({
//     user_id: 'b60c334a-3356-4a7c-9056-ae674cf21e6d',
//     date: '2023-03-02',
//     activities_completed: [2],
//     total_duration: 45
//   })
  
// 38b3483b-7397-4c40-bdfe-8e398483be84
// const { data: { user } } = await supabase.auth.getUser()
// // const json = JSON.stringify(user)
// // const object = JSON.parse(json)
// console.log(user);


// // Get user by ID
// const userId = '38b3483b-7397-4c40-bdfe-8e398483be84'
// const user = await getUser(userId)

// // Get user's plans
// const plans = await getPlans(userId)

// // Get user's activities
// const activities = await getActivities(userId)

// // Get user's progress
// const progress = await getProgress(userId)

// console.log(user)
// // { id: '123', name: 'John Doe', ... }

// console.log(plans)
// // [...]

// console.log(activities)
// // [...]

// console.log(progress)
// [...]
export default function Test() {
    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}
