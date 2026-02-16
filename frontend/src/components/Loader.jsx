import React from 'react'
import loader from '../images/Interwind@1x-1.5s-348px-348px.gif'
function Loader() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
    <img src={loader} alt="" />
    </div>
  )
}

export default Loader
