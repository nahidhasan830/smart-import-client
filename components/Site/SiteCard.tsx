import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

interface IProps {
  name: string;
  latitude: string;
  longitude: string;
  description: string;
}

const SiteCard: React.FC<IProps> = ({
  name,
  latitude,
  longitude,
  description
}) => {
  return (
    <Card
      sx={{
        margin: 4,
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '120px',
        justifyContent: 'space-around'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="subtitle2" component="div">
          Name :{' '}
          <Typography variant="body1" component="span">
            {name}
          </Typography>
        </Typography>

        <Typography variant="subtitle2" component="div">
          Latitude :{' '}
          <Typography variant="body1" component="span">
            {latitude}
          </Typography>
        </Typography>

        <Typography variant="subtitle2" component="div">
          Longitude :{' '}
          <Typography variant="body1" component="span">
            {longitude}
          </Typography>
        </Typography>
      </Box>

      <Typography variant="subtitle2" component="div">
        Description :{' '}
        <Typography variant="body1" component="span">
          {description}
        </Typography>
      </Typography>
    </Card>
  );
};

export default SiteCard;
