import React from 'react'

import { Snackbar, Alert, Typography } from '@mui/material';

import { NotificationProps } from './types';

export const Notification: React.FC<NotificationProps> = ({
  open,
  severity,
  handleClose,
  msg
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={4000}
      open={open}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
      >
        <Typography>{ msg }</Typography>
      </Alert>
    </Snackbar>
  )
}
