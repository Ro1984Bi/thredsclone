import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtoms";
import useShowToast from "../hooks/useShowToast";
import { AiOutlineLogout } from "react-icons/ai";

function LogoutButton() {
  const setUser = useSetRecoilState(userAtom);
  const showToast = useShowToast();
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      
      if (data.error) {
        showToast("Error", data.error, "error");
        return
      }
      localStorage.removeItem("auth-user");
      setUser(null);
    } catch (error) {
      showToast("Error", error, "error");
    }
  };
  return (
    <Button
      position={"fixed"}
      top={"30px"}
      right={"30px"}
      size={"sm"}
      onClick={handleLogout}
    ><AiOutlineLogout size={25}/>
    </Button>
  );
}

export default LogoutButton;
