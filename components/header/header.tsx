import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className=" navbar justify-between bg-base-300">
        <Link href={'/'} className="btn btn-ghost text-lg">
          Next Amazona
        </Link>
        <ul>
          <li>
            <Link href={'/cart'} className=" btn btn-ghost   rounded-btn">
              Cart
            </Link>
          </li>
          <li>
            <Link href={'/login'} className=" btn btn-ghost   rounded-btn">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
