import { geocode } from "./utils/geocode.js";
import { weatherstack } from "./utils/forecast.js";

// Callback pattern

// geocode(`pfluegerville`, (error, data) => {
//    console.log(`Error: `, error);
//    console.log("Data: ", data);
// });

weatherstack(30.439, -97.62, (error, data) => {
   console.log(`Error: `, error);
   console.log(`Data: `, data);
});
