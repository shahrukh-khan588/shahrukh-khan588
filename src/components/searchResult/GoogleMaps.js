import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from "react-google-maps";
import Image from "../../assets/images/bluedot3.png";
import MapMarker from "./MapMarker";

const Map = withScriptjs(
  withGoogleMap(() => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [directions, setDirections] = useState({
      lat: 36.32013,
      lng: 74.65072,
    });
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
      getCurrentLocation();
    }, []);

    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) =>
            setCurrentLocation({
              // lat: pos.coords.latitude + 2.7745848,
              // lng: pos.coords.longitude + 0.606056,
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            }),
          (err) => console.log(err)
        );
      }
    };

    useEffect(() => {
      console.log(currentLocation,' = Current Location')
      getRouteDirection();
    }, [currentLocation]);

    const getRouteDirection = () => {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: currentLocation,
          // origin:{lat:30.16634, lng:71.53576},
          destination: { lat: 36.32013, lng: 74.65072 },
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.log("Directions request failed due to " + status);
          }
        }
      );
    };

    useEffect(() => {
      getNearbyHotels();
    }, [currentLocation])

    const getNearbyHotels=()=>{
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      const request = {
        location: currentLocation,
        radius: 9000,
        type: "lodging",
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setHotels(
            results.map((result) => ({
              name: result.name,
              lat: result.geometry.location.lat(),
              lng: result.geometry.location.lng(),
            }))
          );
        }
      });
    }

    useEffect(() => {
      console.log(hotels, " = Hotels");
    }, [hotels]);

    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        center={currentLocation}
      >
        {hotels && hotels.map((hotel, index) => (
          <MapMarker
            key={index}
            name={hotel.name}
            lat={hotel.lat}
            lng={hotel.lng}
            position={{ lat: hotel.lat, lng: hotel.lng }}
          />
        ))}
        {currentLocation && (
          <Marker
            position={currentLocation}
            animation={window.google.maps.Animation.DROP}
            icon={Image}
          />
        )}
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: { strokeColor: "#3f51b5", strokeWeight: "4" },
            }}
          />
        )}
        <button onClick={getCurrentLocation}>Current Location</button>
        {currentLocation && (
          <button onClick={getRouteDirection} disabled={!directions}>
            Show Route
          </button>
        )}
      </GoogleMap>
    );
  })
);

export default function GoogleMaps() {
  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAB_9gv95tthsqqFyrTzsq0ACRnJ2zNlvs&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
