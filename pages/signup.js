import {
  Flex,
  Text,
  FormControl,
  Input,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import Image from "next/image";
import bg from "../public/undraw_city_life_gnpr.png";

export default function SignUp() {
  return (
    <Flex
      w="full"
      pos="relative"
      h="100vh"
      bg="blueviolet"
      sx={{
        "& > div:first-of-type": {
          zIndex: -20,
        },
      }}
      justifyContent="center"
      align="center"
    >
      <Image
        src={bg}
        layout="fill"
        objectFit="contain"
        objectPosition="bottom"
      />
      <FormControl
        as={Flex}
        w={["95%", "50%", "50%", "25%"]}
        px={4}
        py={10}
        borderRadius={"lg"}
        boxShadow="lg"
        bg="white"
        direction="column"
        align="center"
      >
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="email" />
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input id="username" />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Flex>
  );
}
