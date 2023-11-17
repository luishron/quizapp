import styled from '@emotion/styled';
import { Box, Theme, Typography } from '@mui/material';
import { FaLayerGroup } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import theme from '../../theme/theme';

const StyledLogo = styled(Box)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.primary.light,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5em',
}));

const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <StyledLogo theme={theme}>
        <FaLayerGroup size="24" />
        <Typography variant="h6">QuizDapp</Typography>
      </StyledLogo>
    </Link>
  );
};

export default Logo;
