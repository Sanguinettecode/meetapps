import React, { useRef, useEffect, useState } from 'react';
import { parseISO } from 'date-fns';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@rocketseat/unform';

export default function DatePicker() {
  const ref = useRef();
  const { fieldName, registerField, defaultValue, error } = useField('date');
  const [selected, setSelected] = useState(
    defaultValue ? parseISO(defaultValue) : null
  );
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'date',
        ref: ref.current,
        path: 'props.selected',
        clearValue: pickerRef => {
          pickerRef.clear();
        },
      });
    }
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        id="date"
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
      {error && <span>{error}</span>}
    </>
  );
}
