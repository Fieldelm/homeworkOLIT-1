
import './App.css';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import Geocode from 'react-geocode';


const containerStyle = {
  position: "relative",
  width: "100vw",
  height: "100vh"
};

const dabasCoord = {
  lat: 47.18694,
  lng: 19.31091
};

const onLiveITCoord = {
  lat: 47.1916,
  lng: 19.32848
}

const APIKEY = process.env.REACT_APP_GOOGLEMAPS_API_KEY
const functioningAPIKEY = 'AIzaSyBpPI_5Q2VofDHHrePZzg0oNe4D2y_aGKE';

Geocode.setApiKey(functioningAPIKEY);
Geocode.setLocationType('APPROXIMATE');
Geocode.enableDebug();




function App() {


  const [center, setCenter] = useState(dabasCoord);
  const [marker, setMarker] = useState(onLiveITCoord);
  const [adress, setAdress] = useState('');
  const [coordinates, setCoordinates] = useState(onLiveITCoord);
  const [zoom, setZoom] = useState(9)

  const testMarkerChange = () => {
    setCoordinates({ lat: 46.875058, lng: 17.685025 })
    console.log(coordinates)
  }

  const testgeoCode = () => {
    Geocode.fromAddress('Kathmandu').then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        setCoordinates({ lat: lat, lng: lng });
      },
      (error) => {
        console.log(error);
        setCoordinates(onLiveITCoord);
      }
    )
  }


  useEffect(() => {
    
    
    setTimeout(()=>{
      setMarker(coordinates)
    }, 1000)
    
   
    setTimeout(()=>{
      setCenter(coordinates)
      setZoom(10)
    },1500)
 

  }, [coordinates])



  return (


    <div>


      <button onClick={testMarkerChange}>test marker</button>
      <button onClick={testgeoCode}>test geolocation</button>

      <LoadScript
    
        googleMapsApiKey={functioningAPIKEY}

      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
        >

          <MarkerF position={marker} />
        </GoogleMap>
      </LoadScript>

    </div>
  );
}

export default App;
