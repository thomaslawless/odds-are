
import { useState } from "react"
import supabaseClient from "../config/supabaseClient"
import { useRouter } from 'next/router'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
const Create = ({}) => {
    const router = useRouter()

    const [name, setGroupName] = useState('')
    const [description, setDescription] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!name || !description){
            setFormError("Please fill out form")
            return 
        }
        const {data, error} = await supabaseClient
        .from('groups')
        .insert([{name, description}])
        .select()

        if (error){
            console.log(error)
            setFormError("Please fill out form")
        }if (data){
            console.log(data)
            setFormError(null)
            router.push('/groups')
        }
    }


    return (
        <div className="page create">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Group Name:</label>
                <input
                type="text"
                id="title"
                value={name}
                onChange={(e) => setGroupName(e.target.value)}
                />
                <label htmlFor="description">Description:</label>
                <textarea
                id="method"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <button>Create a Group</button>

                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
}
export default Create
