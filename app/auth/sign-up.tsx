import { SubmitHandler, useForm } from "react-hook-form";
import { Pressable, View } from "react-native";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";

const schema = z
  .object({
    email: z.string().min(6),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords not match",
    path: ["confirmPassword"],
  });

export default function SignUpScreen() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<z.infer<typeof schema>> = (values) => {
    console.log(values);
  };

  return (
    <View className="flex-1 justify-between bg-background">
      <View className="gap-4 pt-60">
        <Text className="text-5xl font-semibold">Cadastre-se agora</Text>
        <Text className="text-xl pb-20">Crie sua conta gratuitamente</Text>
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field: { onChange, ...props } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Confirmar senha"
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
        <Button onPress={form.handleSubmit(submit)}>
          <Text>Cadastrar</Text>
        </Button>
      </View>
      <Link href="/auth/sign-in" asChild>
        <Pressable>
          <Text className="flex items-center justify-center text-center text-lg font-semibold">
            Ja tem uma conta ?{" "}
            <Text className="text-center text-lg font-semibold text-primary">
              Faça o login
            </Text>
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
