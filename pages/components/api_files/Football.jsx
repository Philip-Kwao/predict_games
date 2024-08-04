// pages/football.js
import React from 'react';

const API_KEY = "013b0b42ebe14626b9b064d084e9d64d"
// const url = `https://api.sportsdata.io/v4/soccer/scores/json/Competitions?key=${API_KEY}`
const url = "https://sportapi7.p.rapidapi.com/api/v1/sport/football/categories"
const options = {
    method:"GET",
    headers: {
        // 'Ocp-Apim-Subscription-Key':`${API_KEY}`,
        // 'Content-Type': 'application/json',
        'x-rapidapi-key': 'aef1001d48mshbb37babbf135691p123fcfjsn4bcb0c59637f',
		'x-rapidapi-host': 'sportapi7.p.rapidapi.com'
    }
}

const sportsAPI = async()=>{
    try {
        const res = await fetch(url,options)
        if(!res.ok){
            throw new Error(`HTTP Error ${res.status} --- ${res.statusText}`)
        }
        const data = await res.json()
        console.log("Fetched Data: ",data)
    } catch (error) {
        console.error(error)
    }
} 
sportsAPI()
const Football = () => {

  return (
    <div>
    </div>
  );
};

export default Football;