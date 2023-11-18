// src/components/layout/MainLayout.tsx
import Container from '@mui/material/Container';
import { ReactNode } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 100px)',
        }}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
