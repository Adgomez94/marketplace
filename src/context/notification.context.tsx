import React from 'react';
import { useState } from 'react';
import { AlertColor } from '@mui/material';

import { Notification } from '../components';

type ContextProps = {
  getNotification: (message: string, type: AlertColor) => void;
}

const NotificationContext = React.createContext<ContextProps | null>(null)

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children
}) => {
  const [msg, setMsg] = useState('')
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)


  const getNotification = (message: string, type: AlertColor) => {
    setSeverity(type)
    setOpen(true)
    setMsg(message)
  }


  const handleClose = () => { setOpen(false) }

  const value = {
    getNotification,

  }

  return (
    <NotificationContext.Provider value={value}>
      <Notification 
        open={open}
        msg={msg}
        severity={severity}
        handleClose={handleClose}
      />
      { children }

    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = React.useContext(NotificationContext)
  if(!context) throw new Error("No hay Contexto")
  return context
}