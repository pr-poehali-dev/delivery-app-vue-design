import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { 
  CircleDollarSignIcon, 
  LogOutIcon, 
  SettingsIcon, 
  UserIcon 
} from "lucide-react";
import { useState } from "react";

interface SettingOption {
  icon: React.ReactNode;
  label: string;
  action: string;
}

interface NotificationSetting {
  label: string;
  defaultEnabled: boolean;
}

export const SettingsTab = () => {
  const accountSettings: SettingOption[] = [
    {
      icon: <UserIcon className="w-5 h-5" />,
      label: "Личные данные",
      action: "Изменить"
    },
    {
      icon: <CircleDollarSignIcon className="w-5 h-5" />,
      label: "Способы оплаты",
      action: "Настроить"
    },
    {
      icon: <SettingsIcon className="w-5 h-5" />,
      label: "Настройки приложения",
      action: "Изменить"
    }
  ];

  const notificationSettings: NotificationSetting[] = [
    { label: "Push-уведомления", defaultEnabled: true },
    { label: "Звуковые уведомления", defaultEnabled: true },
    { label: "Email-рассылка", defaultEnabled: false }
  ];

  return (
    <>
      <AccountSettingsCard settings={accountSettings} />
      <NotificationSettingsCard notificationSettings={notificationSettings} />
      <LogoutButton />
    </>
  );
};

interface AccountSettingsCardProps {
  settings: SettingOption[];
}

const AccountSettingsCard = ({ settings }: AccountSettingsCardProps) => (
  <Card className="p-4 mb-4">
    <h3 className="font-semibold mb-3">Настройки аккаунта</h3>
    <div className="space-y-4">
      {settings.map((setting, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {setting.icon}
            <span>{setting.label}</span>
          </div>
          <Button variant="ghost" size="sm">
            {setting.action}
          </Button>
        </div>
      ))}
    </div>
  </Card>
);

interface NotificationSettingsCardProps {
  notificationSettings: NotificationSetting[];
}

const NotificationSettingsCard = ({ notificationSettings }: NotificationSettingsCardProps) => {
  const [notifications, setNotifications] = useState<Record<string, boolean>>(
    notificationSettings.reduce((acc, setting) => ({
      ...acc,
      [setting.label]: setting.defaultEnabled
    }), {})
  );

  const toggleNotification = (label: string) => {
    setNotifications(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <Card className="p-4 mb-4">
      <h3 className="font-semibold mb-3">Уведомления</h3>
      <div className="space-y-3">
        {notificationSettings.map((setting, index) => (
          <div key={index} className="flex items-center justify-between">
            <span>{setting.label}</span>
            <Switch 
              checked={notifications[setting.label]}
              onCheckedChange={() => toggleNotification(setting.label)}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

const LogoutButton = () => (
  <Button
    variant="outline"
    className="w-full flex items-center justify-center gap-2 text-destructive"
  >
    <LogOutIcon className="w-4 h-4" />
    <span>Выйти из аккаунта</span>
  </Button>
);
