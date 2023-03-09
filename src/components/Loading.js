import React from 'react'
import loading from '../spinner.svg'

export default function Loading() {
  return (
    <div className='text-center'>
      <img alt="Loading..." src={loading}/>
    </div>
  )
}
