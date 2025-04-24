import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPinIcon, TruckIcon } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
          <TruckIcon className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary">КурьерПро</h1>
        <p className="text-xl text-gray-600 mb-8">
          Мобильное приложение для курьеров с удобной навигацией и отслеживанием заказов
        </p>
        
        <div className="space-y-4">
          <Button 
            className="w-full h-12 text-lg" 
            onClick={() => navigate("/delivery")}
          >
            <MapPinIcon className="mr-2 h-5 w-5" />
            Открыть приложение
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Оптимизировано для мобильных устройств
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
