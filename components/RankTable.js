import React from 'react'

export default function RankTable() {
  return (
    <div>
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Name</th>
        <th>Amount</th>
        <th>Percent Gain</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          1
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Thomas Lawless</div>
              <div className="text-sm opacity-50">@thomaslawless</div>
            </div>
          </div>
        </td>
        <td>
          $4,500
          <br/>
        </td>
        <td>500%</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
        <th>
          2
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Thomas Lawless</div>
              <div className="text-sm opacity-50">@thomaslawless</div>
            </div>
          </div>
        </td>
        <td>
          $4,500
          <br/>
        </td>
        <td>500%</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
        <th>
          3
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Thomas Lawless</div>
              <div className="text-sm opacity-50">@thomaslawless</div>
            </div>
          </div>
        </td>
        <td>
          $4,500
          <br/>
        </td>
        <td>500%</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
        <th>
          4
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Thomas Lawless</div>
              <div className="text-sm opacity-50">@thomaslawless</div>
            </div>
          </div>
        </td>
        <td>
          $4,500
          <br/>
        </td>
        <td>500%</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Amount</th>
        <th>Percent Gain</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </div>
  )
}
