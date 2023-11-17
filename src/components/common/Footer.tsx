import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import theme from '../../theme/theme';

const FooterSection = styled(Box)(({ theme }: { theme: Theme }) => ({
  boxShadow: 'none',
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const StiledTypography = styled(Typography)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '.8rem',
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
      <StiledTypography theme={theme}>© 2023 QuizDapp</StiledTypography>
    </FooterSection>
  );
};

export default Footer;
