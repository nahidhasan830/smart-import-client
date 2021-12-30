import type { NextPage } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import SiteList from '../components/Site/SiteList';

const HomePage: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <SiteList />
      </Container>
    </>
  );
};

export default HomePage;
