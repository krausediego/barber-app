import { View } from "react-native";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";

export default function SignInScreen() {
  return (
    <View className="flex-1 justify-center p-4 bg-background gap-4">
      <Text className="text-5xl font-semibold">Entre na sua conta</Text>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <Button>
        <Text>Entrar</Text>
      </Button>
    </View>
  );
}
