import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../UI/LoadingSpinner';
import Box from '@mui/material/Box';

const MySpreadSheetRender = dynamic(
  () => import('.././SpreadSheet/SpreadSheetRender'),
  {
    loading: () => <LoadingSpinner />,
    ssr: false
  }
);

const VisualData = () => {
  return (
    <Box sx={{ minWidth: 600, minHeight: 400, padding: '1rem 0 .5rem 1.5rem' }}>
      <Typography variant="body1" sx={{ fontSize: '1.1rem' }} component="h3">
        Uploaded Spreadsheet
      </Typography>
      <Typography variant="body2" component="p" sx={{ my: 2 }}>
        Please pick a cell to assign value
      </Typography>
      <MySpreadSheetRender />
    </Box>
  );
};

export default VisualData;
