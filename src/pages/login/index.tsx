import { useRouter, NextRouter } from "next/router";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";
import React, { MouseEventHandler, useEffect } from "react";
import { testids } from "./constants";
import styles from "./style.module.css";

const displayErrors = (isEmailError: boolean, isPasswordError: boolean) => {
  if (isEmailError) {
    return <FormErrorMessage>Email is required.</FormErrorMessage>;
  }
  if (isPasswordError) {
    return (
      <FormErrorMessage>
        Password must be at least 8 characters.
      </FormErrorMessage>
    );
  }
};

const handleClick = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  router: NextRouter
) => {
  router.push("/home");
};

const Login = (): React.ReactElement => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);
  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isEmailError = !emailRegex.test(email);
  const isPasswordError = password.length < 8;

  return (
    <div className={styles["login"]} data-testid={testids.login.form}>
      <p className={styles["heading"]} data-testid={testids.login.title}>
        {" "}
        Login{" "}
      </p>
      <Box
        width="100%"
        p={8}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <FormControl isInvalid={isEmailError || isPasswordError}>
          <VStack spacing={4} align="stretch">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              data-testid={testids.login.email}
            />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              data-testid={testids.login.password}
            />
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isLoading}
              type="submit"
              onClick={(e) => handleClick(e, router)}
              data-testid={testids.login.submit}
            >
              Log in
            </Button>
            {displayErrors(isEmailError, isPasswordError)}
          </VStack>
        </FormControl>
      </Box>
    </div>
  );
};

export default Login;
