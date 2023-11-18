import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const QuizCard = ({ image, title, description, children }) => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('sm'));

  const cardStyle = {
    display: 'flex',
    flexDirection: isMobileOrTablet ? 'column' : 'row',
  };
  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        alt={title}
        image={image}
        style={{ width: 'auto', height: '350px' }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>{children}</CardActions>
      </Box>
    </Card>
  );
};

export default QuizCard;
