import { useEffect, useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon, ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeliveryMapProps {
  currentLocation: {
    lat: number;
    lng: number;
  };
}

const DeliveryMap = ({ currentLocation }: DeliveryMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // В реальном проекте здесь был бы код для инициализации карты
    // с помощью Google Maps, Yandex Maps или Leaflet
    console.log("Карта инициализирована с координатами:", currentLocation);
    
    // Здесь только для имитации карты
    const mapElement = mapRef.current;
    if (mapElement) {
      // Рисуем имитацию карты
      const ctx = document.createElement("canvas").getContext("2d");
      if (ctx) {
        // тут бы была настоящая инициализация карты
      }
    }
  }, [currentLocation]);

  return (
    <div className="relative h-full">
      {/* Контейнер для карты */}
      <div 
        ref={mapRef} 
        className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/2JgFQwL.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Имитация пути доставки */}
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
          A
        </div>
        
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-destructive rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
          B
        </div>
        
        {/* Имитация маркера текущего положения */}
        <div className="absolute top-1/2 right-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg pulse"></div>
      </div>

      {/* Элементы управления картой */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button variant="secondary" size="icon" className="bg-white shadow-md">
          <ZoomInIcon className="w-4 h-4" />
        </Button>
        <Button variant="secondary" size="icon" className="bg-white shadow-md">
          <ZoomOutIcon className="w-4 h-4" />
        </Button>
      </div>

      {/* Информация о маршруте */}
      <div className="absolute top-4 left-4 right-24 bg-white p-3 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-medium">Маршрут доставки</h2>
          <div className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
            2.5 км
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <ArrowLeftIcon className="w-3 h-3" />
          <span>Через 200м поверните направо на ул. Тверская</span>
          <ArrowRightIcon className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryMap;
