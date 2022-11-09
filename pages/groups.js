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
  <div className='card'>
  <div className="container mx-auto">
    <div className="md:container md:mx-auto">
      {fetchError && (<p>{fetchError}</p>)}
      {groups && (
        <div className='container mx-auto'>
        <div className='groups'>

          {groups.map(group => (
            <div className="container mx-auto">
              <div className='columns-auto'>
            <Card key={group.id} group={group}/>
            </div>
            </div>
          ))}
          </div>
          </div>
      )}
    </div>
    </div>
    </div>
  )
}

