const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";
// const url = https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${Api_key};

function getWeather(){
    const city=document.getElementById('cityinput').value;
    const weatherdetails=document.getElementById('weatherdetails');
    if(city===''){
        weatherdetails.innerHTML='<p>please enter a city name</p>';
        return;
    }
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
            if(data.cod==='404'){
                weatherdetails.innerHTML='<p>city not found please try again</p>';

            }
            
            else{
                weatherdetails.innerHTML=`<h2>${data.name},${data.sys.country}</h2><p>temprature:${data.main.temp}</p>`;
            }
        })
        .catch(error=>{
            weatherdetails.innerHTML='<p>error</p>';
        });


}