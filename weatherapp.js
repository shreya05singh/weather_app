const cloudy=document.querySelector('#cloudy')
const sunny=document.querySelector('#sunny')
const rainy=document.querySelector('#rainy')
const windy=document.querySelector('#windy')
const form=document.querySelector('form')
const temp=document.querySelector('#temp')
const pressure=document.querySelector('#pressure')
const wind=document.querySelector('#wind')
const humid=document.querySelector('#humid')

const baseUrl=`http://api.openweathermap.org/geo/1.0/direct?`
const city= 'raipur'
const apiKey='7b35c12ad0beb0b2f99b7bcedb23b25c'



const getCoordinates =async(city) =>{
    const url =`${baseUrl}q=${city}&appid=${apiKey}`
    const res = await fetch(url)
    const data= await res.json()
    console.log(data)
    return(data)

}
/*const getCoordinates =async(city) =>{
try {
    const url =`${baseUrl}q=${city}&appid=${apiKey}`
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}*/

const getWeatherInfo = async (city) => {
    const coordinatesData = await getCoordinates(city)
    const lat = coordinatesData[0].lat
    const lon= coordinatesData[0].lon
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b35c12ad0beb0b2f99b7bcedb23b25c`
    const res = await fetch(url)
    const data= await res.json()
    
   
    console.log(data)
    /*cloudy.append(data.main.temp-273.15)
    rainy.append(data.main.humidity)
    sunny.append(data.main.pressure)
    windy.append(data.wind.speed)*/
    temp.innerText= data.main.temp-273.15
    pressure.innerText=data.main.pressure
    wind.innerText=data.wind.speed
    humid.innerText=data.main.humidity
}
form.addEventListener('submit', (e) => { 
    e.preventDefault()
    const q=e.target[0].value
    console.log(q)
   getWeatherInfo(q)
   
})



   


