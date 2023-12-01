// components/Plans.js

import { useState, useEffect } from 'react'
import supabase from '../lib/supabase'

export default function Plans() {

  const [plans, setPlans] = useState([])

  useEffect(() => {
    getPlans()  
  }, [])

  async function getPlans() {
    let { data: plans, error } = await supabase
      .from('plans')
      .select()
    
    setPlans(plans)
  }

  return (
    <div className="space-y-5">
      {plans.map(plan => (  
        <div key={plan.id} className="bg-white p-5 rounded shadow-sm">
          <h5 className="text-lg font-semibold mb-2 text-slate-950">
            Plan for {plan.plan_date}
          </h5>
  
          <div>
            {plan.activities.map(activityId => (
              <span key={activityId} className="bg-blue-100 text-blue-800 rounded px-2 text-sm mr-2">
                Activity {activityId}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}