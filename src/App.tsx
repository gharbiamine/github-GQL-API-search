import { FC } from "react";
import { UserProvider } from "./contexts/UserContext";
import { LandingPage } from "./pages/LandingPage";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./layouts/Header";

export const App: FC = () => {
  return (
    <div className="App">
      <UserProvider>
        <Header
          appName="Github search"
          githubLink="https://github.com/gharbiamine"
          projectLink="https://github.com/gharbiamine/github-gql-api-search"
        />
        <LandingPage />
      </UserProvider>
    </div>
  );
};
