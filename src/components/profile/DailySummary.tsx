import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface DailySummaryProps {
  date: string;
  deliveries: number;
  targetDeliveries: number;
  earnings: string;
  distance: string;
}

export const DailySummary = ({ 
  date = "15 Октября", 
  deliveries = 5, 
  targetDeliveries = 10, 
  earnings = "3 540 ₽", 
  distance = "12.4 км" 
}: DailySummaryProps) => {
  const progressPercentage = (deliveries / targetDeliveries) * 100;
  
  return (
    <Card className="p-4 mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold">Сегодня</h2>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center mb-3">
        <div className="flex flex-col">
          <span className="text-lg font-bold">{deliveries}</span>
          <span className="text-xs text-muted-foreground">Доставок</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold">{earnings}</span>
          <span className="text-xs text-muted-foreground">Заработок</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold">{distance}</span>
          <span className="text-xs text-muted-foreground">Пройдено</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm">Выполнено заказов</span>
          <span className="text-sm font-medium">{deliveries}/{targetDeliveries}</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
    </Card>
  );
};
