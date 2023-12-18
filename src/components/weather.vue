<template>
    <svg v-if="weather==='CLEAR_DAY'"  version="1.1"
         id="sunFill"
         class="climacon climacon_sunFill"
         viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-sunFill">
        <g class="climacon_componentWrap climacon_componentWrap-sun">
          <g class="climacon_componentWrap climacon_componentWrap-sunSpoke">
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                d="M72.03,51.999h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S73.136,51.999,72.03,51.999z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
                d="M64.175,38.688c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.175,38.688z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M50.034,34.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.034,33.106,51.136,34.002,50.034,34.002z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
                d="M35.893,38.688l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C37.94,39.469,36.674,39.469,35.893,38.688z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
                d="M34.034,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C33.14,48,34.034,48.896,34.034,50z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southWest"
                d="M35.893,61.312c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L35.893,61.312z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-south"
                d="M50.034,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C48.034,66.893,48.929,65.998,50.034,65.998z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southEast"
                d="M64.175,61.312l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C62.126,60.531,63.392,60.531,64.175,61.312z"/>
          </g>
          <g class="climacon_componentWrap climacon_componentWrap_sunBody">
            <circle class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                    cx="50.034"
                    cy="50"
                    r="11.999"/>
            <circle class="climacon_component climacon_component-fill climacon_component-fill_sunBody"
                    fill="#FFFFFF"
                    cx="50.034"
                    cy="50"
                    r="7.999"/>
          </g>
        </g>
      </g>
    </svg><!-- sunFill -->

    <svg v-else-if="weather==='CLEAR_NIGHT'" version="1.1"
         id="moon"
         class="climacon climacon_moonFill"
         viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-moonFill">
        <g class="climacon_componentWrap climacon_componentWrap-moon">
          <path class="climacon_component climacon_component-stroke climacon_component-stroke_moon"
                d="M50,61.998c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C61.998,56.626,56.626,61.998,50,61.998z"/>
          <path
              class="climacon_component climacon_component-fill climacon_component-fill_moon"
              fill="#FFFFFF"
              d="M48.212,42.208c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C52.938,50.884,49.115,47.062,48.212,42.208z"/>
        </g>
      </g>
    </svg><!-- moonFill -->

    <svg v-else-if="weather==='DUST'||weather==='SAND'" version="1.1"
         id="wind"
         class="climacon climacon_wind"
         viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-wind">
        <g class="climacon_wrapperComponent climacon_componentWrap-wind">
          <path
              class="climacon_component climacon_component-stroke climacon_component-wind climacon_component-wind_curl"
              d="M65.999,52L65.999,52h-3c-1.104,0-2-0.895-2-1.999c0-1.104,0.896-2,2-2h3c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2s-2-0.896-2-2s0.896-2,2-2c0.138,0,0.271,0.014,0.401,0.041c3.121,0.211,5.597,2.783,5.597,5.959C71.997,49.314,69.312,52,65.999,52z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-wind"
              d="M55.999,48.001h-2h-6.998H34.002c-1.104,0-1.999,0.896-1.999,2c0,1.104,0.895,1.999,1.999,1.999h2h3.999h3h4h3h3.998h2c3.313,0,6,2.688,6,6c0,3.176-2.476,5.748-5.597,5.959C56.271,63.986,56.139,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2s2-0.896,2-2s-0.896-2-2-2h-2h-3.998h-3h-4h-3h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998h2c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2-0.895-2-2c0-1.104,0.896-2,2-2c0.14,0,0.272,0.015,0.403,0.041c3.121,0.211,5.597,2.783,5.597,5.959C61.999,45.314,59.312,48.001,55.999,48.001z"/>
        </g>
      </g>
    </svg><!-- wind -->

    <svg v-else-if="weather==='WIND'" 
        version="1.1"
        id="tornado"
        class="climacon climacon_tornado"
        viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-tornado">
        <g class="climacon_componentWrap climacon_componentWrap-tornado">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_tornadoLine"
              d="M68.997,36.459H31.002c-1.104,0-2-0.896-2-1.999c0-1.104,0.896-2,2-2h37.995c1.104,0,2,0.896,2,2C70.997,35.563,70.102,36.459,68.997,36.459z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_tornadoLine"
              d="M35.002,40.459h29.996c1.104,0,2,0.896,2,2s-0.896,1.999-2,1.999H35.002c-1.104,0-2-0.896-2-1.999C33.002,41.354,33.898,40.459,35.002,40.459z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_tornadoLine"
              d="M39.001,48.458h21.998c1.104,0,1.999,0.896,1.999,1.999c0,1.104-0.896,2-1.999,2H39.001c-1.104,0-1.999-0.896-1.999-2C37.002,49.354,37.897,48.458,39.001,48.458z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_tornadoLine"
              d="M47,64.456h5.999c1.104,0,2,0.896,2,1.999s-0.896,2-2,2H47c-1.104,0-2-0.896-2-2S45.896,64.456,47,64.456z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_tornadoLine"
              d="M40.869,58.456c0-1.104,0.896-1.999,2-1.999h13.998c1.104,0,2,0.896,2,1.999c0,1.104-0.896,2-2,2H42.869C41.765,60.456,40.869,59.561,40.869,58.456z"/>
        </g>
      </g>
    </svg><!-- tornado -->

    <svg v-else-if="weather==='CLOUDY'" 
        version="1.1"
        id="cloudFill"
        class="climacon climacon_cloudFill"
        viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-cloud">
        <g class="climacon_componentWrap climacon_componentWrap_cloud">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"/>
          <path
              class="climacon_component climacon_component-fill climacon_component-fill_cloud"
              fill="#FFFFFF"
              d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"/>
        </g>
      </g>
    </svg><!-- cloudFill  -->

    <svg v-else-if="weather==='PARTLY_CLOUDY_DAY'"  
        version="1.1"
        id="cloudSunFill"
        class="climacon climacon_cloudSunFill"
        viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_cloudSunFill-iconWrap">
        <g class="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
          <g class="climacon_componentWrap climacon_componentWrap_sunSpoke">
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z"/>
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z"/>
          </g>
          <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
            <circle
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                cx="58.033"
                cy="41.612"
                r="11.999"
            />
            <circle
                class="climacon_component climacon_component-fill climacon_component-fill_sunBody"
                fill="#FFFFFF"
                cx="58.033"
                cy="41.612" r="7.999"
            />
          </g>
        </g>
        <g class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z"/>
          <path
              class="climacon_component climacon_component-fill climacon_component-fill_cloud"
              fill="#FFFFFF"
              d="M60.035,61.641c4.418,0,8-3.582,8-7.998c0-4.418-3.582-8-8-8c-1.6,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.976-9.29-11.668-9.29c-6.627,0-11.999,5.372-11.999,11.999c0,6.627,5.372,11.998,11.999,11.998C47.65,61.641,57.016,61.641,60.035,61.641z"/>
        </g>
      </g>
    </svg><!-- cloudSunFill -->

    <svg v-else-if="weather==='PARTLY_CLOUDY_NIGHT'"
        version="1.1"
        id="cloudMoonFill"
        class="climacon climacon_cloudMoonFill"
        viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-cloudMoonFill">
        <g class="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_moon"
              d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"/>
          <path
              class="climacon_component climacon_component-fill climacon_component-fill_moon"
              fill="#FFFFFF"
              d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z"/>
        </g>
        <g class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z"/>
          <path
              class="climacon_component climacon_component-fill climacon_component-fill_cloud"
              fill="#FFFFFF"
              d="M60.035,61.641c4.418,0,8-3.582,8-7.998c0-4.418-3.582-8-8-8c-1.6,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.976-9.29-11.668-9.29c-6.627,0-11.999,5.372-11.999,11.999c0,6.627,5.372,11.998,11.999,11.998C47.65,61.641,57.016,61.641,60.035,61.641z"/>
        </g>
      </g>
    </svg><!-- cloudMoonFill -->

    <svg v-else-if="weather==='MODERATE_RAIN'"
        version="1.1"
        id="cloudDrizzleFill"
        class="climacon climacon_cloudDrizzleFill"
        viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-cloudDrizzleFill">
        <g class="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left"
              d="M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle"
              d="M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right"
              d="M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z"/>
        </g>

        <g class="climacon_componentWrap climacon_componentWrap_cloud">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"/>
          <path
              class="climacon_component climacon_component-fill climacon_component-fill_cloud"
              fill="#FFFFFF"
              d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"/>
        </g>
      </g>
    </svg><!-- cloudDrizzleFill -->

    <svg v-else-if="weather==='HEAVY_RAIN'||weather==='STORM_RAIN'" 
        version="1.1"
        id="cloudRainFill"
        class="climacon climacon_cloudRainFill"
        viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-cloudRainFill">
        <g class="climacon_wrapperComponent climacon_wrapperComponent-rain">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left"
              d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle"
              d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right"
              d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left"
              d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle"
              d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right"
              d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"/>
        </g>
        <g class="climacon_componentWrap climacon_componentWrap_cloud">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"/>
          <path
              class="climacon_component climacon_component-fill climacon_component-fill_cloud"
              fill="#FFFFFF"
              d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"/>
        </g>
      </g>
    </svg><!-- cloudRainFill -->

    <svg v-else-if="weather==='LIGHT_RAIN'" 
        version="1.1"
        id="cloudRainAltFill"
        class="climacon climacon_cloudRainAltFill"
        viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-cloudRainAltFill">
        <g class="climacon_wrapperComponent climacon_wrapperComponent-rain climacon_wrapperComponent-rain_alt">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- alt"
              d="M50.001,58.568l3.535,3.535c1.95,1.953,1.95,5.119,0,7.07c-1.953,1.953-5.119,1.953-7.07,0c-1.953-1.951-1.953-5.117,0-7.07L50.001,58.568z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- alt"
              d="M50.001,58.568l3.535,3.535c1.95,1.953,1.95,5.119,0,7.07c-1.953,1.953-5.119,1.953-7.07,0c-1.953-1.951-1.953-5.117,0-7.07L50.001,58.568z"/>
        </g>
        <g class="climacon_componentWrap climacon_componentWrap_cloud">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"/>
          <path
              class="climacon_component climacon_component-fill climacon_component-fill_cloud"
              fill="#FFFFFF"
              d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"/>
        </g>
      </g>
    </svg><!-- cloudRainAlt -->

    <svg v-else-if="weather==='LIGHT_SNOW'||weather==='MODERATE_SNOW'||weather==='HEAVY_SNOW'||weather==='STORM_SNOW'" 
        version="1.1"
        id="cloudSnowAltFill"
        class="climacon climacon_cloudSnowAltFill"
        viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-cloudSnowAltFill">
        <g class="climacon_wrapperComponent climacon_wrapperComponent-snowAlt">
          <g class="climacon_component climacon_component climacon_component-snowAlt">
            <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_snowAlt"
                d="M43.072,59.641c0.553-0.957,1.775-1.283,2.732-0.731L48,60.176v-2.535c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.535l2.195-1.268c0.957-0.551,2.18-0.225,2.73,0.732c0.553,0.957,0.225,2.18-0.73,2.731l-2.196,1.269l2.196,1.268c0.955,0.553,1.283,1.775,0.73,2.732c-0.552,0.954-1.773,1.282-2.73,0.729L52,67.104v2.535c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2v-2.535l-2.195,1.269c-0.957,0.553-2.18,0.226-2.732-0.729c-0.552-0.957-0.225-2.181,0.732-2.732L46,63.641l-2.195-1.268C42.848,61.82,42.521,60.598,43.072,59.641z"/>
            <circle
                class="climacon_component climacon_component-fill climacon_component-fill_snowAlt"
                fill="#FFFFFF"
                cx="50"
                cy="63.641"
                r="2"/>
          </g>
        </g>
        <g class="climacon_componentWrap climacon_componentWrap_cloud">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"/>
          <path
              class="climacon_component climacon_component-fill climacon_component-fill_cloud"
              fill="#FFFFFF"
              d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"/>
        </g>
      </g>
    </svg><!-- cloudSnowAltFill -->

    <svg v-else-if="weather==='MODERATE_HAZE'||weather==='FOG'" 
        version="1.1"
        id="cloudFogFill"
        class="climacon climacon_cloudFogFill"
        viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-cloudFog">
        <g class="climacon_wrapperComponent climacon_wrapperComponent-Fog">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-top"
              d="M69.998,57.641H30.003c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,56.746,71.104,57.641,69.998,57.641z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-middle"
              d="M69.998,65.641H30.003c-1.104,0-2-0.896-2-2s0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,64.744,71.104,65.641,69.998,65.641z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-bottom"
              d="M30.003,69.639h39.995c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H30.003c-1.104,0-2-0.895-2-2C28.003,70.535,28.898,69.639,30.003,69.639z"/>
        </g>
        <g class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M59.999,45.643c-1.601,0-3.083,0.48-4.333,1.291c-1.232-5.317-5.974-9.291-11.665-9.291c-6.626,0-11.998,5.373-11.998,12h-4c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c5.222,0,9.651,3.342,11.301,8h-4.381C65.535,47.253,62.958,45.643,59.999,45.643z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M71.287,49.355c-1.659-4.632-6.08-7.954-11.289-7.954c-0.695,0-1.369,0.091-2.033,0.205C55.229,36.72,50.004,33.413,44,33.413c-8.824,0-15.977,7.134-15.996,15.942H71.287z"/>
          <path
              fill="#FFFFFF"
              class="climacon_component climacon_component-fill climacon_component-fill_cloud"
              d="M66.897,49.376c-1.389-2.369-3.955-3.965-6.899-3.965c-1.602,0-3.082,0.48-4.334,1.291c-1.23-5.316-5.973-9.291-11.664-9.291c-6.615,0-11.977,5.354-11.996,11.965H66.897z"/>
        </g>
      </g>
    </svg><!--cloudFogFill -->

    <svg v-else-if="weather==='LIGHT_HAZE'" 
        version="1.1"
        id="cloudFogSunFill"
        class="climacon climacon_cloudFogSunFill"
        viewBox="15 15 70 70">
      <clipPath id="cloudFillClip">
        <path
            d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"/>
      </clipPath>
      <clipPath id="sunCloudFillClip">
        <path
            d="M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z"/>
      </clipPath>
      <clipPath id="cloudSunFillClip">
        <path
            d="M15,15v70h20.947V63.481c-4.778-2.767-8-7.922-8-13.84c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,5.262-3.394,9.723-8.107,11.341V85H85V15H15z"/>
      </clipPath>
      <g class="climacon_iconWrap climacon_iconWrap-cloudFogSunFill">
        <g clip-path="url(#cloudSunFillClip)">
          <g class="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
            <g class="climacon_componentWrap climacon_componentWrap_sunSpoke">
              <path
                  class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                  d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z"/>
              <path
                  class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                  d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z"/>
              <path
                  class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                  d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z"/>
              <path
                  class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                  d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z"/>
              <path
                  class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                  d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z"/>
              <path
                  class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                  d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z"/>
              <path
                  class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                  d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z"/>
              <path
                  class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                  d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z"/>
            </g>
            <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
              <circle
                  class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                  cx="58.033"
                  cy="41.612"
                  r="11.999"/>
              <circle
                  class="climacon_component climacon_component-fill climacon_component-fill_sunBody"
                  fill="#FFFFFF"
                  cx="58.033"
                  cy="41.612" r="7.999"/>
            </g>
          </g>
        </g>
        <g class="climacon_wrapperComponent climacon_wrapperComponent-Fog">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-top"
              d="M69.998,57.641H30.003c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,56.746,71.104,57.641,69.998,57.641z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-middle"
              d="M69.998,65.641H30.003c-1.104,0-2-0.896-2-2s0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,64.744,71.104,65.641,69.998,65.641z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-bottom"
              d="M30.003,69.639h39.995c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H30.003c-1.104,0-2-0.895-2-2C28.003,70.535,28.898,69.639,30.003,69.639z"/>
        </g>
        <g class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M59.999,45.643c-1.601,0-3.083,0.48-4.333,1.291c-1.232-5.317-5.974-9.291-11.665-9.291c-6.626,0-11.998,5.373-11.998,12h-4c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c5.222,0,9.651,3.342,11.301,8h-4.381C65.535,47.253,62.958,45.643,59.999,45.643z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M71.287,49.355c-1.659-4.632-6.08-7.954-11.289-7.954c-0.695,0-1.369,0.091-2.033,0.205C55.229,36.72,50.004,33.413,44,33.413c-8.824,0-15.977,7.134-15.996,15.942H71.287z"/>
          <path
              fill="#FFFFFF"
              class="climacon_component climacon_component-fill climacon_component-fill_cloud"
              d="M66.897,49.376c-1.389-2.369-3.955-3.965-6.899-3.965c-1.602,0-3.082,0.48-4.334,1.291c-1.23-5.316-5.973-9.291-11.664-9.291c-6.615,0-11.977,5.354-11.996,11.965H66.897z"/>
        </g>
      </g>
    </svg><!-- cloudFogSunFill -->

    <svg v-else-if="weather==='HEAVY_HAZE'" 
        version="1.1"
        id="cloudFogAltFill"
        class="climacon climacon_cloudFogAltFill"
        viewBox="15 15 70 70">
      <g class="climacon_iconWrap climacon_iconWrap-cloudFogAltFill">
        <g class="climacon_wrapperComponent climacon_wrapperComponent-Fog">
          <g class="climacon_componentWrap climacon_componentWrap_cloud">
            <path
                class="climacon_component climacon_component-fill climacon_component-fill_cloud"
                fill="#FFFFFF"
                d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"/>
          </g>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
              d="M29.177,55.641c-0.262-0.646-0.473-1.314-0.648-2h43.47c0,0.685-0.069,1.349-0.181,2H29.177z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
              d="M36.263,35.643c2.294-1.271,4.93-1.999,7.738-1.999c2.806,0,5.436,0.73,7.728,1.999H36.263z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
              d="M28.142,47.642c0.085-0.682,0.218-1.347,0.387-1.999h40.396c0.552,0.613,1.039,1.281,1.455,1.999H28.142z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
              d="M29.177,43.643c0.281-0.693,0.613-1.359,0.984-2h27.682c0.04,0.068,0.084,0.135,0.123,0.205c0.664-0.114,1.339-0.205,2.033-0.205c2.451,0,4.729,0.738,6.627,2H29.177z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
              d="M31.524,39.643c0.58-0.723,1.225-1.388,1.92-2h21.123c0.689,0.61,1.326,1.28,1.902,2H31.524z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
              d="M71.816,51.641H28.142c-0.082-0.656-0.139-1.32-0.139-1.999h43.298C71.527,50.285,71.702,50.953,71.816,51.641z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
              d="M71.301,57.641c-0.246,0.699-0.555,1.367-0.921,2H31.524c-0.505-0.629-0.957-1.299-1.363-2H71.301z"/>
          <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
              d="M33.444,61.641h35.48c-0.68,0.758-1.447,1.435-2.299,2H36.263C35.247,63.078,34.309,62.4,33.444,61.641z"/>
        </g>

      </g>
    </svg><!--cloudFogAltFill -->
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "weather",
  props: {
    weather: String,
  },
})
</script>

<style lang="scss" scoped>
@use "sass:math";

/* VARIABLES */
$baseAnimationDuration: 18s;
$size: 60px;
$svgSize: 70px;

//vars specific for curves
$animationStep: 2;
$increase: math.$pi / 100;

$backgroundColor: #d6fffd;
$fontColor: white;
$strokeColor: #000000;
$fillColor: #aedef4;

/* Applies a stroke to the icons. Can use percentage for responsive */
$strokeStrokeWidth: 0%;
$strokeStrokeColor: black;
$fillStrokeWidth: 0%;
$fillStrokeColor: black;

.climacon_component-stroke {
    fill: $strokeColor;
    stroke-width: $strokeStrokeWidth;
    stroke: $strokeStrokeColor;
}

.climacon_component-fill {
    fill: $fillColor;
    stroke-width: $fillStrokeWidth;
    stroke: $fillStrokeColor;
}

/* SVG GLOBAL */

svg {
    width: $size;
    height: $size;
    shape-rendering: geometricPrecision;
}

g, path, circle, rect {
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: 50% 50%;
    animation-duration: $baseAnimationDuration;
    animation-direction: normal;
}

/* SUN */

.climacon_componentWrap-sun {
    animation-name: rotate;
    transform-origin: 50px 50px;
}

.climacon_componentWrap_sunSpoke .climacon_component-stroke_sunSpoke {
    animation-name: scale;
    animation-direction: alternate;
    animation-duration: $baseAnimationDuration / 4;
}

.climacon_componentWrap_sunSpoke .climacon_component-stroke_sunSpoke:nth-child(even) {
    animation-delay: $baseAnimationDuration / 4;
}

/* MOON */

.climacon_componentWrap-moon {
    animation-name: partialRotate;
    animation-duration: $baseAnimationDuration;
    animation-direction: alternate;
}

/* WIND */

.climacon_componentWrap-wind {
    animation-name: translateWind;
    animation-duration: $baseAnimationDuration / 3;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
}

/* SNOWFLAKE */

.climacon_componentWrap-snowflake {
    animation-name: rotate;
    animation-duration: $baseAnimationDuration * 3;
    animation-direction: normal;
    transform-origin: 50px 50px;
}

/* CLOUD SUN */

.climacon_componentWrap-sun_cloud {
    animation-name: rotate;
    animation-iteration-count: 1, infinite;
    animation-timing-function: ease-out, linear;
    animation-delay: 0, $baseAnimationDuration / 4;
    animation-duration: $baseAnimationDuration / 4, $baseAnimationDuration;
}

.climacon_componentWrap-sun_cloud .climacon_componentWrap_sunSpoke .climacon_component-stroke_sunSpoke {
    fill-opacity: 0;
    animation-name: fillOpacity, scale;
        transform-origin: 50px 50px;
    animation-iteration-count: 1, infinite;
    animation-delay: $baseAnimationDuration / 4, 0;
    animation-fill-mode: both;
}

.climacon_componentWrap-sun_cloud .climacon_componentWrap_sunSpoke .climacon_component-stroke_sunSpoke:nth-child(even) {
    animation-delay: $baseAnimationDuration / 4;
}

/* CLOUD MOON */

.climacon_componentWrap-moon_cloud {
    animation-name: behindCloudMove, partialRotate;
    animation-iteration-count: 1, infinite;
    animation-timing-function: ease-out, linear;
    animation-delay: 0, $baseAnimationDuration / 4;
    animation-duration: $baseAnimationDuration / 4, $baseAnimationDuration;
}

/* DRIZZLE */

.climacon_component-stroke_drizzle {
    fill-opacity: 0;
    animation-name: drizzleFall, fillOpacity2;
    animation-timing-function: ease-in;
    animation-duration: $baseAnimationDuration / 12;
}

@for $i from 1 through 3 {
    .climacon_component-stroke_drizzle:nth-child(#{$i}) {
        animation-delay: $baseAnimationDuration * 0.05 * $i - $baseAnimationDuration * 0.05;
    }
}

/* RAIN */

.climacon_component-stroke_rain {
    fill-opacity: 0;
    animation-name: rainFall, fillOpacity2;
    animation-timing-function: ease-in;
    animation-duration: $baseAnimationDuration / 6;
}

.climacon_component-stroke_rain:nth-child(n+4) {
    animation-delay: $baseAnimationDuration / 12;
}

.climacon_component-stroke_rain_alt:nth-child(2) {
    animation-delay: $baseAnimationDuration / 12;
}

/* HAIL */

.climacon_component-stroke_hail {
    //animation-name: translateY, fillOpacity2
    //animation-timing-function: ease-in
    //animation-duration: $baseAnimationDuration / 24
}

/* HAIL ALT */

.climacon_component-stroke_hailAlt {
    fill-opacity: 1;
    animation-timing-function: ease-in;
    animation-duration: $baseAnimationDuration / 18;
}

.climacon_component-stroke_hailAlt-left {
    animation-name: hailLeft, fillOpacity2;
}

.climacon_component-stroke_hailAlt-middle {
    animation-name: hailMiddle, fillOpacity2;
}

.climacon_component-stroke_hailAlt-middle:nth-child(2) {
    animation-name: hailMiddle2, fillOpacity2;
}

.climacon_component-stroke_hailAlt-right {
    animation-name: hailRight, fillOpacity2;
}

@for $i from 1 through 6 {
    .climacon_component-stroke_hailAlt:nth-child(#{$i}) {
        animation-delay: $baseAnimationDuration / 18 / 6 * $i - $baseAnimationDuration / 18 / 6;
    }
}

/* SNOW */

.climacon_component-stroke_snow {
    fill-opacity: 0;
    animation-name: snowFall, fillOpacity2;
    animation-timing-function: ease-in-out;
    animation-duration: $baseAnimationDuration / 2;
}

.climacon_component-stroke_snow:nth-child(3) {
    animation-name: snowFall2, fillOpacity2;
}

@for $i from 1 through 3 {
    .climacon_component-stroke_snow:nth-child(#{$i}) {
        animation-delay: $baseAnimationDuration / 2 / 3 * $i - $baseAnimationDuration / 2 / 3;
    }
}

/* SNOW ALT */

.climacon_wrapperComponent-snowAlt {
    fill-opacity: 0;
    animation-name: snowFall, fillOpacity2;
    animation-timing-function: ease-in-out;
    animation-duration: $baseAnimationDuration / 2;
}

/* FOG */

.climacon_component-stroke_fogLine {
    fill-opacity: 0.5;
    animation-name: translateFog, fillOpacityFog;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-timing-function: ease-in;
    animation-duration: $baseAnimationDuration;
}

.climacon_component-stroke_fogLine:nth-child(even) {
    animation-delay: $baseAnimationDuration / 2;
}

/* LIGHTNING */

.climacon_component-stroke_lightning {
    fill-opacity: 0;
    animation-name: fillOpacityLightning;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-timing-function: ease-out;
    animation-duration: $baseAnimationDuration;
}

/* TORNADO */

.climacon_component-stroke_tornadoLine {
    animation-name: translateTornado1;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-duration: $baseAnimationDuration;
}

.climacon_component-stroke_tornadoLine:nth-child(1) {
    animation-name: translateTornado1;
}

.climacon_component-stroke_tornadoLine:nth-child(2) {
    animation-name: translateTornado2;
}

.climacon_component-stroke_tornadoLine:nth-child(3) {
    animation-name: translateTornado3;
}

.climacon_component-stroke_tornadoLine:nth-child(4) {
    animation-name: translateTornado4;
}

.climacon_component-stroke_tornadoLine:nth-child(5) {
    animation-name: translateTornado5;
}

.climacon_component-stroke_tornadoLine:nth-child(6) {
    animation-name: translateTornado6;
}

.climacon_componentWrap-sunsetAlt {
    animation-name: translateSunset;
    animation-duration: $baseAnimationDuration / 4;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
}

.climacon_componentWrap-sunsetAlt {
    animation-name: translateSunset;
    animation-iteration-count: 1;
}

.climacon_iconWrap-sun .climacon_component-stroke_sunSpoke, .climacon_iconWrap-sunFill .climacon_component-stroke_sunSpoke {
    fill-opacity: 1;
    animation-name: scale;
    transform-origin: 50px 50px;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-direction: alternate;
}

.climacon_iconWrap-sun .climacon_component-stroke_sunSpoke:nth-child(even), .climacon_iconWrap-sunFill .climacon_component-stroke_sunSpoke:nth-child(even) {
    animation-delay: $baseAnimationDuration / 4;
}

.climacon-iconWrap_sunFill .climacon_component-stroke_sunSpoke {
    fill-opacity: 1;
    animation-name: scale;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-direction: alternate;
}

.climacon-iconWrap_sunFill .climacon_component-stroke_sunSpoke:nth-child(even) {
    animation-delay: $baseAnimationDuration / 4;
}

.climacon_component-stroke_arrow-up {
    fill-opacity: 0;
    animation-name: fillOpacity2, translateArrowUp;
    animation-duration: $baseAnimationDuration / 4;
}

.climacon_component-stroke_arrow-down {
    fill-opacity: 0;
    animation-name: fillOpacity2, translateArrowDown;
    animation-duration: $baseAnimationDuration / 4;
}

.climacon_componentWrap-sunrise .climacon_component-stroke_sunSpoke, .climacon_componentWrap-sunset .climacon_component-stroke_sunSpoke {
    animation-name: scale;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-duration: $baseAnimationDuration / 4;
    animation-fill-mode: both;
}

.climacon_componentWrap-sunrise .climacon_component-stroke_sunSpoke:nth-child(even), .climacon_componentWrap-sunset .climacon_component-stroke_sunSpoke:nth-child(even) {
    animation-delay: $baseAnimationDuration / 4;
}

.climacon_componentWrap-sunriseAlt {
    animation-name: translateSunrise, fillOpacity;
    animation-duration: $baseAnimationDuration, $baseAnimationDuration / 2;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.climacon_componentWrap-sunriseAlt .climacon_component-stroke_sunSpoke {
    fill-opacity: 0;
    animation-name: fillOpacity, scale;
    animation-direction: normal, alternate;
    animation-iteration-count: 1, infinite;
    animation-duration: $baseAnimationDuration / 4;
    animation-delay: $baseAnimationDuration / 4, 0;
    animation-fill-mode: both;
}

.climacon_componentWrap-sunriseAlt .climacon_component-stroke_sunSpoke:nth-child(even) {
    animation-delay: $baseAnimationDuration / 4, $baseAnimationDuration / 4;
}

.climacon_componentWrap-sunsetAlt {
    animation-name: translateSunset;
    animation-duration: $baseAnimationDuration;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

/* ANIMATIONS */

@keyframes rotate {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}


@keyframes partialRotate {
    0% {
        transform: rotate(0);
    }
    25% {
        transform: rotate(-15deg);
    }
    50% {
        transform: rotate(0);
    }
    75% {
        transform: rotate(15deg);
    }
    100% {
        transform: rotate(0deg);
    }
}


@keyframes scale {
    0% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(0.5, 0.5);
    }
}


@keyframes behindCloudMove {
    0% {
        transform: translateX(-$svgSize * 0.025) translateY($svgSize * 0.025);
            }
    100% {
        transform: translateX(0) translateY(0);
    }
}


@keyframes drizzleFall {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY($svgSize * 0.3);
    }
}


@keyframes rainFall {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY($svgSize * 0.2);
    }
}


@keyframes rainFall2 {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY($svgSize * 0.2);
    }
    100% {
        transform: translateX($svgSize * 0.2) translateY($svgSize * 0.2);
    }
}


$i: 51;
$t: 0;

@keyframes hailLeft {
    0% {}
    50% {
        transform: translateY($svgSize * 0.25);
    }
    @while $i <= 100 {
        #{$i}% {
            $eq: math.sin($t) / 2;
            transform: translateY($eq * -($svgSize * 0.25) + $svgSize * 0.25) translateX(-0.3px * ($i - 50));
        }
        $t: $t + $increase * $animationStep * 2;
        $i: $i + $animationStep;
    }
}

$i: 51;
$t: 0;
@keyframes hailMiddle {
    0% {}
    50% {
        transform: translateY($svgSize * 0.25);
    }
    @while $i <= 100 {
        #{$i}% {
            $eq: math.sin($t) / 2;
            transform: translateY($eq * -($svgSize * 0.25) + $svgSize * 0.25) translateX(-0.15px * ($i - 50));
        }
        $t: $t + $increase * $animationStep * 2;
        $i: $i + $animationStep;
    }
}


$increase: math.$pi / 100;
$i: 51;
$t: 0;

@keyframes hailMiddle2 {
    0% {}
    50% {
        transform: translateY($svgSize * 0.25);
    }
    @while $i <= 100 {
        #{$i}% {
            $eq: math.sin($t) / 2;
            transform: translateY($eq * -($svgSize * 0.25) + $svgSize * 0.25) translateX(0.15px * ($i - 50));
        }
        $t: $t + $increase * $animationStep * 2;
        $i: $i + $animationStep;
    }
}


$i: 51;
$t: 0;

@keyframes hailRight {
    0% {}
    50% {
        transform: translateY($svgSize * 0.25);
    }
    @while $i <= 100 {
        #{$i}% {
            $eq: math.sin($t) / 2;
            transform: translateY($eq * -($svgSize * 0.25) + $svgSize * 0.25) translateX(0.3px * ($i - 50));
        }
        $t: $t + $increase * $animationStep * 2;
        $i: $i + $animationStep;
    }
}


@keyframes fillOpacity {
    0% {
        fill-opacity: 0;
        stroke-opacity: 0;
    }
    100% {
        fill-opacity: 1;
        stroke-opacity: 1;
    }
}


@keyframes fillOpacity2 {
    0% {
        fill-opacity: 0;
        stroke-opacity: 0;
    }
    50% {
        fill-opacity: 1;
        stroke-opacity: 1;
    }
    100% {
        fill-opacity: 0;
        stroke-opacity: 0;
    }
}


@keyframes lightningFlash {
    0% {
        fill-opacity: 0;
    }
    1% {
        fill-opacity: 1;
    }
    2% {
        fill-opacity: 0;
    }
    50% {
        fill-opacity: 0;
    }
    51% {
        fill-opacity: 1;
    }
    52% {
        fill-opacity: 0;
    }
    53% {
        fill-opacity: 1;
    }
    54% {
        fill-opacity: 0;
    }
    100% {
        fill-opacity: 0;
    }
}


$i: 0;
$t: 0;

@keyframes snowFall {
    @while $i <= 100 {
        #{$i}% {
            $eq: math.sin($t);
            transform: translateY($svgSize * 0.25 * $i * 0.01) translateX(-$eq * ($i - 50) * 1px / 4);
                }
        $t: $t + $increase * $animationStep;
        $i: $i + $animationStep;
    }
}


$i: 0;
$t: 0;

@keyframes snowFall2 {
    @while $i <= 100 {
        #{$i}% {
            $eq: math.sin($t);
            transform: translateY($svgSize * 0.25 * $i * 0.01) translateX($eq * ($i - 50) * 1px / 4);
        }
        $t: $t + $increase * $animationStep;
        $i: $i + $animationStep;
    }
}


/* Tornado */
@keyframes translateTornado1 {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateX($svgSize * 0.0571);
    }
    75% {
        transform: translateX(-$svgSize * 0.0571);
            }
    100% {
        transform: translateX(0);
    }
}


@keyframes translateTornado2 {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateX($svgSize * 0.0286);
    }
    75% {
        transform: translateX(-$svgSize * 0.0286);
            }
    100% {
        transform: translateX(0);
    }
}


@keyframes translateTornado3 {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateX($svgSize * 0.1143);
    }
    75% {
        transform: translateX(-$svgSize * 0.1143);
            }
    100% {
        transform: translateX(0);
    }
}


@keyframes translateTornado4 {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateX($svgSize * 0.0857);
    }
    75% {
        transform: translateX(-$svgSize * 0.0857);
            }
    100% {
        transform: translateX(0);
    }
}


@keyframes translateTornado5 {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateX($svgSize * 0.1429);
    }
    75% {
        transform: translateX(-$svgSize * 0.1429);
            }
    100% {
        transform: translateX(0);
    }
}


@keyframes translateTornado6 {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateX($svgSize * 0.0857);
    }
    75% {
        transform: translateX(-$svgSize * 0.0857);
            }
    100% {
        transform: translateX(0);
    }
}


@keyframes fillOpacityLightning {
    0% {
        fill-opacity: 0;
        stroke-opacity: 0;
    }
    1% {
        fill-opacity: 1;
        stroke-opacity: 1;
    }
    7% {
        fill-opacity: 0;
        stroke-opacity: 0;
    }
    50% {
        fill-opacity: 0;
        stroke-opacity: 0;
    }
    51% {
        fill-opacity: 1;
        stroke-opacity: 1;
    }
    53% {
        fill-opacity: 0;
        stroke-opacity: 0;
    }
    54% {
        fill-opacity: 1;
        stroke-opacity: 1;
    }
    60% {
        fill-opacity: 0;
        stroke-opacity: 0;
    }
    100% {
        fill-opacity: 0;
        stroke-opacity: 0;
    }
}


@keyframes translateFog {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateX($svgSize * 0.0357);
    }
    75% {
        transform: translateX(-$svgSize * 0.0357);
            }
    100% {
        transform: translateX(0);
    }
}


@keyframes fillOpacityFog {
    0% {
        fill-opacity: 0.5;
        stroke-opacity: 0.5;
    }
    50% {
        fill-opacity: 1;
        stroke-opacity: 1;
    }
    100% {
        fill-opacity: 0.5;
        stroke-opacity: 0.5;
    }
}


@keyframes translateSunrise {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-$svgSize * 0.2286);
            }
    100% {
        transform: translateY(-$svgSize * 0.2286);
            }
}


@keyframes translateSunset {
    0% {
        transform: translateY(-$svgSize * 0.2286);
            }
    25% {
        transform: translateY(-$svgSize * 0.0571);
            }
    100% {
        transform: translateY(-$svgSize * 0.0571);
            }
}


@keyframes translateArrowDown {
    0% {
        transform: translateY($svgSize * 0.0286);
    }
    100% {
        transform: translateY($svgSize * 0.0714);
    }
}


@keyframes translateArrowUp {
    0% {
        transform: translateY(-$svgSize * 0.0286);
            }
    100% {
        transform: translateY(-$svgSize * 0.0714);
            }
}


@keyframes translateWind {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateX($svgSize * 0.0714);
    }
    75% {
        transform: translateX(-$svgSize * 0.0714);
            }
    100% {
        transform: translateX(0);
    }
}
</style>
