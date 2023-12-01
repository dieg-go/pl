// components/Auth.jsx

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import supabase from '@/lib/supabase'

export default function Auth({ children }) {
  const { session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.replace('/login')
    }
  }, [session])

  return <>{children}</>
}
