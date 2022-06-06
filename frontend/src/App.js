import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Auth/authentication/AuthContext";
import PrivateRoute from "./Auth/PrivateRoute"

import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";
import MyAccountPage from "./pages/MyAccount";
import ContactUsPage from "./pages/ContactUs";
import SignInPage from "./pages/SignIn";
import RegisterForm from "./pages/SignUp";
import RegisterHouse from "./pages/RegisterHouse";
import HouseListPage from "./pages/HouseList";
import GdprPage from "./pages/Gdpr";
import RequestSendPage from "./pages/RequestSend";
import HouseDetailPage from "./pages/HouseDetail";  
import UpdateHousePage from "./pages/HouseUpdate";
import RequestViewPage from "./pages/RequestView";
import HouseListAllPage from "./pages/HouseListAll";

function App() {
  return (
    <div>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/myAccount/:id" element={<MyAccountPage />} />
            <Route path="/contactUs" element={<ContactUsPage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/registerHouse" element={<RegisterHouse />} />
            <Route path="/houseList/:id" element={<HouseListPage />} />
            <Route path="/Gdpr" element={<GdprPage />} />
            <Route path="/sendRequest/:id" element={<RequestSendPage />} />
            <Route path="/houseDetail/:id" element={<HouseDetailPage />} />           
            <Route path="/requestview/:id" element={<RequestViewPage/>} />
            <Route path="/updateHouse/:id" element={<UpdateHousePage />} />
            <Route path="/houseListAll" element={<HouseListAllPage />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
