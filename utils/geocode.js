import dotenv from "dotenv";
import request from "request";

dotenv.config({ quiet: true });
const geocode = (address, callback) => {
   const keyToken = process.env.MAPBOX_TOKEN;
   const geocodeURL = `https://api.mapbox.com/search/geocode/v6/forward?q=${address}&access_token=${keyToken}`;

   request({ url: geocodeURL, json: true }, (error, response) => {
      if (error) {
         callback(`Unable to connect to location serivces`, undefined);
      } else if (response.body.features.length === 0) {
         callback(`Unable to find location. Try onother location `, undefined);
      } else {
         callback(undefined, {
            latitude: response.body.features[0].geometry.coordinates[0],
            longitude: response.body.features[0].geometry.coordinates[1],
            fullAddress: response.body.features[0].properties.full_address,
         });
      }
   });
};

export { geocode };
