import { SiYourtraveldottv } from "react-icons/si";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";





const Header = () => {
   const location = useLocation();




   return (
      <div className=" text-white mb-5">
         <Navbar expand="lg" variant="dark" className={` ${location.pathname === '/none' || location.pathname === '/booking' ? undefined : 'bg-info'}`}>

            <Container>
               <Link to="/">
                  <SiYourtraveldottv className=" fs-1 fw-bolder text-white" />
               </Link>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse className=" justify-content-end" id="responsive-navbar-nav" >

                  <Nav className="my-2 my-lg-0 header-style " >
                     <NavLink to="/news" className="li ">
                        News
                     </NavLink>
                     <NavLink to="/destination" className="li">
                        Destination
                     </NavLink>
                     <NavLink to="blog" className="li">
                        Blog
                     </NavLink>
                     <NavLink to="contact" className="li">
                        Contact
                     </NavLink>
                     <NavLink to="login" className="li">
                        Login
                     </NavLink>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;

