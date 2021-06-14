import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { StyledDatePicker } from "@components";

interface IProps {
    id?: string,
    label?: string,
    value: Date | null,
    onChange(date: Date | null): void,
}

export function DatePicker(props: IProps) {

    const { id, label, value, onChange } = props;
  // The first commit of Material-UI

  return (
    <StyledDatePicker>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
            <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id={id}
            label={label}
            value={value}
            onChange={onChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            emptyLabel="Select date"
            autoOk
            />
        </Grid>
        </MuiPickersUtilsProvider>
    </StyledDatePicker>
  );
}