import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContextProvider } from "./store/auth-context";
import Navigation from "./Navigation";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}
