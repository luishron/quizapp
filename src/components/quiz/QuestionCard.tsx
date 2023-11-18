import {
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import QuestionTimer from './QuestionTimer';

const QuestionCard = ({
  questionText,
  questionImage,
  options,
  answer,
  onAnswerChange,
}) => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('sm'));

  const cardStyle = {
    display: 'flex',
    flexDirection: isMobileOrTablet ? 'column' : 'row',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay color, ajusta la opacidad como necesites
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', // Color del texto del overlay
  };

  return (
    <>
      <Card sx={cardStyle}>
        <Box
          sx={{
            background: 'rgba(0,0,0,0.2)',
            position: 'relative',
            width: 'auto',
            height: '350px',
          }}
        >
          <CardMedia
            component="img"
            alt={questionText}
            image={questionImage}
            sx={{ width: '100%', height: '100%' }}
          />
          <Box sx={overlayStyle}>
            <QuestionTimer
              seconds={10}
              onTimeout={() => {
                console.log('hola');
              }}
            />
          </Box>
        </Box>
        <CardContent sx={{}}>
          <Typography variant="h5" component="h2">
            {questionText}
          </Typography>
          <RadioGroup
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
          >
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option.text}
                control={<Radio />}
                label={option.text}
              />
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </>
  );
};

export default QuestionCard;
