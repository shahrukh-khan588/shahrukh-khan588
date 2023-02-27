import React, { useEffect, useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from "react-google-maps";
import Image from "../../assets/images/bluedot.png";
import Mapmarker from "./Mapmarker";
import hotelIcon from "../../assets/images/hotel.png";
import BlueIcon from "../../assets/images/blue.png";

var hotel;

const Map = withScriptjs(
  withGoogleMap(() => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [directions, setDirections] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    var waypoints;

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

    const getMultipleRoutes = () => {
      for (let i = 0; i < waypoints.length - 1; i++) {
        const DirectionsService = new window.google.maps.DirectionsService();
        const origin = waypoints[i];
        const destination = waypoints[i + 1];
        const request = {
          origin: origin,
          destination: destination,
          travelMode: "DRIVING",
        };
        DirectionsService.route(request, (result, status) => {
          if (status === "OK") {
            setDirections((directions) => [...directions, result]);

            const polyline = {
              path: result.routes[0].overview_path,
              strokeColor: "#000080",
              strokeWeight: 54,
            };
          }
        });
      }
    };

    useEffect(() => {
      getNearbyHotels();
      waypoints = [currentLocation, ...hotel];
      getMultipleRoutes();
    }, [currentLocation]);

    const getNearbyHotels = () => {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      {
        hotel &&
          hotel.map((item, index) => {
            const request = {
              location: {
                lat: item?.lat,
                lng: item?.lng,
              },
              radius: 2500,
              type: "restaurant",
            };
            service.nearbySearch(request, (results, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                console.log(results, " = Results");
                setRestaurants((restaurants) => [...restaurants, ...results]);
              }
            });
          });
      }
    };

    return (
      <GoogleMap
        defaultZoom={18}
        // defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        center={currentLocation}
      >
        {restaurants &&
          restaurants?.map((hotel, index) => (
            <Mapmarker
              key={index}
              name={hotel?.name}
              address={hotel?.vicinity}
              rating={hotel?.rating}
              photo={
                typeof hotel?.photos !== "undefined"
                  ? hotel?.photos[0].getUrl({
                      maxWidth: 100,
                      maxHeight: 100,
                    })
                  : undefined
              }
              icon={hotelIcon}
              totalRating={hotel?.user_ratings_total}
              lat={hotel?.geometry?.location?.lat()}
              lng={hotel?.geometry?.location?.lng()}
              position={{
                lat: hotel?.geometry?.location?.lat(),
                lng: hotel?.geometry?.location?.lng(),
              }}
            />
          ))}
        {currentLocation && (
          <Marker
            position={currentLocation}
            animation={window.google.maps.Animation.DROP}
            icon={Image}
          />
        )}
        {directions.map((direction, index) => (
          <DirectionsRenderer
            key={index}
            directions={direction}
            options={{
              suppressMarkers: true,
            }}
          />
        ))}
        {hotel &&
          hotel.map((item) => (
            <Mapmarker
              name={item?.label}
              lat={item?.lat}
              lng={item?.lng}
              icon={BlueIcon}
            />
          ))}
      </GoogleMap>
    );
  })
);

export default function Googlemaps({ dest }) {
  hotel = dest;
  console.log(hotel, " = hotel coordinates");
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
