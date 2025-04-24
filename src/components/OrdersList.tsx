import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package2Icon, MapPinIcon, ClockIcon, CheckCircleIcon, TruckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const OrdersList = () => {
  const [activeTab, setActiveTab] = useState("active");

  // Имитация данных заказов
  const activeOrders = [
    {
      id: "2845",
      status: "В пути",
      statusColor: "green",
      restaurant: "Вкусно и точка",
      client: "Петров Иван",
      address: "Ленинградский пр-т, 80, кв. 342",
      distance: "2.5 км",
      time: "15 мин",
      price: "450 ₽"
    },
    {
      id: "2846",
      status: "Ожидает",
      statusColor: "amber",
      restaurant: "KFC",
      client: "Сидорова Анна",
      address: "ул. Новый Арбат, 10, кв. 87",
      distance: "3.8 км",
      time: "20 мин",
      price: "680 ₽"
    }
  ];

  const completedOrders = [
    {
      id: "2840",
      status: "Завершён",
      statusColor: "blue",
      restaurant: "Макдоналдс",
      client: "Иванов Сергей",
      address: "ул. Тверская, 25, кв. 12",
      distance: "1.2 км",
      time: "10 мин",
      price: "720 ₽",
      completed: "15:30"
    },
    {
      id: "2835",
      status: "Завершён",
      statusColor: "blue",
      restaurant: "Бургер Кинг",
      client: "Смирнова Ольга",
      address: "Кутузовский пр-т, 32, кв. 77",
      distance: "4.5 км",
      time: "25 мин",
      price: "540 ₽",
      completed: "13:15"
    },
    {
      id: "2830",
      status: "Завершён",
      statusColor: "blue",
      restaurant: "Теремок",
      client: "Николаев Дмитрий",
      address: "ул. Тверская, 14, кв. 89",
      distance: "2.0 км",
      time: "15 мин",
      price: "380 ₽",
      completed: "11:45"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Мои заказы</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="active">Активные</TabsTrigger>
          <TabsTrigger value="completed">Завершенные</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          {activeOrders.length === 0 ? (
            <div className="text-center py-10">
              <Package2Icon className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
              <p>Активных заказов нет</p>
              <Button className="mt-4">Найти заказы</Button>
            </div>
          ) : (
            <div className="space-y-4">
              {activeOrders.map(order => (
                <Card key={order.id} className="p-4">
                  <div className="flex justify-between mb-3">
                    <h2 className="font-semibold">Заказ #{order.id}</h2>
                    <Badge 
                      variant="outline" 
                      className={`bg-${order.statusColor}-100 text-${order.statusColor}-800 border-${order.statusColor}-200`}
                    >
                      {order.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex gap-2">
                      <MapPinIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">{order.restaurant}</p>
                        <p className="text-sm text-muted-foreground">Место получения</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <MapPinIcon className="w-5 h-5 text-destructive flex-shrink-0" />
                      <div>
                        <p className="font-medium">{order.client}</p>
                        <p className="text-sm text-muted-foreground">{order.address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t text-sm">
                    <div className="flex items-center gap-1">
                      <TruckIcon className="w-4 h-4" />
                      <span>{order.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{order.time}</span>
                    </div>
                    <div className="font-semibold">{order.price}</div>
                  </div>
                  
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" className="flex-1">Детали</Button>
                    <Button className="flex-1">Взять заказ</Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="completed">
          <div className="space-y-4">
            {completedOrders.map(order => (
              <Card key={order.id} className="p-4">
                <div className="flex justify-between mb-3">
                  <h2 className="font-semibold">Заказ #{order.id}</h2>
                  <div className="flex items-center text-green-600">
                    <CheckCircleIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{order.completed}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex gap-2">
                    <MapPinIcon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="font-medium">{order.restaurant}</p>
                      <p className="text-sm text-muted-foreground">Место получения</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <MapPinIcon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="font-medium">{order.client}</p>
                      <p className="text-sm text-muted-foreground">{order.address}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-2 border-t text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <TruckIcon className="w-4 h-4" />
                    <span>{order.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{order.time}</span>
                  </div>
                  <div className="font-semibold text-foreground">{order.price}</div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersList;
