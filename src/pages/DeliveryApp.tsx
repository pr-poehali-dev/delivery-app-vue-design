import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPinIcon, PackageIcon, UserIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import DeliveryMap from "@/components/DeliveryMap";
import OrdersList from "@/components/OrdersList";
import ProfileComponent from "@/components/profile/ProfileComponent";
import { toast } from "sonner";

interface Location {
  latitude: number;
  longitude: number;
}

const DEFAULT_LOCATION = {
  latitude: 55.7558,
  longitude: 37.6173,
};

const DeliveryApp = () => {
  const [activeTab, setActiveTab] = useState("map");
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Ошибка получения местоположения:", error);
          setLocationError(`Не удалось получить ваше местоположение: ${getGeolocationErrorMessage(error)}`);
          toast.error(`Ошибка геолокации: ${getGeolocationErrorMessage(error)}`);
          
          // Устанавливаем местоположение по умолчанию
          setCurrentLocation(DEFAULT_LOCATION);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      setLocationError("Геолокация не поддерживается в вашем браузере");
      toast.error("Геолокация не поддерживается в вашем браузере");
      
      // Устанавливаем местоположение по умолчанию
      setCurrentLocation(DEFAULT_LOCATION);
    }
  }, []);

  const getGeolocationErrorMessage = (error: GeolocationPositionError): string => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return "Пользователь отказал в доступе к геолокации";
      case error.POSITION_UNAVAILABLE:
        return "Информация о местоположении недоступна";
      case error.TIMEOUT:
        return "Истекло время ожидания запроса местоположения";
      default:
        return "Неизвестная ошибка";
    }
  };

  return (
    <div className="relative min-h-screen pb-16">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsContent value="map" className="m-0">
          {locationError && (
            <Card className="p-3 m-3 bg-orange-50 border-orange-200">
              <p className="text-sm text-orange-700">{locationError}</p>
              <p className="text-xs text-orange-600 mt-1">
                Используется локация по умолчанию
              </p>
            </Card>
          )}
          
          <DeliveryMap 
            location={currentLocation || DEFAULT_LOCATION} 
          />
        </TabsContent>

        <TabsContent value="orders" className="m-0">
          <OrdersList />
        </TabsContent>

        <TabsContent value="profile" className="m-0">
          <ProfileComponent />
        </TabsContent>

        <TabsList className="fixed bottom-0 left-0 right-0 z-10 grid grid-cols-3 h-16 rounded-none bg-background border-t">
          <TabsTrigger value="map" className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-muted">
            <MapPinIcon className="h-5 w-5" />
            <span className="text-xs">Карта</span>
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-muted">
            <PackageIcon className="h-5 w-5" />
            <span className="text-xs">Заказы</span>
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-muted">
            <UserIcon className="h-5 w-5" />
            <span className="text-xs">Профиль</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default DeliveryApp;
