import { useForm, SubmitHandler } from "react-hook-form";
import { Pressable, View } from "react-native";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { zodResolver } from "@hookform/resolvers/zod";

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
    <View className="flex-1 justify-between px-4">
      <View className="gap-4 pt-60">
        <Text className="text-5xl font-semibold pb-20">Entre na sua conta</Text>
        <Form {...form}>
          <FormField
            control={form.control}
            name="email"
            render={({ field: { onChange, ...props } }) => (
              <FormItem>
                <FormLabel nativeID="a">Email</FormLabel>
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
                <FormLabel nativeID="a">Senha</FormLabel>
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
        <Button onPress={form.handleSubmit(submit)}>
          <Text>Entrar</Text>
        </Button>
        <Pressable>
          <Text className="text-center text-lg font-semibold text-primary">
            Esqueceu a senha ?
          </Text>
        </Pressable>
      </View>
      <Button variant="outline">
        <Text>Cadastre-se</Text>
      </Button>
    </View>
  );
}
