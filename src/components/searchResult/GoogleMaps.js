import React, { useEffect, useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from "react-google-maps";
import Image from "../../assets/images/bluedot.png";
import MapMarker from "./MapMarker";

var hotel;

const Map = withScriptjs(
  withGoogleMap(() => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [directions, setDirections] = useState(null);
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
      getCurrentLocation();
    }, []);

    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) =>
            setCurrentLocation({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            }),
          (err) => console.log(err)
        );
      }
    };

    useEffect(() => {
      getRouteDirection();
    }, [currentLocation]);

    const getRouteDirection = () => {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: currentLocation,
          destination: {
            lat: hotel?.coordinates?.lat,
            lng: hotel?.coordinates?.lng,
          },
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
    }, [currentLocation]);

    const getNearbyHotels = () => {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      const request = {
        location: {
          lat: hotel?.coordinates?.lat,
          lng: hotel?.coordinates?.lng,
        },
        radius: 5000,
        type: "lodging",
      };
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          console.log(results, " = Results");
          setHotels(
            results.map((result) => ({
              name: result?.name,
              address: result?.vicinity,
              rating: result?.rating,
              photo:
                typeof result.photos !== "undefined"
                  ? result.photos[0].getUrl({
                      maxWidth: 100,
                      maxHeight: 100,
                    })
                  : undefined,
              totalRating: result?.user_ratings_total,
              lat: result?.geometry?.location?.lat(),
              lng: result?.geometry?.location?.lng(),
            }))
          );
        }
      });
    };

    useEffect(() => {
      console.log(hotels, " = Hotels");
    }, [hotels]);

    console.log(hotel, " = Hotel");

    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        center={currentLocation}
      >
        {hotels &&
          hotels.map((hotel, index) => (
            <MapMarker
              key={index}
              name={hotel?.name}
              address={hotel?.address}
              rating={hotel?.rating}
              photo={hotel?.photo}
              totalRating={hotel?.totalRating}
              lat={hotel?.lat}
              lng={hotel?.lng}
              position={{ lat: hotel?.lat, lng: hotel?.lng }}
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
      </GoogleMap>
    );
  })
);

export default function GoogleMaps({ dest }) {
  hotel = dest;
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
