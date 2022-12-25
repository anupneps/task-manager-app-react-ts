import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { DisabledProp } from './_taskTitleField'

export interface SelectItem {
  value: string
  label: string
}

interface SelectFieldProps extends DisabledProp {
  name?: string
  label?: string
  value?: " "|any
  onChange?: (e: SelectChangeEvent<''>) => void
  items?: SelectItem[]
}

export const TaskSelectField = ({ name = 'selectBox', value='', label = 'Select Box',
  disabled = false, items = [{ value: '', label: 'Add Items' }],
  onChange = (e) => console.log(e) }: SelectFieldProps) => {
  return (
    <FormControl fullWidth size='small'>
      <InputLabel id={`${name}-id`}> {label} </InputLabel>
      <Select
        label={label}
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled} >
         { items.map((item, index)=>(
          <MenuItem key={item.value + index} value={item.value} >{item.label}</MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}
