import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  //   console.log(isAuthenticated);
  return (
    <span>
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          onClick={async () => {
            await loginWithRedirect();
          }}
          variant="ghost"
          className="font-bold hover:text-orange-500 hover:bg-white"
        >
          Log-in
        </Button>
      )}
    </span>
  );
};

export default MainNav;
