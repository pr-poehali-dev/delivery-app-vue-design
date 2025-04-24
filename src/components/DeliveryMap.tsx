import { FC, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CompassIcon, ZoomInIcon, ZoomOutIcon, LayersIcon, NavigationIcon } from "lucide-react";

interface DeliveryMapProps {
  location: { latitude: number; longitude: number };
}

const DeliveryMap: FC<DeliveryMapProps> = ({ location }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [zoomLevel, setZoomLevel] = useState(15);
  const [isCentered, setIsCentered] = useState(true);
  
  // Преобразуем формат координат для совместимости
  const currentLocation = {
    lat: location.latitude,
    lng: location.longitude
  };
  
  // Имитация инициализации карты
  useEffect(() => {
    // В реальном приложении здесь будет подключение API карт (Яндекс.Карты, Google Maps, Mapbox и т.д.)
    if (mapRef.current) {
      // Здесь бы инициализировали карту
      console.log("Карта инициализирована с координатами:", currentLocation);
    }

    // Имитация обновления маркера курьера при изменении его местоположения
    return () => {
      // Очистка карты при размонтировании компонента
      console.log("Карта уничтожена");
    };
  }, [currentLocation]);

  // Обработчики для интерфейса карты
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 1, 20));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 1, 10));
  };

  const handleCenterMap = () => {
    setIsCentered(true);
    // В реальности здесь бы центрировали карту на текущем местоположении
    console.log("Карта центрирована на:", currentLocation);
  };

  // Используем статическую карту для демо
  // В реальном приложении здесь бы использовался интерактивный компонент карты
  const mapStyle = {
    backgroundImage: `url("https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${currentLocation.lng},${currentLocation.lat},${zoomLevel},0/800x600?access_token=pk.eyJ1IjoiZGVtby1hY2NvdW50IiwiYSI6ImNsajY3NXJweTBiYmgzcXBpNTk2dWE2dTEifQ.XlJJAYWZ0HEn3mMwXwA4GA")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="relative w-full h-full">
      {/* Карта */}
      <div 
        ref={mapRef}
        className="w-full h-full bg-gray-200"
        style={mapStyle}
      >
        {/* Визуальная имитация маршрута (в реальности это был бы компонент карты) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="h-24 w-1 bg-primary opacity-50"></div>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
            <NavigationIcon className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Элементы управления картой */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button size="icon" variant="secondary" onClick={handleZoomIn}>
          <ZoomInIcon className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="secondary" onClick={handleZoomOut}>
          <ZoomOutIcon className="h-5 w-5" />
        </Button>
        <Button 
          size="icon" 
          variant="secondary" 
          onClick={handleCenterMap}
          className={isCentered ? "bg-primary text-white" : ""}
        >
          <CompassIcon className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="secondary">
          <LayersIcon className="h-5 w-5" />
        </Button>
      </div>

      {/* Информация о маршруте сверху */}
      <div className="absolute top-4 left-4 right-16 bg-white rounded-lg shadow-md p-3">
        <div className="flex items-center gap-2">
          <NavigationIcon className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">2.5 км до места назначения</div>
            <div className="text-sm text-muted-foreground">Прибытие через ~15 мин</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMap;
