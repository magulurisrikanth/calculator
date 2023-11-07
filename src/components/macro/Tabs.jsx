/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Tabs() {
  return (
    <div>
    <ul className="hidden text-sm font-medium text-center  divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li className="w-full">
            <Link to="/"  className="inline-block w-full p-4  bg-green-theme rounded-l-lg focus:ring-4 active focus:outline-none  dark:hover:text-green-theme dark:hover:bg-neon-green" aria-current="page">Mortgage Payoff</Link>
        </li>
        <li className="w-full">
            <Link to="/homevsrent" className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-green-theme dark:bg-green-theme dark:hover:bg-neon-green">Rent vs. Buy</Link>
        </li>
        <li className="w-full">
            <Link to="/cddeposit" className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-green-theme  dark:bg-green-theme dark:hover:bg-neon-green">Certificate of Deposit (CD)</Link>
        </li>
    </ul>
    </div>
  )
}
