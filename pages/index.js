import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import Feed from '../components/Feed'

const Home = () => {
  
  const session = useSession()
  const supabase = useSupabaseClient()

  //const user = supabase.auth.user()

  return (
    <div className="container bg-center px-10">
      {!session ? (
        <Auth supabaseClient={supabase} />
      ) : (
        
        <Account session={session} />   
       
         )}
    </div>
  )
}
export default Home