import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileHeader } from "./ProfileHeader";
import { DailySummary } from "./DailySummary";
import { StatisticsTab } from "./tabs/StatisticsTab";
import { EarningsTab } from "./tabs/EarningsTab";
import { SettingsTab } from "./tabs/SettingsTab";

const ProfileComponent = () => {
  const [activeTab, setActiveTab] = useState("stats");

  // Для примера используем заранее заданные данные
  const userData = {
    name: "Иванов Сергей",
    id: "12458",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    isOnline: true,
    dailySummary: {
      date: "15 Октября",
      deliveries: 5,
      targetDeliveries: 10,
      earnings: "3 540 ₽",
      distance: "12.4 км"
    }
  };

  return (
    <div className="container mx-auto p-4 pb-20">
      {/* Профиль курьера */}
      <ProfileHeader 
        name={userData.name}
        id={userData.id}
        avatarUrl={userData.avatarUrl}
        isOnline={userData.isOnline}
      />

      {/* Текущая статистика */}
      <DailySummary {...userData.dailySummary} />

      {/* Tabs для профиля */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="stats">Статистика</TabsTrigger>
          <TabsTrigger value="earnings">Выплаты</TabsTrigger>
          <TabsTrigger value="settings">Настройки</TabsTrigger>
        </TabsList>

        <TabsContent value="stats">
          <StatisticsTab />
        </TabsContent>

        <TabsContent value="earnings">
          <EarningsTab />
        </TabsContent>

        <TabsContent value="settings">
          <SettingsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileComponent;
