// components/ProtectedRoute.js

import supabase from '@/lib/supabase'

async function getUser() {
  const { data: { session }} = await supabase.auth.getSession()
  return session
}

export default function ProtectedRoute({ children }) {

  const session = getUser()

  if (!session) {
    router.push('/signin')
    return null
  }

  return children

}
