import { useAppStore } from "airbnb/store/store";
import React, { useMemo, useState } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import Pin from "../common/Pin";
import ListingCard from "../listingCard";

const MapView = () => {
  const { listings } = useAppStore();
  const [popupInfo, setpopupInfo] = useState(null);

  const pins = useMemo(() =>
    listings.map((data, index) => (
      <Marker
        key={`marker-${data.id}`}
        longitude={data.mapData.longitude}
        latitude={data.mapData.latitude}
        anchor="top"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setpopupInfo(data);
        }}
      >
        <Pin />
      </Marker>
    ))
  );

  return (
    <div className="h-[72.5vh] max-w-[100vw] pt-2">
      <Map
        initialViewState={{
          longitude: 36.817223,
          latitude: -1.286389,
          zoom: 10,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        {pins}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.mapData.longitude}
            latitude={popupInfo.mapData.latitude}
            onClose={() => setpopupInfo(null)}
          >
            <div>
              <ListingCard data={popupInfo} />
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapView;
