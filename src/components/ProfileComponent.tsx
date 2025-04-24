import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { 
  CreditCardIcon, 
  LogOutIcon, 
  SettingsIcon, 
  HelpCircleIcon, 
  BellIcon, 
  StarIcon, 
  TruckIcon,
  ChevronRightIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProfileComponent = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage src="/placeholder.svg" alt="Фото курьера" />
            <AvatarFallback>АИ</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h1 className="text-xl font-bold">Александр Иванов</h1>
            <p className="text-muted-foreground">Курьер ID: #12345</p>
            <div className="flex items-center mt-1">
              <StarIcon className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="font-medium">4.8</span>
              <span className="text-muted-foreground text-sm ml-1">(328 отзывов)</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Статус:</span>
            <Badge variant={isOnline ? "default" : "outline"} className={isOnline ? "bg-green-500" : ""}>
              {isOnline ? "Онлайн" : "Оффлайн"}
            </Badge>
          </div>
          <Switch 
            checked={isOnline} 
            onCheckedChange={setIsOnline} 
          />
        </div>
      </Card>
      
      <div className="space-y-1">
        <h2 className="text-lg font-semibold px-1">Статистика</h2>
        <Card className="p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">28</p>
              <p className="text-xs text-muted-foreground">Доставок сегодня</p>
            </div>
            <div>
              <p className="text-2xl font-bold">143</p>
              <p className="text-xs text-muted-foreground">Доставок за неделю</p>
            </div>
            <div>
              <p className="text-2xl font-bold">15480₽</p>
              <p className="text-xs text-muted-foreground">Заработок за неделю</p>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-1">
        <h2 className="text-lg font-semibold px-1">Настройки</h2>
        <Card>
          <div className="divide-y">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <TruckIcon className="w-5 h-5 text-primary" />
                <span>Мой транспорт</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <CreditCardIcon className="w-5 h-5 text-primary" />
                <span>Банковская карта</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <BellIcon className="w-5 h-5 text-primary" />
                <span>Уведомления</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <SettingsIcon className="w-5 h-5 text-primary" />
                <span>Настройки приложения</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <HelpCircleIcon className="w-5 h-5 text-primary" />
                <span>Помощь</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </Card>
      </div>
      
      <Button variant="destructive" className="w-full flex items-center gap-2 mt-6">
        <LogOutIcon className="w-4 h-4" />
        <span>Выйти из аккаунта</span>
      </Button>
    </div>
  );
};

export default ProfileComponent;
