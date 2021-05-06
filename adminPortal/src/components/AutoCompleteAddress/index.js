import React, { useRef, useEffect } from "react";
import { GoogleApiWrapper } from 'google-maps-react';
const mapKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const GPlace = ({  setPlace, initialValues }) => {
   
    const placeInputRef = useRef(null);

    const initPlaceAPI = () => {

        let autocomplete = new window.google.maps.places.Autocomplete(placeInputRef.current, { types: ["geocode"] });
        new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
            let place = autocomplete.getPlace();
         
            setPlace({
                address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            });
            
        });
    };

    useEffect(initPlaceAPI, []);




    return (
        <input className="ant-input" type="text" ref={placeInputRef} defaultValue={initialValues && initialValues.address} />

    );
};

export default GoogleApiWrapper({
    apiKey: mapKey
})(GPlace);