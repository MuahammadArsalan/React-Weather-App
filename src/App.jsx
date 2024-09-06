import axios from "axios";
import React,{ useRef, useState } from "react"
import Card from "./Components/Card";

// 


//       let data = await axios(`http://api.weatherapi.com/v1/current.json?key=244219279edd49bda5932642240509&q=${cityVal.current.value}&aqi=no`);


function App(){

  let [weather,setWeather]=useState([]);
  
  let cityVal = useRef();


  async function getData(e){
    e.preventDefault()
    try {
      
      let res = await axios(`http://api.weatherapi.com/v1/current.json?key=244219279edd49bda5932642240509&q=${cityVal.current.value}&aqi=no
        `)
        
        console.log(res.data);
        
        
        weather.push(res)
        setWeather(weather , ...[weather]);

console.log(weather);



} catch (error) {
console.log(error);

}
  }

return(

<>

<div>
  
<input type="text" placeholder="Enter city Name" ref={cityVal}/>
<button onClick={getData}>Search</button>

{weather.length > 0 ? weather.map((item,index)=>{
  
  return <div key={index}>
  
<Card src={item.data.current.condition.icon } city={item.data.location.name}  country={item.data.location.country}  region={item.data.location.region} temperature={item.data.current.temp_c} date={item.data.location.localtime}/>
{/* <Card city={item.data.location.name}  country={item.data.location.country} region={item.data.location.region} src={item.data.current.condition.icon }/> */}


  </div>
  
}):<p>Loading....</p>}

</div>
  


</>


)

}
export default App
















