import {
  Container,
  Flex,
  Link,
  Text,
  HStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CiCirclePlus, CiDark, CiLight } from "react-icons/ci";
import React from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text fontFamily="mono" fontSize="28px">
          <Link as={RouterLink} to={"/"}>
            Product Store🛒
          </Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link as={RouterLink} to={"/create"}>
            <Button>
              <CiCirclePlus />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <CiDark /> : <CiLight />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
