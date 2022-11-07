import { Outlet } from 'react-router-dom';
import NavbarSetup from './NavbarSetup';
const Layout = () => (
  <>
    <NavbarSetup />
    <Outlet />
  </>
);
export default Layout;