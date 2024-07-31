import { FC } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles: React.CSSProperties = {
    height: "400px",
    width: "100%"
};

const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734
};

const MapComponent: FC = () => {
    return (
        <LoadScript googleMapsApiKey='TU_API_KEY_AQUI'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            />
        </LoadScript>
    );
};

export default MapComponent;
