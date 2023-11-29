import Pin from "airbnb/components/common/Pin";
import { useAppStore } from "airbnb/store/store";
import React, { useMemo } from "react";
import { Map, Marker } from "react-map-gl";

const ListingMap = () => {
  const { currentListing } = useAppStore();
  const pins = useMemo(() => {
    return (
      <Marker
        longitude={currentListing.mapData.longitude}
        latitude={currentListing.mapData.latitude}
      >
        <Pin />
      </Marker>
    );
  }, [currentListing]);

  return (
    <div className="h-96 w-full border-solid">
      <Map
        initialViewState={{
          longitude: currentListing.mapData.longitude,
          latitude: currentListing.mapData.latitude,
          zoom: 13,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        scrollZoom={false}
        dragPan={false}
        dragRotate={false}
        doubleClickZoom={false}
      >
        {pins}
      </Map>
    </div>
  );
};

export default ListingMap;
