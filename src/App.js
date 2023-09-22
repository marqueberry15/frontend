import { BrowserRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './pages/Home';
import Header from './components/Header';
import Service from "./pages/Service";
import About from './pages/About';
import Contact from "./pages/Contact";
import BlogDetail from './pages/BlogDetail';
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Blog from './pages/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/style.scss';
import Footer from "./components/Footer";
import Work from "./pages/Work";
import GetStarted from "./pages/GetStarted";
import {StepperForm} from "./components/StepperForm";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import DashboardHome from './pages/DashboardHome';
import Campaigns from "./pages/Campaigns";
import AllProjects from "./pages/AllProjects";
import {  useSelector } from "react-redux";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import ScrollToTop from "./components/ScrollTop";

function App() {  
  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  }
  const loggedIn = useSelector(state => state.loggedIn)

  return (
   
    <BrowserRouter>
       <ScrollToTop />
      {!window.location.pathname.includes("dashboard") ? (
          <Header />
        ) : null}

     
      <Routes>
        <Route exact path="/" element={<Home caseStudyDetail={getData}/>} />
        <Route path="/best-meme-marketing-company-india" element={<Service />} />
        <Route path="/work" element={<Work caseStudyDetail={getData}/>} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog/" element={<Blog blogDetail={getData} />} />
        <Route path="/blog/:id" element={<BlogDetail content={getBlogContent} />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail content={getBlogContent}/>} />
        <Route  path="/create-account" element={<GetStarted />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/info" element={
          <ProtectedRoute >
            <StepperForm />

          </ProtectedRoute>
        }/>
        <Route path="/dashboard" element={
          <ProtectedRoute >
            <Dashboard />
            
          </ProtectedRoute>
        }>
           <Route
            path="home"
            element={<DashboardHome />}
        />
        <Route
            path="total-campaigns"
            element={<Campaigns />}
        />
         <Route
            path="pending-approvals"
            element={<Campaigns status={"pending"}/>}
        />
         
        <Route
            path="all-projects"
            element={<AllProjects />}
        />
         <Route
            path="change-password"
            element={<ChangePassword />}
        />
        </Route>

      </Routes>
      {!window.location.pathname.includes("dashboard") ? (
          <Footer />
        ) : null}

    </BrowserRouter>
     
   
  );
}

export default App;
