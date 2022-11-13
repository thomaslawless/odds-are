import React from 'react'
import BigCard from '../components/BigCard'
import CreateBet from '../components/CreateBet'
import Table from '../components/Table'
export default function group() {
  return (
    <div className='min-h-screen flex'>
    <div className='flex-1 max-w-4xl mx-auto p-10'>
      <BigCard>
      </BigCard>
      <CreateBet></CreateBet>
      <div className='py-6'>
      <Table></Table>
      </div>
    </div>
    </div>
  )
}
