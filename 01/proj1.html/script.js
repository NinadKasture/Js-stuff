const button=document.getElementById("search-button");
const input=document.getElementById("input-field");

const cityname=document.getElementById('city_name');
const citytime=document.getElementById('city_time');
const citytemp=document.getElementById('city_temp');


const data=async function(city_name){
   
    const response=await fetch(`http://api.weatherapi.com/v1/current.json?key=d52043d8f3ea4ce2a58180207250403&q=${city_name}&aqi=yes`);
   return await  response.json();

} 

button.addEventListener("click", async function(){
    const city_name=input.value;
    const result= await data(city_name);
    cityname.innerText=`${result.location.name}, ${result.location.region}`;
    citytime.innerText=`${result.location.localtime}`;
    citytemp.innerText=`${result.current.temp_c}°C`;
}) 
 