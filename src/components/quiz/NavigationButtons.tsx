import { Button } from '@mui/material';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const NavigationButtons = ({
  isFirstQuestion,
  isLastQuestion,
  onPrevious,
  onNext,
  onFinish,
}) => {
  return (
    <>
      {!isFirstQuestion && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onPrevious}
          startIcon={<FaAngleLeft />}
        >
          Previous
        </Button>
      )}
      {!isLastQuestion ? (
        <Button
          variant="contained"
          color="primary"
          onClick={onNext}
          endIcon={<FaAngleRight />}
        >
          Next
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={onFinish}
          endIcon={<FaAngleRight />}
        >
          Finish
        </Button>
      )}
    </>
  );
};

export default NavigationButtons;
