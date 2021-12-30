import Box from '@mui/material/Box';
import type { NextPage } from 'next';
import SmartImport from '../../components/SmartImport/SmartImport';

const SmartImportPage: NextPage = () => {
  return (
    <Box
      sx={{
        minHeight: '97vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <SmartImport />
    </Box>
  );
};

export default SmartImportPage;
