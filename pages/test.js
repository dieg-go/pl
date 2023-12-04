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



export default function Test() {


    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}
