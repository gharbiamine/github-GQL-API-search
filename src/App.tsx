import { UserProvider } from "./contexts/UserContext";
import { LandingPage } from "./pages/LandingPage";


function App() {
  return (
    <div className="App">
      <UserProvider>
        <LandingPage />
      </UserProvider>
    </div>
  );
}

export default App;
