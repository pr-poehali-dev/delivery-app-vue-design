import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  CircleDollarSignIcon, 
  ClockIcon, 
  MapPinIcon, 
  PackageIcon 
} from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  progress: number;
  color?: string;
}

export const StatisticsTab = () => {
  const weeklyStats: StatItem[] = [
    {
      icon: <PackageIcon className="w-5 h-5 text-primary" />,
      label: "Всего доставок",
      value: "32",
      progress: 80
    },
    {
      icon: <CircleDollarSignIcon className="w-5 h-5 text-green-500" />,
      label: "Заработок",
      value: "18 750 ₽",
      progress: 65
    },
    {
      icon: <MapPinIcon className="w-5 h-5 text-blue-500" />,
      label: "Пройдено км",
      value: "87.5 км",
      progress: 72
    },
    {
      icon: <ClockIcon className="w-5 h-5 text-amber-500" />,
      label: "Среднее время",
      value: "18 мин",
      progress: 90
    }
  ];

  return (
    <>
      <Card className="p-4 mb-4">
        <h3 className="font-semibold mb-3">Статистика за неделю</h3>
        <div className="space-y-4">
          {weeklyStats.map((stat, index) => (
            <StatisticItem key={index} {...stat} />
          ))}
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
    </>
  );
};

interface StatisticItemProps extends StatItem {}

const StatisticItem = ({ icon, label, value, progress }: StatisticItemProps) => (
  <div className="flex items-center gap-3">
    {icon}
    <div className="flex-1">
      <div className="flex justify-between">
        <span>{label}</span>
        <span className="font-medium">{value}</span>
      </div>
      <Progress value={progress} className="h-1 mt-1" />
    </div>
  </div>
);
