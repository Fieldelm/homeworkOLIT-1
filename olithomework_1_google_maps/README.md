##FIND

###Any place on the Globe

Creating this application was so much fun and helped me evolve in programming.
It is a pretty simple Google Maps application to find places by sending requests to Google Maps APIs. 
Developed in React.js, styled with react-bootstrap.

You can run the app from Dockerfile with :
`docker build . -t GoogleMapsApp`

then you can run it (by providing your Google Maps API key) with:
`docker run -e "REACT_APP_GOOGLEMAPS_API_KEY=<your Google Maps API key>" -p 3000:3000 GoogleMapsApp`

and reach it from http://localhost:3000 