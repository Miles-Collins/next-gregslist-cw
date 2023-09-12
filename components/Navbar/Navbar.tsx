import React from 'react'
import Home from './Home'
import NavItem from './NavItem'

export default function Navbar() {


  return (
    <div className='flex flex-row w-full justify-between'>
      {/* Home */}
      <div>
        <Home />
      </div>
      <div className='flex flex-row'>
        <NavItem title={'houses'} />
        <NavItem title={'cars'} />
        <NavItem title={'jobs'} />
      </div>
    </div>
  )
}
