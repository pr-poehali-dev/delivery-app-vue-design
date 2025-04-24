import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileHeaderProps {
  name: string;
  id: string;
  avatarUrl: string;
  isOnline: boolean;
}

export const ProfileHeader = ({ name, id, avatarUrl, isOnline = true }: ProfileHeaderProps) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Avatar className="h-16 w-16 border-2 border-primary">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-muted-foreground">Курьер #{id}</p>
        <div className="flex items-center gap-1 mt-1">
          <div className={`w-2 h-2 ${isOnline ? "bg-green-500" : "bg-gray-400"} rounded-full`}></div>
          <span className={`text-sm ${isOnline ? "text-green-600" : "text-gray-500"}`}>
            {isOnline ? "Онлайн" : "Офлайн"}
          </span>
        </div>
      </div>
    </div>
  );
};
