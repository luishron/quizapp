import { Box, Typography } from '@mui/material';
import { FaLayerGroup } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <FaLayerGroup size="24" />
        <Typography variant="h6">QuizDapp</Typography>
      </Box>
    </Link>
  );
};

export default Logo;
