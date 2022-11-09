import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Daisy from '../components/Daisy'

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (

    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Daisy></Daisy>
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
export default MyApp