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
  lifetimeSeconds,
  onTimeout,
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
            width: isMobileOrTablet ? 'auto' : '50%',
            height: isMobileOrTablet ? '50%' : 'auto',
          }}
        >
          <CardMedia component="img" alt={questionText} image={questionImage} />
          <Box sx={overlayStyle}>
            <QuestionTimer seconds={lifetimeSeconds} onTimeout={onTimeout} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            justifyContent: 'center',
            width: isMobileOrTablet ? 'auto' : '50%',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '100%',
            }}
          >
            <Typography variant="h4" component="h2">
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
        </Box>
      </Card>
    </>
  );
};

export default QuestionCard;
