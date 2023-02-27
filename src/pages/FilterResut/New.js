import React, { useEffect, useState } from "react";
import Image from '../../assets/images/bluedot.png'

export default function New() {
  const [map, setMap] = useState(null);
  const [startMarker, setStartMarker] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);

  useEffect(() => {
    const startLocation = { lat: 33.65075, lng: 72.91149 };
    const destination = {lat:35.90721, lng:74.35975};
    const travelMode = window.google.maps.TravelMode.DRIVING;
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRequest = {
      origin: startLocation,
      destination: destination,
      travelMode: travelMode,
    };
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: startLocation,
      zoom: 12,
    });
    setMap(map);

    const startMarker = new window.google.maps.Marker({
      position: startLocation,
    //   icon: "https://maps.window.google.com/mapfiles/kml/paddle/grn-blank.png",
    icon:Image,
      map: map,
    });
    setStartMarker(startMarker);

    directionsService.route(directionsRequest, (response, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        const directionsRenderer = new window.google.maps.DirectionsRenderer({
          map: map,
          directions: response,
          suppressMarkers: true,
        });
        setDirectionsRenderer(directionsRenderer);

        const startLocation = response.routes[0].legs[0].start_location;
        const startMarker = new window.google.maps.Marker({
          position: startLocation,
        //   icon: "https://maps.google.com/mapfiles/kml/paddle/blu-blank.png",
        icon:Image,
          map: map,
        });
        setStartMarker(startMarker);
      } else {
        console.error("Directions request failed due to " + status);
      }
    });
  }, []);

  return <div id="map" style={{ height: "400px" }} />;
}
