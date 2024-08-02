import React from 'react'

const Top = () => {
  return (
    <div className='flex items-center justify-around my-4'>
        <div className="text-slate-800 text-4xl font-bold">
            <span className="">Free Expert Tips</span> - 
            <span className="">Fri, Aug 2nd, 2024</span>
        </div>
        <div className="">
            <button className="bg-green-800 text-white px-6 py-2 min-w-36 mx-4 rounded-lg hover:bg-green-600 hover:ease-in-out delay-200">Previous</button>
            <button className="bg-green-800 text-white px-6 py-2 min-w-36 mx-4 rounded-lg hover:bg-green-600 hover:ease-in-out delay-200">Next</button>
        </div>
    </div>
  )
}

export default Top