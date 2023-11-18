import {
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
  };

  return (
    <>
      <Card sx={cardStyle}>
        <CardMedia
          component="img"
          alt={questionText}
          image={questionImage}
          style={{ width: 'auto', height: '350px' }}
        />
        <CardContent sx={{}}>
          <Typography variant="h5" component="h2">
            {questionText} e
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
