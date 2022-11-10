import React, { useEffect, useState } from 'react'
import supabaseClient from '../config/supabaseClient'

export default function Table() {
  return (
    <div className="overflow-x-auto w-full">
    <table className="table table-zebra w-full">
      <thead>
        <tr>
          <th>
            <label>
            </label>
          </th>
          <th>Name</th>
          <th>Bet</th>
          <th>Odds</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <label>
              <h1>1</h1>
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Thomas Lawless</div>
                <span className="badge badge-ghost badge-sm">@tom</span>
              </div>
            </div>
          </td>
          <td>
            Modica will smoke 5 Cigs.
            <br/>
          </td>
          <td>+200</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              <h1>2</h1>
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Gina Castellano</div>
                <span className="badge badge-ghost badge-sm">@Gina</span>
              </div>
            </div>
          </td>
          <td>
            Tom will spend $100
            <br/>
          </td>
          <td>-150</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              <h1>3</h1>
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Nick Vitale</div>
                <span className="badge badge-ghost badge-sm">@funniestmanalive</span>
              </div>
            </div>
          </td>
          <td>
            Modica will smoke 5 Cigs.
            <br/>
          </td>
          <td>-200</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              <h1>4</h1>
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Kyle Devine</div>
                <span className="badge badge-ghost badge-sm">@kdizzle</span>
              </div>
            </div>
          </td>
          <td>
           Modica will smoke 5 cigs.
            <br/>
          </td>
          <td>+200</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              <h1>5</h1>
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Kyle Devine</div>
                <span className="badge badge-ghost badge-sm">@kdizzle</span>
              </div>
            </div>
          </td>
          <td>
           Modica will smoke 5 cigs.
            <br/>
          </td>
          <td>+200</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Bet</th>
          <th>Odds</th>
          <th></th>
        </tr>
      </tfoot>
      
    </table>
  </div>
  )
}