
import './App.css';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useState } from 'react';

//https://react-google-maps-api-docs.netlify



const containerStyle = {
  width: '600px',
  height: '600px'
};

const dabasCoord = {
  lat: 47.18694,
  lng: 19.31091
};

const onLiveITCoord = {
  lat : 47.1916,
  lng : 19.32848
}

const APIKEY = process.env.REACT_APP_GOOGLEMAPS_API_KEY
const functioningAPIKEY= 'AIzaSyBpPI_5Q2VofDHHrePZzg0oNe4D2y_aGKE'


function App() {

  
  const [center, setcenter] = useState(dabasCoord);
  const [marker, setMarker] = useState(onLiveITCoord);

  console.log(marker)
/* 
  console.log(APIKEY)
  console.log(functioningAPIKEY) */
 
  return (
 

    <LoadScript
     // googleMapsApiKey={'AIzaSyBpPI_5Q2VofDHHrePZzg0oNe4D2y_aGKE'} 
      googleMapsApiKey={functioningAPIKEY} 

    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9}
      >
       
        <MarkerF position={marker} />
      </GoogleMap>
    </LoadScript>
  );
}

export default App;
