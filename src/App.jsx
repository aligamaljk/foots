import "./App.scss";
import Layouts from "./Components/Layout/Layouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import HeroSection from "./Components/Home/HeroSection";
import {  useRoutes } from "react-router";
import {Index} from "./Components/Pages/Meals/Index";
import axios from "axios"
import SingleMealPage from "./Components/Pages/Meals/SingleMealPage";
import SavedMeals from "./Components/SavedMeals/SavedMeals";


axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1"

const queryClient = new QueryClient();
const AppRoutes = () => {
    const routes = useRoutes([
      {
        path: '*',
        element: <h1> Page Not Found </h1>,
      },
      {
        path: '/',
        element: <Layouts />,
        children: [
          { index: true, element: <HeroSection /> },
          { path: 'meals', element: <Index /> },
          { path: 'meals/:Id', element: <SingleMealPage /> },
          { path: 'savedMeals', element: <SavedMeals /> },
        ],
      },
    ]);
    return routes;
}
function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontSize: '1.4rem',
            },
          }}
        />
        <AppRoutes />
      </QueryClientProvider>
    </>
  );
}

export default App;
