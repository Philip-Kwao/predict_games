
const API_KEY = '013b0b42ebe14626b9b064d084e9d64d'

const sportApi= async()=>{
    const url = `{https://api.sportsdata.io/v4/soccer/scores/json/Competitions?key=${API_KEY}`;
    const options = {
	method: 'GET',
	headers: {
		'Ocp-Apim-Subscription-Key': API_KEY,
        'Content-Type': 'application/json',
	}
}
    const res = await fetch(url,options)
    if(!res.ok){
        console.error("Failed to fetch data")
    }
    const dataJSON = await res.json()
    console.log (dataJSON)
}
sportApi()
const Football = async() => {

    return (
    <div>
        foot
    </div>
  )
}

export default Football