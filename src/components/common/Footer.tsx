import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import theme from '../../theme/theme';

const FooterSection = styled(Box)(({ theme }: { theme: Theme }) => ({
  background: theme.palette.background.default,
  boxShadow: 'none',
}));

const Footer = () => {
  return (
    <FooterSection
      theme={theme}
      component="footer"
      sx={{
        padding: 2,
        textAlign: 'start',
        borderTop: '1px solid rgba(0, 0, 0, 1)',
      }}
    >
      <Typography variant="body1">© 2023 QuizDapp</Typography>
    </FooterSection>
  );
};

export default Footer;
