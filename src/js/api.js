import * as cloud from '../assets/clouds.svg';
import * as atmosphere from '../assets/atmosphere.svg';
import * as drizzle from '../assets/drizzle.svg';
import * as rain from '../assets/rain.svg';
import * as snow from '../assets/snow.svg';
import * as storm from '../assets/storm.svg';
import * as sun from '../assets/sun.svg';
export function weatherApi() {
  const temp = document.querySelector('.dashboard-temp-value');
  const icon = document.querySelector('.icon');
  const location = document.querySelector('.location');
  async function getWeather(api) {
    const res = await fetch(api);
    const data = await res.json();
    return data;
  }
  window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        // console.log(lat, long);
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=18a143b3f0c9d0d9dcc8c5b30028f6c0`;
        getWeather(api).then((data) => {
          // console.log(data);
          // console.log(temp);
          // const sumbol = `&#8451;`
          const { country } = data.sys;
          const { feels_like } = data.main;
          const { id, main } = data.weather[0];
          const tempValue = Math.round(feels_like - 273);
          temp.innerHTML = `<p class="dashboard-temp-value">
          ${tempValue}
          <span class="dashboard-temp-unit">&#8451;</span>
        </p>`;
          // if (id < 250) {
          //   icon.src = storm;
          // } else if (id < 350) {
          //   icon.src = drizzle;
          // } else if (id < 550) {
          //   icon.src = rain;
          // } else if (id < 650) {
          //   icon.src = snow;
          // } else if (id < 800) {
          //   icon.src = atmosphere;
          // } else if (id === 800) {
          //   icon.src = sun;
          // } else if (id > 800) {
          //   icon.src = cloud;
          //   // icon.setAttribute('src', cloud);
          // }
        });
      });
    }
  });
}
export function locationApi() {
  async function getLocation() {
    const response = await fetch('https://worldtimeapi.org/api/ip');
    const data = await response.json();
    return data;
  }
  const location = document.querySelector('.dashboard-location');

  getLocation().then((loc) => {
    location.textContent = loc.timezone;
  });
}
// export function weatherApi() {
//   window.addEventListener('load', weatherApi);
//   export async function getWeather() {
//     //   const res = await fetch('');
//     //   const data = await res.json();
//     //   return data;
//     // }
// function weatherApi() {
//   let long;
//   let lat;

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       lat = position.coords.latitude;
//       long = position.coords.longitude;
//       console.log(lat, long);
//       const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=18a143b3f0c9d0d9dcc8c5b30028f6c0`;
//       // getWeather(`http://api.weatherstack.com/current?access_key=e21d151c778c4855606752200b7477e9&query=Lagos
//       // `).then((data) => {
//       //   console.log(data);
//       // });
//       fetch(api)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => console.log(data));
//     });
//   }
// }

//   }

// export async function getLocation() {
//   const res = await fetch('');
//   const data = await res.json();
//   return data;
// }
// const loc = getLocation().then((location) => {
//   console.log(String(location.timezone));
// });
// loc.split()
