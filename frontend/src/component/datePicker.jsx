import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';

const MyDatePicker = () => {
  // Set the initial date (26-11-2005) as a dayjs object
  const initialDate = dayjs('26-11-2005', 'DD-MM-YYYY'); // Parse the date string to dayjs

  const [selectedDate, setSelectedDate] = useState(initialDate); // Initialize state with the parsed date
  console.log(selectedDate);
  
  const handleDateChange = (newValue) => {
    // Ensure newValue is valid before updating the state
    if (newValue && newValue.isValid()) {
      setSelectedDate(newValue); // Update state with the selected date
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={selectedDate} // Pass the selected date to the DatePicker
        onChange={handleDateChange} // Handle date change
        sx={{
          input: {
            color: 'white', // Set the text (selected date) color to white
          },
          '& .MuiInputLabel-root': {
            color: 'white', // Set the label color to white
          },
          '& .MuiFilledInput-underline:before': {
            borderBottomColor: 'white', // Set the default underline color to white
          },
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: 'white', // Set the focused underline color to white
          },
          '& .MuiInputBase-root': {
            color: 'white', // Ensure text inside the input (placeholder and selected value) is white
          },
          '& .MuiInputBase-input': {
            color: 'white', // Set the input text color to white
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default MyDatePicker;
