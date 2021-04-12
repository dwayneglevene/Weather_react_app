import React, {useState} from "react";
import DisplayWeather from "./DisplayWeather.js"
import  "./weather.css";
function Weather(){

    const APIKEY = "5a25a3b5ecb23af5753b8828087d2eb7";

    const [form,setForm] = useState({
        city:"",
        country:""
    });

    const [weather,setWeather] = useState([])

    async function weatherData(e){
        e.preventDefault();
        if(form.city == ""){
            alert("add values");
        }
        else{
            const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
        )   
            .then((res) => res.json())
            .then((data) => data);

            setWeather(
            {
                data : data
            }
        );
    }
}
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name == "city"){
            setForm({...form,city:value})
        }

        if(name == "country"){
            setForm({...form, country:value})
        }
        console.log(form.city,form.country)
    };
    return(
        <div className="weather">
            <span className="title">Weather App</span>

            
            <br/>

            <form>
                <input type="text" name="city" placeholder="city" onChange={(e) => handleChange(e)} />

                &nbsp;  &nbsp;  &nbsp;  &nbsp;



                <input type="text" name="country" placeholder="country" onChange={(e) => handleChange(e)}/>
                <button className ="getweather" onClick={(e) => weatherData(e)}>Submit</button>
            </form>

            {
                weather.data != undefined ?
                

                <div>
                    <DisplayWeather data={weather.data} />

                    </div>
                : null
            }
        </div>
    )
}

export default Weather