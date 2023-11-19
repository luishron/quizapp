import {
  Button,
  ButtonGroup,
  Fade,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Popper,
  darken,
  styled,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { FaAngleDown, FaCoins, FaWallet } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { useAccount, useDisconnect } from 'wagmi';
import { shortenAddress } from '../../utils/shortenAddress';
import QuizTokenBalance from './QuizTokenBalance';

const StyledMenu = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,

  '& .MuiMenuItem-root': {
    paddingInline: theme.spacing(2),
    paddingBlock: theme.spacing(1),

    '&:hover': {
      backgroundColor: darken(theme.palette.background.paper, 0.2),
      color: theme.palette.primary.main,
    },

    '&:not(:first-of-type)': {
      borderTop: `1px solid ${theme.palette.divider}`,
      color: theme.palette.text.secondary,
    },
  },
}));

const AccountControl = () => {
  const theme = useTheme();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const shortAddress = address ? shortenAddress(address) : 'Conectar Wallet';
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <ButtonGroup>
        <Button
          variant="outlined"
          startIcon={<FaWallet color="primary" size="18px" />}
        >
          {shortAddress}
        </Button>
        <Button
          variant="outlined"
          aria-describedby={id}
          type="button"
          onClick={handleClick}
        >
          <FaAngleDown size="1.2em" />
        </Button>
      </ButtonGroup>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <StyledMenu>
              <MenuItem>
                <ListItemIcon sx={{ color: `${theme.palette.primary.main}` }}>
                  <FaCoins />
                </ListItemIcon>
                <ListItemText>
                  <QuizTokenBalance userAddress={address} />
                </ListItemText>
              </MenuItem>

              <MenuItem onClick={() => disconnect()}>
                <ListItemIcon sx={{ color: `${theme.palette.text.secondary}` }}>
                  <MdLogout />
                </ListItemIcon>
                <ListItemText>Disconnect</ListItemText>
              </MenuItem>
            </StyledMenu>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default AccountControl;
