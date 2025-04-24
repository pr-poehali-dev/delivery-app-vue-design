import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DeliveryMap from "@/components/DeliveryMap";
import OrdersList from "@/components/OrdersList";
import ProfileComponent from "@/components/ProfileComponent";
import { MapPinIcon, PackageIcon, MenuIcon, BellIcon, UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DeliveryApp = () => {
  const [currentTab, setCurrentTab] = useState("map");
  const navigate = useNavigate();
  
  // Имитируем получение текущей локации курьера
  const [currentLocation, setCurrentLocation] = useState({ lat: 55.751244, lng: 37.618423 });
  
  useEffect(() => {
    // В реальном приложении тут бы запрашивали геолокацию пользователя
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        console.error("Ошибка получения местоположения:", error);
      }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Верхняя панель навигации */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <MenuIcon className="w-6 h-6 text-primary" />
            <h1 className="text-lg font-semibold text-primary">КурьерПро</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setCurrentTab("profile")}
            >
              <UserIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="flex-1 overflow-hidden">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="h-full">
          <TabsContent value="map" className="h-full m-0 p-0">
            <DeliveryMap currentLocation={currentLocation} />
            
            {/* Плавающая карточка с текущей доставкой */}
            <Card className="absolute bottom-20 left-4 right-4 p-4 shadow-lg bg-white border-none">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 p-2 rounded-full">
                    <PackageIcon className="w-5 h-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-medium">Доставка #2845</h3>
                    <p className="text-sm text-muted-foreground">2.5 км • 15 мин</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded">
                  В пути
                </span>
              </div>
              <div className="flex flex-col space-y-2 mb-3">
                <div className="flex items-start gap-2">
                  <MapPinIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">Ресторан "Вкусно и точка"</p>
                    <p className="text-muted-foreground">ул. Тверская, 12</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPinIcon className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">Петров Иван</p>
                    <p className="text-muted-foreground">Ленинградский пр-т, 80, кв. 342</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" variant="outline">Позвонить</Button>
                <Button className="flex-1">Доставлено</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="m-0 p-0">
            <OrdersList />
          </TabsContent>

          <TabsContent value="profile" className="m-0 p-0">
            <ProfileComponent />
          </TabsContent>
          
          {/* Нижняя панель навигации */}
          <TabsList className="fixed bottom-0 z-10 w-full justify-around rounded-none bg-white p-0 h-16 border-t border-gray-200">
            <TabsTrigger 
              value="map" 
              className="flex flex-col items-center justify-center h-full data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              <MapPinIcon className="w-5 h-5" />
              <span className="text-xs mt-1">Карта</span>
            </TabsTrigger>
            <TabsTrigger 
              value="orders" 
              className="flex flex-col items-center justify-center h-full data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              <PackageIcon className="w-5 h-5" />
              <span className="text-xs mt-1">Заказы</span>
            </TabsTrigger>
            <TabsTrigger 
              value="profile" 
              className="flex flex-col items-center justify-center h-full data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              <UserIcon className="w-5 h-5" />
              <span className="text-xs mt-1">Профиль</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </main>
    </div>
  );
};

export default DeliveryApp;
