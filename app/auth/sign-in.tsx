import { useForm, SubmitHandler } from "react-hook-form";
import { Pressable, View } from "react-native";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";

const schema = z.object({
  email: z.string().min(6),
  password: z.string().min(6),
});

export default function SignInScreen() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<z.infer<typeof schema>> = (values) => {
    console.log(values);
  };

  return (
    <View className="flex-1 justify-between bg-background">
      <View className="gap-4 pt-60">
        <Text className="text-5xl font-semibold">Entre na sua conta</Text>
        <Text className="text-xl pb-20">Marque já o seu horário</Text>
        <Form {...form}>
          <FormField
            control={form.control}
            name="email"
            render={({ field: { onChange, ...props } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    onChangeText={onChange}
                    {...props}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field: { onChange, ...props } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Senha"
                    secureTextEntry
                    onChangeText={onChange}
                    {...props}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
        <Link href="/core/home" asChild>
          <Button>
            <Text>Entrar</Text>
          </Button>
        </Link>
        <Link href="/auth/forgot-password" asChild>
          <Pressable>
            <Text className="text-center text-lg font-semibold text-primary">
              Esqueceu a senha ?
            </Text>
          </Pressable>
        </Link>
      </View>
      <Link href="/auth/sign-up" asChild>
        <Pressable>
          <Text className="flex items-center justify-center text-center text-lg font-semibold">
            Não possui uma conta ?{" "}
            <Text className="text-center text-lg font-semibold text-primary">
              Cadastre-se
            </Text>
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
