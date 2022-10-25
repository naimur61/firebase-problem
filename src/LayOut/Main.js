import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheared/Footer/Footer';
import Header from '../Pages/Sheared/Header/Header';

const Main = () => {
   return (
      <div>
         <Header />

         <Container>
            <Outlet />
         </Container>

         <Footer />
      </div>
   );
};

export default Main;