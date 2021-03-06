import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './DatePicker.css'
function DatePickerInput() {
  const [date, setDate] = useState()
  return (
    <DatePicker date={date} onDateChange={setDate} locale={enGB}>
      {/* <input type="date" className={'s-txt'+'input' + (focused ? ' -focused' : '')} {...inputProps} id="txtUserRegistrationDOB" name="txtUserRegistrationDOB"/> */}
      {({ inputProps, focused }) => (
        <input
        id="txtUserRegistrationDOB"
        name="txtUserRegistrationDOB"
          className={'s-txt'+'input' + (focused ? ' -focused' : '')}
          {...inputProps}
        />
      )}
    </DatePicker>
  )
}
export default DatePickerInput;
