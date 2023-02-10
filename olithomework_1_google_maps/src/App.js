
import './App.css';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import Geocode from 'react-geocode';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';


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

Geocode.setApiKey(APIKEY);
Geocode.setLocationType('APPROXIMATE');
Geocode.enableDebug();

function App() {

  const [center, setCenter] = useState(dabasCoord);
  const [marker, setMarker] = useState(onLiveITCoord);
  const [adress, setAdress] = useState('');
  const [coordinates, setCoordinates] = useState(onLiveITCoord);
  const [zoom, setZoom] = useState(9);
  const [foundLocation, setFoundLocation] = useState(true);

  const updateAdress = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    
    let newAdress = event.target.value
    setAdress(newAdress)
  }

  const findAdress = (e) => {
    e.preventDefault()
    console.log(`trying to find adress: ${adress}`)

    Geocode.fromAddress(adress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        setFoundLocation(true);
        setCoordinates({lat,lng});
        setZoom(6);

      },
      (error) => {
        console.log(error);
        setFoundLocation(false);
        setTimeout(() => {
          setFoundLocation(true)
        }, 4000)
      
      }
    )
  }

 
  useEffect(() => {

    setTimeout(() => {
      setMarker(coordinates)
    }, 1000)

    setTimeout(() => {
      setCenter(coordinates)
      setZoom(9)
    }, 1500)

  }, [coordinates])


  return (

   
      <Container fluid >
        <Row className='p-4'>
          <Form onSubmit={findAdress}>
            {/* <Row className='p-1'> */}
              <Form.Label>Type in location</Form.Label>
            {/* </Row> */}
            <Form.Control type='text' placeholder='Adress' onChange={updateAdress}></Form.Control>
            {foundLocation === true ? <></> : <Alert variant='info'>Sorry, cant find location</Alert>}

            <Row className='p-1 m-0'>
              <Button type='submit' size='md' >Find</Button>
            </Row>

          </Form>
        </Row>
        <Row >
          <LoadScript
            googleMapsApiKey={APIKEY}
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
  
  );
}

export default App;
