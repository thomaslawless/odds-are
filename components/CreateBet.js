import React from 'react'

export default function CreateBet() {
  return (
    <div>
        <div className="form-control">
            <label className="grid grid-cols-3">
                </label>
                <label className="input-group">
                    <span>Title</span>
                    <input type="text" placeholder="bet title" className="input input-bordered" />
                    </label>
                    <label className="input-group">
                    <span>Description</span>
                    <input type="text" placeholder="bet description" className="input input-bordered" />
                    </label>
                    <input type="text" placeholder="Over Odds" className="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" placeholder="Under Odds" className="input input-bordered input-warning w-full max-w-xs" />
                    <button className="btn">Submit</button>
                    </div>
                    </div>
  )
}
