import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CircleDollarSignIcon,
  ClockIcon,
  LogOutIcon,
  MapPinIcon,
  PackageIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";

const ProfileComponent = () => {
  const [activeTab, setActiveTab] = useState("stats");

  return (
    <div className="container mx-auto p-4 pb-20">
      {/* Профиль курьера */}
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
          <AvatarFallback>ИС</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-bold">Иванов Сергей</h1>
          <p className="text-muted-foreground">Курьер #12458</p>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-green-600">Онлайн</span>
          </div>
        </div>
      </div>

      {/* Текущая статистика */}
      <Card className="p-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold">Сегодня</h2>
          <span className="text-sm text-muted-foreground">15 Октября</span>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center mb-3">
          <div className="flex flex-col">
            <span className="text-lg font-bold">5</span>
            <span className="text-xs text-muted-foreground">Доставок</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">3 540 ₽</span>
            <span className="text-xs text-muted-foreground">Заработок</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">12.4 км</span>
            <span className="text-xs text-muted-foreground">Пройдено</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Выполнено заказов</span>
            <span className="text-sm font-medium">5/10</span>
          </div>
          <Progress value={50} className="h-2" />
        </div>
      </Card>

      {/* Tabs для профиля */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="stats">Статистика</TabsTrigger>
          <TabsTrigger value="earnings">Выплаты</TabsTrigger>
          <TabsTrigger value="settings">Настройки</TabsTrigger>
        </TabsList>

        <TabsContent value="stats">
          <Card className="p-4 mb-4">
            <h3 className="font-semibold mb-3">Статистика за неделю</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PackageIcon className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Всего доставок</span>
                    <span className="font-medium">32</span>
                  </div>
                  <Progress value={80} className="h-1 mt-1" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CircleDollarSignIcon className="w-5 h-5 text-green-500" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Заработок</span>
                    <span className="font-medium">18 750 ₽</span>
                  </div>
                  <Progress value={65} className="h-1 mt-1" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-blue-500" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Пройдено км</span>
                    <span className="font-medium">87.5 км</span>
                  </div>
                  <Progress value={72} className="h-1 mt-1" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-amber-500" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Среднее время</span>
                    <span className="font-medium">18 мин</span>
                  </div>
                  <Progress value={90} className="h-1 mt-1" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Рейтинг</h3>
            <div className="flex items-center justify-between">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${
                      star <= 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold">4.8/5</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              На основе 142 оценок от клиентов
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="earnings">
          <Card className="p-4 mb-4">
            <h3 className="font-semibold mb-3">Текущий баланс</h3>
            <div className="text-2xl font-bold mb-2">18 750 ₽</div>
            <Button className="w-full mb-3">Вывести средства</Button>
            <p className="text-xs text-muted-foreground">
              Следующая выплата: Понедельник, 18 Октября
            </p>
          </Card>

          <h3 className="font-semibold mb-2">История выплат</h3>
          <div className="space-y-3">
            {[
              { date: "10 Октября", amount: "15 200 ₽" },
              { date: "3 Октября", amount: "12 800 ₽" },
              { date: "27 Сентября", amount: "14 750 ₽" },
            ].map((payment, index) => (
              <Card key={index} className="p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Выплата</p>
                    <p className="text-sm text-muted-foreground">
                      {payment.date}
                    </p>
                  </div>
                  <span className="font-semibold text-green-600">
                    {payment.amount}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="p-4 mb-4">
            <h3 className="font-semibold mb-3">Настройки аккаунта</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <UserIcon className="w-5 h-5" />
                  <span>Личные данные</span>
                </div>
                <Button variant="ghost" size="sm">
                  Изменить
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CircleDollarSignIcon className="w-5 h-5" />
                  <span>Способы оплаты</span>
                </div>
                <Button variant="ghost" size="sm">
                  Настроить
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SettingsIcon className="w-5 h-5" />
                  <span>Настройки приложения</span>
                </div>
                <Button variant="ghost" size="sm">
                  Изменить
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-4 mb-4">
            <h3 className="font-semibold mb-3">Уведомления</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Push-уведомления</span>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <span>Звуковые уведомления</span>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <span>Email-рассылка</span>
                <Switch checked={false} />
              </div>
            </div>
          </Card>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 text-destructive"
          >
            <LogOutIcon className="w-4 h-4" />
            <span>Выйти из аккаунта</span>
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileComponent;
