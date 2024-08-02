import React from 'react'

const Predict = () => {
  return (
    <div className="bg-stone-200 p-3 max-w-[35rem] mx-auto my-4 rounded-2xl min-h-64 hover:shadow-yellow-600 hover:shadow-md duration-300 ease-in-out">
      {/* Headings */}
      <div className="flex items-center justify-between m-6 ">
        <span className="">Time</span>
        <span className="rounded-full px-6 py-1 bg-red-500 text-white text-sm">Rus</span>
        <span className="">Tip</span>
      </div>

      {/* Info */}
      <div className="flex items-center justify-between m-6">
        <span className="">16:00</span>
        <div className="text-xs">
          <span className="">Dinamo Moskva U19</span>
          <span className="mx-2">vs</span>
          <span className="">Chertanovo U20</span>
        </div>
        <span className="">BTTS/GG</span>
      </div>

      {/* Place Bet */}
      <div className="flex items-center justify-between m-6">
        <span className="">Pos. n/a</span>
        <div className="">
          <button className="rounded-lg bg-yellow-600 py-2 px-4 text-xs hover:bg-yellow-500 text-white duration-300 ease-in-out">Bet Now</button>
        </div>
        <span className="">Pos. n/a</span>
      </div>

      {/* Wins & Losses */}
      <div className="flex items-center justify-between m-6">
        <div className="">
          <span className="bg-green-600 w-5 h-5 text-white px-2 m-1 text-center text-sm">W</span>
          <span className="bg-green-600 w-5 h-5 text-white px-2 m-1 text-center text-sm">W</span>
          <span className="bg-green-600 w-5 h-5 text-white px-2 m-1 text-center text-sm">W</span>
          <span className="bg-red-600 w-5 h-5 text-white px-2 m-1 text-center text-sm">L</span>
          <span className="bg-red-600 w-5 h-5 text-white px-2 m-1 text-center text-sm">L</span>
        </div>
        <span className="">Team Forms</span>
        <div className="">
          <span className="bg-green-600 w-5 h-5 text-white px-2 m-1 text-center text-sm">W</span>
          <span className="bg-green-600 w-5 h-5 text-white px-2 m-1 text-center text-sm">W</span>
          <span className="bg-green-600 w-5 h-5 text-white px-2 m-1 text-center text-sm">W</span>
          <span className="bg-red-600 w-5 h-5 text-white px-2 m-1 text-center text-sm">L</span>
          <span className="bg-red-600 w-5 h-5 text-white px-2 m-1 text-center text-sm">L</span>
        </div>
      </div>
    </div>
  )
}

export default Predict