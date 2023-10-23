import { Alert } from '@mui/material';
import { useNotificationsQuery } from 'api/notifications/notifications';
import { useEffect, useState } from 'react';
import { StyledSnackbar } from './styles';

const Notification: React.FC = () => {
  const { data } = useNotificationsQuery();
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    if (data) setMessage(data.find((d) => d.id === 1)?.description);
  }, [data]);

  return (
    <>
      {message && (
        <StyledSnackbar open anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert severity="success">{message}</Alert>
        </StyledSnackbar>
      )}
    </>
  );
};

export default Notification;
