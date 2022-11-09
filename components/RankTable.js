import React, { useEffect, useState } from 'react'
import supabaseClient from '../config/supabaseClient'

export default function RankTable() {
  const [fetchError, setFetchError] = useState(null)
  const [profiles, setProfile] = useState(null)

  useEffect(()=> {
    const fetchProfiles = async () => {
      const {data, error} = await supabaseClient
      .from('profiles')
      .select()
      if (error){
        setFetchError("Could not fetch")
        setProfile(null)
        console.log(error)
      } 
      if (data) {
        setProfile(data)
        setFetchError(null)
        console.log(profiles)
      }
    }
    fetchProfiles()
  }, [])

  return (
   <div>
    <p>Testing</p>
   </div>
  )
}
