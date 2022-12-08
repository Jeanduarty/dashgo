import { Flex, Button, Stack } from "@chakra-ui/react";

import { Input } from "../components/Form/Input";

import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values);
  };

  return (
    <Flex align="center" justify="center" w="100vw" h="100vh">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input type="email" label="E-mail" {...register("email")} error={formState.errors.email}/>
          <Input type="password" label="Senha" {...register("password")} error={formState.errors.password}/>
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
