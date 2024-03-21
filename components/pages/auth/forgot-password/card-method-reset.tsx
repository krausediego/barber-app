import { Pressable, View, type PressableProps } from "react-native";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";

interface CardMethodResetProps extends PressableProps {
  children: React.ReactNode;
  type: "whatsapp" | "email";
  methodResetPassword: "whatsapp" | "email" | null;
  name: string;
  value: string;
}

export function CardMethodReset({
  children,
  type,
  methodResetPassword,
  name,
  value,
  ...props
}: CardMethodResetProps) {
  return (
    <Pressable
      className={cn(
        "w-full h-28 flex-row items-center gap-6 px-8 rounded-xl bg-secondary border-2 border-input",
        methodResetPassword === type && "border-primary"
      )}
      {...props}
    >
      <View className="w-20 h-20 flex items-center justify-center rounded-full bg-background/50">
        {children}
      </View>
      <View className="flex gap-2">
        <Text className="text-xs">{name}</Text>
        <Text className="font-bold">{value}</Text>
      </View>
    </Pressable>
  );
}
