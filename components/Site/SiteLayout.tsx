import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from 'next/link';

interface IProps {}

const SiteLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Typography sx={{ margin: 2 }} variant="h4" component="h1">
        List of All Sites
      </Typography>
      <Link href="/new-site">
        <a>
          <Button variant="contained">Add New Site</Button>
        </a>
      </Link>
      <Divider sx={{ width: '93%', marginTop: 4 }} />
      <Box sx={{ overflow: 'auto', height: '80vh', width: '100%' }}>
        {children}
      </Box>
    </>
  );
};

export default SiteLayout;
