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
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      {groups && (
         <div className='min-h-screen flex items-center'>
          <div className='flex-1 max-w-4xl mx-auto p-10'>
          {groups.map(group => (
            <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8'>
              <ul className='grid-cols-3'>
                <li className='py-4'>
                  <Card key={group.id} group={group}/>
                </li>
            </ul>
            </ul>
          ))}
          </div>
          </div>
      )}
    </div>
  )
}

