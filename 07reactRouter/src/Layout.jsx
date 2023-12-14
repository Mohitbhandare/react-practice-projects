import { Header, Footer } from './components';

// Outlet is used for the in react router dom to header and footer components are fixed but outlet part changes for ex to home, about, contact
import { Outlet } from 'react-router-dom';

// this all work in main.jsx file.

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
