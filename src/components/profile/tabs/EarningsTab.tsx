import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PaymentHistory {
  date: string;
  amount: string;
}

export const EarningsTab = () => {
  const balance = "18 750 ₽";
  const nextPayment = "Понедельник, 18 Октября";
  
  const paymentHistory: PaymentHistory[] = [
    { date: "10 Октября", amount: "15 200 ₽" },
    { date: "3 Октября", amount: "12 800 ₽" },
    { date: "27 Сентября", amount: "14 750 ₽" },
  ];

  return (
    <>
      <Card className="p-4 mb-4">
        <h3 className="font-semibold mb-3">Текущий баланс</h3>
        <div className="text-2xl font-bold mb-2">{balance}</div>
        <Button className="w-full mb-3">Вывести средства</Button>
        <p className="text-xs text-muted-foreground">
          Следующая выплата: {nextPayment}
        </p>
      </Card>

      <h3 className="font-semibold mb-2">История выплат</h3>
      <div className="space-y-3">
        {paymentHistory.map((payment, index) => (
          <PaymentHistoryItem key={index} payment={payment} />
        ))}
      </div>
    </>
  );
};

interface PaymentHistoryItemProps {
  payment: PaymentHistory;
}

const PaymentHistoryItem = ({ payment }: PaymentHistoryItemProps) => (
  <Card className="p-3">
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
);
