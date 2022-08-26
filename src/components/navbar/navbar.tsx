import {
  Avatar,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "./style.module.css";
import React from "react";

const Navbar = (): React.ReactElement => {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"left"}>
          <Box>
            <HamburgerIcon w={6} h={6} />
          </Box>
          <Text fontSize="3xl" fontWeight={600} className={styles["title"]}>
            {" "}
            Finance Tracker{" "}
          </Text>
        </Flex>

        {isLogin && (
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={"https://avatars.dicebear.com/api/male/username.svg"}
              />
            </MenuButton>
            <MenuList alignItems={"center"}>
              <br />
              <Center>
                <Avatar
                  size={"2xl"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </Center>
              <br />
              <Center>
                <p>Username</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>Your Servers</MenuItem>
              <MenuItem>Account Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </>
  );
};

export default Navbar;
