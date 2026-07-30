import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import EcoSummaryCard from "./EcoSummaryCard";
import { FaCar, FaBicycle, FaWalking, FaBus } from "react-icons/fa";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

// Transport modes and emission factors (kg CO₂ per kilometer per passenger)
const modeOptions = [
  { label: "Car", value: "car", icon: <FaCar /> },
  { label: "Bus", value: "bus", icon: <FaBus /> },
  { label: "Bike", value: "bicycle", icon: <FaBicycle /> },
  { label: "Walking", value: "walking", icon: <FaWalking /> },
];

// Realistic Indian-based emission factors (kg CO₂ / km per passenger)
const emissionFactors = {
  car: 0.21,        // petrol/diesel cars
  bus: 0.10,        // average intracity diesel bus per traveler
  bike: 0.09,       // motorbike
  walking: 0.00,    // zero direct emissions
};

const geocode = async (place) => {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?country=IN&access_token=${mapboxgl.accessToken}`
  );
  const data = await response.json();
  return data.features[0]?.center || null;
};

export default function RoutePlanner({ darkMode }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [origin, setOrigin] = useState("India Gate, Delhi");
  const [destination, setDestination] = useState("Taj Mahal, Agra");
  const [mode, setMode] = useState("car");
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [emission, setEmission] = useState(null);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: darkMode ? "mapbox://styles/mapbox/dark-v11" : "mapbox://styles/mapbox/light-v11",
      center: [77.2167, 28.6448],
      zoom: 5,
    });
  }, []);

  const getRoute = async () => {
    const originCoords = await geocode(origin);
    const destCoords = await geocode(destination);
    if (!originCoords || !destCoords) {
      alert("Please enter valid locations");
      return;
    }

    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/${mode === "walking" ? "walking" : "driving"}/${originCoords.join(",")};${destCoords.join(",")}?geometries=geojson&access_token=${mapboxgl.accessToken}`
    );
    const data = await response.json();
    const routeData = data.routes[0];
    if (!routeData) {
      alert("No route found");
      return;
    }

    const geojson = { type: "Feature", geometry: routeData.geometry };
    if (map.current.getSource("route")) {
      map.current.getSource("route").setData(geojson);
    } else {
      map.current.addSource("route", { type: "geojson", data: geojson });
      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: { "line-join": "round", "line-cap": "round" },
        paint: { "line-color": "#2ee88f", "line-width": 5, "line-opacity": 0.8 },
      });
    }

    const distanceKm = (routeData.distance / 1000).toFixed(2);
    const durationMin = Math.round(routeData.duration / 60);
    const totalEmission = (distanceKm * (emissionFactors[mode] || 0)).toFixed(2);

    setDistance(distanceKm);
    setDuration(durationMin);
    setEmission(totalEmission);
  };

  return (
    <div className="planner">
      <div className="controls animated-card">
        <h3>Calculate Carbon Emission</h3>
        <label>Origin</label>
        <input value={origin} onChange={(e) => setOrigin(e.target.value)} />
        <label>Destination</label>
        <input value={destination} onChange={(e) => setDestination(e.target.value)} />

        <div className="mode-row">
          {modeOptions.map((opt) => (
            <button
              key={opt.value}
              className={mode === opt.value ? "mode-btn active" : "mode-btn"}
              onClick={() => setMode(opt.value)}>
              {opt.icon}
            </button>
          ))}
        </div>

        <button onClick={getRoute}>Show Carbon Emission</button>

        {distance && (
          <EcoSummaryCard
            distance={distance}
            duration={duration}
            emission={emission}
            mode={mode}
          />
        )}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
