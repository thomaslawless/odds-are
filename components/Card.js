import React from 'react'

export default function Card() {
  return (
    <div className="card w-96 bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">Group Title</h2>
      <p>group description</p>
      <div className="card-actions justify-end">
        <button className="btn">Join</button>
      </div>
    </div>
  </div>
  )
}

