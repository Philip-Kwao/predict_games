import React from 'react'
import Top from '../prediction/Top'
import Predict from '../prediction/Predict'
import Links from '../prediction/Links'

const Prediction = () => {
  return (
    <div>
        <Top />
        <div className="flex items-center justify-around flex-wrap">
          <Predict />
          <Predict />
          <Predict />
          <Predict />
          <Predict />
          <Predict />
          <Predict />
        </div>
        <Links />
    </div>
  )
}

export default Prediction