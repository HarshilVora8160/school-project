import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentSignup from "./component/studentComponent/StudentSignUp";
import StudentLogin from "./component/studentComponent/StudentLogin";

import TeacherSignup from "./component/teacherComponent/TeacherSignup";

import PrincipalSignup from "./component/principalComponent/AdminSignup";
import PrincipalLogin from "./component/principalComponent/AdminLogin";
import TeacherLogin from "./component/teacherComponent/TeacherLogin";
import HomePage from "./component/HomePage";
import AboutUsPage from "./component/AboutUs";
import ServicePage from "./component/Service";
import Production from "./component/ProductionPage";
import DigitalMarketing from "./component/DigitalMarketingPage";
import ContactUs from "./component/ContactUs";
import Table from "./component/reactQuery/table";
import MobileData from "./component/reactQuery/MobileData";
import Product from "./component/reactQuery/Product";

const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />

            <Route path="*" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/production" element={<Production />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/contact-us" element={<ContactUs />} />
            
            {/* principal login signup */}
            <Route path="/admin-login" element={<PrincipalLogin />} />
            <Route path="/admin-signup" element={<PrincipalSignup />} />

            {/* Teacher login signup */}
            <Route path="/teacher-signup" element={<TeacherSignup />} />
            <Route path="/teacher-login" element={<TeacherLogin />} />

            {/* Student login signup */}
            <Route path="/student-signup" element={<StudentSignup />} />
            <Route path="/student-login" element={<StudentLogin />} />

            {/* react query practice  */}
            <Route path="/table" element={<Table />} />
            <Route path="/mobile-data" element={<MobileData />} />
            <Route path="/products" element={<Product />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
    </div>
  )
}

export default App
