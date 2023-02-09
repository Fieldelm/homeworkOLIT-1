import React from "react";
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import Geocode from 'react-geocode';

const containerStyle = {
    position: "relative",
    width: "600px",
    height: "600px"
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

function Map(){
    
  const [center, setCenter] = useState(dabasCoord);
  const [marker, setMarker] = useState(onLiveITCoord);
  const [adress, setAdress] = useState('');
  const [coordinates, setCoordinates] = useState(onLiveITCoord);
  const [zoom, setZoom] = useState(7)

  const testMarkerChange = () => {
    setCoordinates({ lat: 46.875058, lng: 17.685025 })
    console.log(coordinates)
  }

  useEffect(() => {

    setMarker(coordinates);
    setCenter(coordinates);

  }, [coordinates])



  /*  const addAdress = (e)=>{
     setAdress([...adress], e.target.value)
   }
 
   const getCoordinateObject = async (adress) =>{
 
     try {
     const response = await Geocode.fromAddress(adress);
     const coordinates = await response.results[0].geometry.location;
     console.log(coordinates)
     setMarker(coordinates)
   
     } catch (error) {
       console.log(error)
       
     }
   }
    */

  /* 
    console.log(APIKEY)
    console.log(functioningAPIKEY) */

  return (
    <div>
       

      <button onClick={testMarkerChange}>test</button>
      <Map />
      <LoadScript
        // googleMapsApiKey={'AIzaSyBpPI_5Q2VofDHHrePZzg0oNe4D2y_aGKE'} 
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
};

export default Map;