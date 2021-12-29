import Box from '@mui/material/Box';
import SiteForm from './SiteForm';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Link from 'next/link';

const NewSite = () => {
  return (
    <>
      <SiteForm />
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Divider>
          <Chip label="OR" />
        </Divider>
        <Link href="/new-site/smart-import">
          <a>
            <Button sx={{ my: 3 }} variant="contained" color="success">
              Switch To Smart Import Mode
            </Button>
          </a>
        </Link>
      </Box>
    </>
  );
};

export default NewSite;
