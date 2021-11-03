import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
export default function CTAButton() {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    activeClass: 'active',
    className: 'cursor-pointer',
  }
  return (
    <div>
      <Link to='contacts' {...linkProps}>
        <button className=' relative z-[2]  border text-green_sp border-green_sp mb-5 w-[140px] h-[50px] flex justify-center cursor-pointer items-center rounded-lg hover:shadow-green_lg transition-all'>
          Offerte anfragen
        </button>
      </Link>
    </div>
  )
}
