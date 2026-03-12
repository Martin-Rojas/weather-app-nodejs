import request from "request";
import { geocode } from "./utils/geocode.js";

// Callback pattern

geocode(`pfluegerville`, (error, data) => {
   console.log(`Error: `, error);
   console.log("Data: ", data);
});
