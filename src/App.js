import { useContext } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { ContextStore } from './ContextStore';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import AccountManagement from './pages/AccountManagement'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ShippingInfoPage from "./pages/ShippingInfoPage";
import MainCollection from './pages/MainCollection';
import SubCollection from './pages/SubCollection';
import PayMethodPage from "./pages/PayMethodPage";
import OrderPreview from "./pages/OrderPreview";
import OrderPage from "./pages/OrderPage";
import SearchPage from "./pages/SearchPage";
import AdminIndex from "./pages/admin/AdminIndex";

function App() {
  const { state } = useContext(ContextStore)
  const { cart, userInfo } = state
  // Check if /admin is in the url
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer
        position="bottom-center"
        pauseOnHover
        limit={1}
      />
      <div className=''>
        {userInfo !== null && userInfo.isAdmin ? (
          <Routes>
            <Route path="/admin" element={<AdminIndex />} />
          </Routes>
        ) :
          <>
            <NavBar cart={cart} />
            <main className="d-flex flex-column min-vh-100">
              <Routes>
                <Route path="/admin" element={<AdminIndex />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/collections/:slug" element={<MainCollection />} />
                <Route path="/collections/:slug1/:slug2" element={<SubCollection />} />
                <Route path="/product/slug/:slug" element={<ProductPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/shoppingCart" element={<CartPage />} />
                <Route path="/shipping" element={<ShippingInfoPage />} />
                <Route path="/paymentMethod" element={<PayMethodPage />} />
                <Route path="/placeOrder" element={<OrderPreview />} />
                <Route path="/orders/:id" element={<OrderPage />} />
                <Route path="pages/Login" element={<Login />} />
                <Route path="pages/CreateAccount" element={<CreateAccount />} />
                <Route path="pages/AccountManagement" element={<AccountManagement />} />
              </Routes>
            </main>
          </>
        }
        <footer className='footer mt-auto'>
          <div className="text-center">All rights reserved &copy; 2022</div>
        </footer>


      </div>

    </BrowserRouter>
  );
}

export default App;
