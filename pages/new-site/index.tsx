import type { NextPage } from 'next';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import NewSite from '../../components/NewSite/NewSite';

const NewSitePage: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '90vh'
        }}
      >
        <Card sx={{ minHeight: '50vh', minWidth: '50vh' }}>
          <NewSite />
        </Card>
      </Box>
    </>
  );
};

export default NewSitePage;
