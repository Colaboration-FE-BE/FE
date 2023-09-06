import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import DashboardPage from "./pages/DashboardPage";
import MenteePage from "./pages/MenteePage";
import UserPage from "./pages/UserPage";
import ClassPage from "./pages/ClassPage";

const App = () => {
  axios.defaults.baseURL = "https://fakestoreapi.com/";

  return (
    <BrowserRouter>
      <Routes>
      <Route element={<DashboardPage/>}  path="/"/>
        <Route element={<DashboardPage/>}  path="/dashboard"/>
       
        <Route element={<MenteePage/>} path="/mentee"/>
        <Route element={<UserPage/>} path="/user"/>
        <Route element={<ClassPage/>} path="/class"/>
        {/* <Route element={<Navbar greeting={""} onClick={function (): void {
          throw new Error("Function not implemented.");
        } } toggleSettingsDropdown={function (): void {
          throw new Error("Function not implemented.");
        } } showSettingsDropdown={false} navigate={function (path: string): void {
          throw new Error("Function not implemented.");
        } } handleLogout={function (): void {
          throw new Error("Function not implemented.");
        } } />} path="/" /> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;