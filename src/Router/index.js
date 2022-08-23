import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Contact from "../Pages/Contact";
import Fitness from "../Pages/Fitness";
import Gym from "../Pages/Gym";
import Home from "../Pages/Home";
import Pool from "../Pages/Pool";
import PriceList from "../Pages/PriceList";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import SingUp from "../Pages/SignUp";
import Spa from "../Pages/Spa";
import SpaInfo from "../Pages/SpaInfo";
import UserChek from "../Pages/userChack";
import Welcome from "../Pages/Welcome";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Header />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pool" element={<Pool />} />
            <Route path="/gym" element={<Gym />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="" element={<UserChek />}>
              <Route path="/priceList" element={<PriceList />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/spa" element={<Spa />} />
            <Route path="/spaMoreInfo/:id" element={<SpaInfo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
