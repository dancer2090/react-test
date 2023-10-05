import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'helpers/baseQuery';

import { NotificationResponseType } from './notifications.interface';

export const notificationApi = createApi({
  reducerPath: 'notificationApi',
  baseQuery: baseQuery('/'),
  endpoints: (builder) => ({
    notifications: builder.query<NotificationResponseType, void>({
      query: () => '/notifications',
    }),
  }),
});

export const { useNotificationsQuery } = notificationApi;
