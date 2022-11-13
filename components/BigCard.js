import React from 'react'
import CreateBet from './CreateBet'

export default function BigCard() {
  return (
<div className="card lg:card-side bg-primary shadow-xl">
  <div className="card-body text-black">
    <h1 className="card-title">Group Name</h1>
    <h2>Group Description</h2>
    <div className="card-actions justify-end">
    </div>
    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
    <CreateBet></CreateBet>
  </div>
</div>
</div>
</div>
  )
}
