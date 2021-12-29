import { SelectionForm } from './Form/SelectionForm';
import Box from '@mui/material/Box';
import VisualData from '../DataVisualization/SpreadSheet/VisualData';

const Main = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#fff' }}>
      <SelectionForm />
      <VisualData />
    </Box>
  );
};

export default Main;
