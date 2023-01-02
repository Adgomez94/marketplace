import { AlertColor } from '@mui/material';

// PROPS

export type NotificationProps = {
  handleClose: () => void
  msg: string;
  open: boolean;
  severity: AlertColor | undefined;
}