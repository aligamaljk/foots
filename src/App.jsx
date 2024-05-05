import "./App.scss";
import Layouts from "./Components/Layout/Layouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import HeroSection from "./Components/Home/HeroSection";
import { Route, Routes } from "react-router";
import Index from "./Components/Pages/Meals";
import axios from "axios"
import SingleMealPage from "./Components/Pages/Meals/SingleMealPage";
import SavedMeals from "./Components/SavedMeals/SavedMeals";


axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1"

const queryClient = new QueryClient();
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
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<HeroSection />} />
            <Route path="meals" element={<Index />} />
            <Route path="meals/:Id" element={<SingleMealPage />} />
            <Route path="savedMeals" element={<SavedMeals />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
