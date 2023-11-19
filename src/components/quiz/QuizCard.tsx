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
    boxShadow: 6,
  };
  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        alt={title}
        image={image}
        sx={{
          width: isMobileOrTablet ? 'auto' : '50%',
          height: isMobileOrTablet ? '100%' : 'auto',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
          justifyContent: 'center',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: '1.5rem',
              lineHeight: '2rem',
              padding: '1rem 0',
              color: theme.palette.text.secondary,
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>{children}</CardActions>
      </Box>
    </Card>
  );
};

export default QuizCard;
