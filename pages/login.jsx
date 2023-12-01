// pages/login.js

import { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabase'
import LoginForm from '@/components/LoginForm'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function Login() {

    return (
        <main>
            <Navbar></Navbar>
            <LoginForm></LoginForm>
            <Footer></Footer>
        </main>
    )

}
