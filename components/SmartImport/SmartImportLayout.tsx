import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface IProps {}

const SmartImportLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Box sx={{ border: '1px solid black' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="h1">
              SMART IMPORT
            </Typography>
          </Toolbar>
        </AppBar>
        {children}
      </Box>
    </>
  );
};

export default SmartImportLayout;
