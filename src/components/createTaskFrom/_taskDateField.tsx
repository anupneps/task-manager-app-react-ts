import TextField from '@mui/material/TextField'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {DisabledProp} from './_taskTitleField'

export interface DateFieldProp extends DisabledProp{
    value?:Date|null
    onChange?:(date: Date|null) => void
}

export const TaskDateField = ({value = new Date(), disabled = false, onChange = (date)=> console.log(date)}:DateFieldProp) => {
    
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label='Task Date'
                inputFormat='dd/MM/yyyy'
                value={value}
                onChange={onChange}
                disabled={disabled}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}

