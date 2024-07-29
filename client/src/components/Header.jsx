import { Button, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtoms";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/authAtoms";
import { MdOutlineChat } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  return (
    <Flex justifyContent={"space-between"} mt={6} mb={12}>
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={24} />
        </Link>
      )}
      {!user && (
        <Link
          as={RouterLink}
          onClick={() => setAuthScreen("login")}
          to={"/auth"}
        >
          Log In
        </Link>
      )}

      <Image
        cursor={"pointer"}
        alt="logo"
        w={6}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}
      />
      {user && (
        <Flex alignItems={"center"} gap={4}>
          <Link as={RouterLink} to={`/${user.username}`}>
            <RxAvatar size={24} />
          </Link>
          <Link as={RouterLink} to={"/chat"}>
            <MdOutlineChat size={24} />
          </Link>
          <Link as={RouterLink} to={"/settings"}>
            <IoSettingsOutline size={24} />
          </Link>
          <Button size={"xs"} onClick={logout}>
            <AiOutlineLogout size={20} />
          </Button>
        </Flex>
      )}
      {!user && (
        <Link
          as={RouterLink}
          onClick={() => setAuthScreen("signup")}
          to={"/auth"}
        >
          Sign Up
        </Link>
      )}
    </Flex>
  );
}

export default Header;
