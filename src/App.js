import React, { useEffect } from 'react'
import "./Vender"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import { Route, Routes, useLocation, Outlet } from 'react-router-dom'
import Landing1 from './Pages/Home/Landing1/Landing1'
import Landing2 from './Pages/Home/Landing2/Landing2'
import Landing3 from './Pages/Home/Landing3/Landing3'
import Landing4 from './Pages/Home/Landing4/Langing4'
import Header1 from './Layout/Header/Header1'
import Footer1 from './Layout/Footer/Footer1'
import HomePage from './defaultPages/HomePage'
import Login from './defaultPages/Login/Login'
import Signup from './defaultPages/Signup/Signup'
import AboutUs from './Pages/Company/AboutUs'
import ProductGrid from './Pages/Shop/ProductGrid'
import ProductList from './Pages/Shop/ProductList';
import ProductSingle from './Pages/Shop/ProductSingle';
import ProductCart from './Pages/Shop/ProductCart';
import CheckOut from './Pages/Shop/Checkout';
import OrderComplete from './Pages/Shop/OrderComplete';
import AccordionPage from './Pages/Feature/AccordionPage';
import CounterPage from './Pages/Feature/CounterPage';
import Header2 from './Layout/Header/Header2';
import FeatureIconPage from './Pages/Feature/FeatureIconPage';
import FeaturePricePage from './Pages/Feature/FeaturePricePage';
import FeatureTeamPage from './Pages/Feature/FeatureTeamPage';
import FeatureTestimonialPage from './Pages/Feature/FeatureTestimonialPage';
import FeatureBlogPage from './Pages/Feature/FeatureBlog';
import BlogStyle from './Pages/Blog/BlogStyle';
import BlogListing1 from './Pages/Blog/BlogListing1';
import BlogListing2 from './Pages/Blog/BlogListing2';
import BlogSingle from './Pages/Blog/BlogSingle';
import AboutUs2 from './Pages/Company/AboutUs2';
import Career from './Pages/Company/Career';
import CareerSingle from './Pages/Company/CareerSingle';
import Contact1 from './Pages/Contact/Contact1';
import Contact2 from './Pages/Contact/Contact2';
import Signin2 from './defaultPages/SignIn2';
import Forgotpassword from './defaultPages/ForgetPassword';
import FAQ from './Pages/Utilities/FaqPage';
import Pricing from './Pages/Utilities/PricingPage';
import PrivacyPolicy from './Pages/Utilities/Privacy';
import TermsConditions from './Pages/Utilities/T&CPage';
import Maintenance from './Pages/Utilities/MaintanancePage';
import ComingSoon from './Pages/Utilities/ComingSoon';
import Error404 from './Pages/Utilities/Error404.js';
import Error404WithoutHeaderFooter from './Componet/NotDefinedPage';

function App() {
  const location = useLocation();
  const getUrl = (pathname) => {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/coming_soon'
      ? true
      : `/${pathArray[1]}` === '/maintenance'
        ? true
        : `/${pathArray[1]}` === '/error_404'
          ? true
          : `/${pathArray[1]}` === '*'
            ? true
            : false;
  };

  const setHeader = (pathname) => {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/index4' ? true : false;
  }

  const setFooter = (pathname) => {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/index10' ? false : true;
  };
  const scrollbarStyle = `
  ::-webkit-scrollbar {
    display: none;
  }`;

  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload(); // Refresh the page on popstate event (back button)
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, [location.pathname]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {getUrl(location.pathname) ?
        <Routes>
          <Route path="/coming_soon" element={<ComingSoon />} />
          <Route path="/error_404" element={<Error404 />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="*" element={<Outlet />}>
            {/* Render the Error404 component without Header and Footer */}
            <Route index element={<Error404WithoutHeaderFooter />} />
          </Route>
        </Routes> :

        <div className="page-wrapper">
          {setHeader(location.pathname) ? <Header2 /> : <Header1 />}
          <Routes>
            {/* difaultHompage */}
            <Route path='/' element={<HomePage />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            {/* difaultHompage */}

            {/* NavbarHome */}
            <Route path='/' element={<Landing1 />} />
            {/* <Route path='/index2' element={<Landing2 />} />
            <Route path='/index3' element={<Landing3 />} />
            <Route path='/index4' element={<Landing4 />} /> */}

            {/* <Route path='/blog_card' element={<BlogStyle />} />
            <Route path='/blog_listing_1' element={<BlogListing1 />} />
            <Route path='/blog_listing_2' element={<BlogListing2 />} />
            <Route path='/blog-single' element={<BlogSingle />} /> */}

            {/* NavbarHome */}
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/about-us2' element={<AboutUs2 />} />
            <Route path='/career' element={<Career />} />
            <Route path='/career-single' element={<CareerSingle />} />
            <Route path='/contact1' element={<Contact1 />} />
            <Route path='/contact2' element={<Contact2 />} />
            <Route path='/sign_in' element={<Login />} />
            <Route path='/sign_up' element={<Signup />} />
            <Route path='/sign_in_2' element={<Signin2 />} />
            <Route path='/forgot_password' element={<Forgotpassword />} />

            <Route path='/faq' element={<FAQ />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/privacy_policy' element={<PrivacyPolicy />} />
            <Route path='/terms_conditions' element={<TermsConditions />} />

            <Route path='/product-grid' element={<ProductGrid />} />
            <Route path='/product-list' element={<ProductList />} />
            <Route path='/product-single' element={<ProductSingle />} />
            <Route path='/cart' element={<ProductCart />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/order-complete' element={<OrderComplete />} />

            <Route path='/Accordion' element={<AccordionPage />} />
            <Route path='/Counter' element={<CounterPage />} />
            <Route path='/feature_box' element={<FeatureIconPage />} />
            <Route path='/Price_table' element={<FeaturePricePage />} />
            <Route path='/team' element={<FeatureTeamPage />} />
            <Route path='/testimonial' element={<FeatureTestimonialPage />} />
            <Route path='/blog' element={<FeatureBlogPage />} />
            <Route path="*" element={<Error404 />} />

            {/* Company */}
          </Routes>
          <Footer1 />
        </div>
      }
    </>
  )
}

export default App

