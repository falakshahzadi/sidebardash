import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';


const GroupCalendar = () => {
    const theme = useTheme();
  const localizer = momentLocalizer(moment);

  const events = [
    {
      title: 'Meeting 1',
      start: new Date(2023, 7, 23, 10, 0),
      end: new Date(2023, 7, 23, 12, 0),
    },
    
  ];

  return (
    <Box px={2} py={1}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 ,backgroundColor: theme.palette.calendarbg,color:theme.palette.textdefault}}
      />
    </Box>
  );
};

export default GroupCalendar;


