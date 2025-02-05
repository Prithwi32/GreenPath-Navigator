import MapView from "../components/map/MapView.jsx";
const MapPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h2 className="text-forestGreen text-3xl font-semibold p-4">
        VVCE Campus Sustainability Map
      </h2>
      <MapView />
    </div>
  );
};

export default MapPage;
