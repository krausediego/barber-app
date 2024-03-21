import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { MessageCircleMore, Mail } from "~/components/Icons";
import Forgot from "~/assets/svgs/forgot.svg";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { CardMethodReset } from "~/components/pages/auth/forgot-password/card-method-reset";

export default function ForgotPasswordScreen() {
  const [methodResetPassword, setMethodResetPassword] = useState<
    "whatsapp" | "email" | null
  >(null);

  const handleSetMethodResetPassword = (method: "whatsapp" | "email") => {
    setMethodResetPassword(method);
  };

  return (
    <View className="flex-1 items-center justify-center bg-background gap-8">
      <Forgot width={280} height={280} />
      <Text className="w-full pt-8">
        Selecione uma opção para receber o código de reset de senha, e recuperar
        sua conta.
      </Text>

      <CardMethodReset
        onPress={() => handleSetMethodResetPassword("whatsapp")}
        methodResetPassword={methodResetPassword}
        type="whatsapp"
        name="Via WhatsApp:"
        value="(47) 992****15"
      >
        <MessageCircleMore className="color-primary w-16 h-16" />
      </CardMethodReset>
      <CardMethodReset
        onPress={() => handleSetMethodResetPassword("email")}
        methodResetPassword={methodResetPassword}
        type="email"
        name="Via Email:"
        value="die**********@gmail.com"
      >
        <Mail className="color-primary w-16 h-16" />
      </CardMethodReset>

      <Button
        disabled={!methodResetPassword}
        onPress={() => console.log(methodResetPassword)}
        className="w-full"
      >
        <Text>Continuar</Text>
      </Button>
    </View>
  );
}
