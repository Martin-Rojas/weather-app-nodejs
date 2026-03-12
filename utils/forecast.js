import dotenv from "dotenv";
import request from "request";

dotenv.config({ quiet: true });

const weatherstack = (latitude, longitude, callback) => {
   const url = `https://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_ACCESS_KEY}&query=${latitude},${longitude}`;

   request({ url: url, json: true }, (error, response) => {
      if (error) {
         callback(`Unable to connect to location serivces`, undefined);
      } else if (response.body.success === false) {
         callback(`Unable to find location`, undefined);
      } else {
         callback(
            undefined,
            `The current weather is ${response.body.current.temperature} degrees out. There is
                    ${response.body.current.precip}% chance of rain`,
         );
      }
   });
};

export { weatherstack };
