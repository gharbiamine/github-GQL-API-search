import { FC } from "react";
import { UserProvider } from "./contexts/UserContext";
import { LandingPage } from "./pages/LandingPage";
import "react-toastify/dist/ReactToastify.css";

export const App: FC = () => {
  return (
    <div className="App">
      <UserProvider>
        <LandingPage />
      </UserProvider>
    </div>
  );
};
