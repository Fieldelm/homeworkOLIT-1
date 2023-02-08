
import './App.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const APIKEY = process.env.REACT_APP_GOOGLEMAPS_API_KEY
const functioningAPIKEY= 'AIzaSyBpPI_5Q2VofDHHrePZzg0oNe4D2y_aGKE'


function App() {

  console.log(APIKEY)
  console.log(functioningAPIKEY)
 
  return (
    <LoadScript
     // googleMapsApiKey={'AIzaSyBpPI_5Q2VofDHHrePZzg0oNe4D2y_aGKE'} 
      googleMapsApiKey={functioningAPIKEY} 

    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default App;
