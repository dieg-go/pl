// pages/plans.js
import { getPlans as getPlansData } from '../lib/plans'
import supabase from '../lib/supabase'
import { useState, useEffect } from 'react'
export default function PlansView({ profile }) {
    const [plans, setPlans] = useState([])
    useEffect(() => {
        getPlans()
    }, [])
    async function getPlans() {
        const data = await getPlansData(profile.id)
        setPlans(data)
    }

    return (
        <div>
          <h1>Mis Planes</h1>
          {plans.map(plan => (
            <div key={plan.id}>
              <h3>Plans para fecha: {plan.plan_date}</h3>
    
              {/* Show list of activities for this plan */}
    
            </div>
          ))}
    
        </div>
      )
}
