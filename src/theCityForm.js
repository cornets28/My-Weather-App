const theCityForm = `


  <div class="weatherHead">
    <h1> Weather App</h1>
    </div>
      <form id="city-search">
        
          <div class="card-body">
            <label for="city-name">
              Enter your City
              <input type="text" id="city-name" class="form-control form-control-lg" required minlength="3" maxlength="20">
            </label>
            <button id="btn-city-search" class="btn btn-primary btn-lg">Search</button>
        </div>
    
      </form>
    </div>
        
  </div>
  `;


export default theCityForm;


// try this tomorrow:
// create a file like theCityFrom
// call in the if statement in the CondRain but  with a static image


// const template = `
//   <div class="popup">

//     <div class="popup-weather-main">
//       <div class="popup-weather-img">
//         <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png">
//       </div>
//       <h4 class="popup-temp"><span class="value">${weatherData.main.temp}</span>
//       <span class="unit">°C</span></h4>
//     </div>
//     <div class="popup-weather-desc">${weatherData.weather[0].description.toUpperCase()}</div>
//   </div>
//   `;
