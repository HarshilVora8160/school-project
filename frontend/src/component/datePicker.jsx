import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';

const MyDatePicker = ({ setAdminObject }) => {
  // Set the initial date (26-11-2005) as a dayjs object
  const initialDate = dayjs('26-11-2005', 'DD-MM-YYYY'); // Parse the date string to dayjs

  const [selectedDate, setSelectedDate] = useState(initialDate); // Initialize state with the parsed date
  console.log("selectedDate-------", selectedDate);

  const handleDateChange = (val) => {
    const formatDate = (val) => new Date(val).toLocaleDateString('en-GB');
    setAdminObject((prev) => ({
      ...prev,
      dob: formatDate(val)
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        onChange={handleDateChange} // Handle date change
        renderInput={(params) => (
          <TextField
            {...params}
            style={{
              '& .MuiInputLabel-root': {
                color: 'white', // Set the label color to white
              },
              '& .MuiInputBase-root': {
                color: 'white', // Set the text (selected date) color to white
              },
              '& .MuiInputBase-input': {
                color: 'white', // Set the input text color to white
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: 'white', // Set the default underline color to white
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white', // Set the focused underline color to white
              },
              // For filled variant of DatePicker, targeting the filled input style
              '& .MuiFilledInput-root': {
                color: 'white', // Ensure filled input text is white
              },
              '& .MuiFilledInput-underline:before': {
                borderBottomColor: 'white', // Set the filled input border color to white
              },
              '& .MuiFilledInput-underline:after': {
                borderBottomColor: 'white', // Set the filled input focused border to white
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default MyDatePicker;
