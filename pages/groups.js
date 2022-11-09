import React from 'react'
import { useEffect, useState } from 'react'
import supabaseClient, { SupabaseClient } from '../config/supabaseClient'
import Card from '../components/Card'

export default function groups() {
  const [fetchError, setFetchError] = useState(null)
  const [groups, setGroups] = useState(null)

  useEffect(() => {
    const fetchGroups = async () => {
      const { data, error } = await supabaseClient 
      .from('groups')
      .select()

      if(error) {
        setFetchError("Cannot fetch")
        setGroups(null)
        console.log(error)
      }
      if (data){
        setGroups(data)
        setFetchError(null)
      }
    }
    fetchGroups()
  }, [])

  return (
  <div className="grid gap-4 grid-cols-3 grid-rows-3">
    <div className='groups'>
      {fetchError && (<p>{fetchError}</p>)}
      {groups && (
        <div className='groups'>

          {groups.map(group => (
            <Card key={group.id} group={group}/>
          ))}
          </div>
      )}
    </div>
    </div>

  )
}
