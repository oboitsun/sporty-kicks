import React from 'react'
import { useInView } from 'react-intersection-observer'
export default function FinishCircleMob() {
  const [ref, inView] = useInView()

  return (
    <div className='relative w-[68px] h-[68px] overflow-hidden rounded-full shadow-green_lg '>
      <div
        style={{
          transform: inView ? 'translateY(0)' : 'translateY(-110%)',
        }}
        className='absolute w-full h-full top-0 left-0 visible bg-green_sp'></div>
      <div
        ref={ref}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        Finish
      </div>
    </div>
  )
}
