import { Alert, Snackbar } from '@mui/material';
import { useNotificationsQuery } from 'api/notifications/notifications';
import { useEffect, useState } from 'react';

const Notification: React.FC = () => {
  const { data } = useNotificationsQuery();
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    if (data) setMessage(data.find((d) => d.id === 1)?.description);
  }, [data]);

  return (
    <>
      {message && (
        <Snackbar open anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
          <Alert severity="success">{message}</Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Notification;
