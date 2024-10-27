"use client"; // This ensures the file is a client component

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGlobalContext } from "@/app/context/globalContext";

function FlyToActiveCity({ activeCityCords }) {
    const map = useMap();

    useEffect(() => {
        if (activeCityCords) {
            const zoomLev = 13;
            const flyToOptions = {
                duration: 1.5,
            };
            map.flyTo([activeCityCords.lat, activeCityCords.lon], zoomLev, flyToOptions);
        }
    }, [activeCityCords, map]);

    return null;
}

const Mapbox = () => {
    const { forecast } = useGlobalContext();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted || !forecast) {
        return <div>Loading...</div>;
    }

    const activeCityCords = forecast.coord;

    if (!activeCityCords) {
        return <div>No Coordinates Available</div>;
    }

    return (
        <MapContainer
            center={[activeCityCords.lat, activeCityCords.lon]}
            zoom={13}
            scrollWheelZoom={false}
            className="map"
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <FlyToActiveCity activeCityCords={activeCityCords} />
        </MapContainer>
    );
};

export default Mapbox;
