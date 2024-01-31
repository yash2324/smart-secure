// IndiaMap.jsx

import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const IndiaMap = () => {
  const [indiaTopoJSON, setIndiaTopoJSON] = useState(null);

  useEffect(() => {
    const fetchIndiaTopoJSON = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/karmadude/4527959/raw/59492893c2f13ffb909ba48253fa7fa30a640c56/in-states-topo.json"
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch India TopoJSON data. Status: ${response.status}`
          );
        }

        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched data to the console
        setIndiaTopoJSON(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIndiaTopoJSON();
  }, []);

  if (!indiaTopoJSON) {
    // Loading state or error handling
    return null;
  }

  return (
    <ComposableMap
      projectionConfig={{ scale: 600, center: [78, 22] }}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={indiaTopoJSON}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#69b3a2" // Adjust the fill color
              stroke="#FFFFFF" // Adjust the stroke color
            />
          ))
        }
      </Geographies>
      {/* Example marker, replace with your actual data */}
      <Marker coordinates={[77, 20]} fill="red" stroke="#FFF">
        <circle r={6} />
      </Marker>
    </ComposableMap>
  );
};

export default IndiaMap;
