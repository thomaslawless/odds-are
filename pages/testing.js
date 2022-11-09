/*
import React from 'react'
import supabaseClient from '../config/supabaseClient'
import { useEffect, useState } from 'react'

//smoothie import
import SmoothieCard from '../smoothies/smoothieCard'

export default function testing() {
  const [fetchError, setFetchError] = useState(null)

  const [groups, setGroups] = useState(null)

  useEffect(() => {
    const fetchGroups = async () => {
      const {data, error} = await supabaseClient
      .from('groups')
      .select() // select all 

      if (error){
        setFetchError("Could not fetch")
        setGroups(null)
        console.log(error)
      } 
      if (data) {
        setGroups(data)
        setFetchError(null)
      }
    }
    fetchGroups()

  }, [])

  return (
    <div className=''>
      {fetchError && (<p>{fetchError}</p>)}
      {groups && (
        // order by buttons
        <div className='groups'>
         <div className='grid'>
         {groups.map(group => (
            <SmoothieCard key={group.id} group={group} />
          ))}
          </div>
        </div>
      )}
    </div>
  )
}

*/