
import './App.css';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import Geocode from 'react-geocode';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
  const [zoom, setZoom] = useState(9);

  const updateAdress = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    let newAdress = event.target.value
    setAdress(newAdress)
    
   // console.log('Adress:' + adress) 
  }

  const checkAdress = ()=>{
    console.log('new adress is set to: ' + adress)
  }

  const findAdress = (e) => {
    e.preventDefault()
    console.log(`trying to find adress: ${adress}`)

    Geocode.fromAddress(adress).then(
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

  const testMarkerChange = () => {
    setCoordinates({ lat: 46.875058, lng: 17.685025 })
    console.log(coordinates)
  }

  const testgeoCode = () => {
    Geocode.fromAddress('Valencia').then(
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


    setTimeout(() => {
      setMarker(coordinates)
    }, 1000)


    setTimeout(() => {
      setCenter(coordinates)
    }, 1500)


  }, [coordinates])


  return (

    <div>
      <Container>
        <Row>
          <button onClick={testMarkerChange}>test marker</button>
          <button onClick={testgeoCode}>test geolocation</button>

        </Row>
        <Row>
          <Form onSubmit={findAdress}>
            <Form.Label>Type in location</Form.Label>
            <Form.Control type='text' placeholder='Adress' onChange={updateAdress}></Form.Control>
            <Button type='submit'>Find</Button>
          </Form>
        </Row>
        <Row>
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
        </Row>
      </Container>
    </div>
  );
}

export default App;
