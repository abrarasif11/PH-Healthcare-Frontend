import { authKey } from "@/contants/authKey";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userinfo = getUserInfo();
  console.log(userinfo);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem(authKey);
    cookies().delete();
    router.refresh();
  };
  return (
    <>
      {userinfo ? (
        <Button color="error" onClick={handleLogout}>
          Log Out
        </Button>
      ) : (
        <Button
          component={Link}
          href="/login"
          sx={{
            "&:active": {
              textDecoration: "none",
            },
          }}
        >
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
