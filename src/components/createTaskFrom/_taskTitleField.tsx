import { TextField, Stack } from "@mui/material"
import { TaskDateField } from "./_taskDateField"
import { TaskSelectField } from "./_taskSelectField"


export interface DisabledProp{
    disabled?:boolean
}

export interface TaskField extends DisabledProp{
    textFieldOnChange?:(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const TaskTitleField = ({disabled = false, textFieldOnChange = (e)=> console.log(e.target.value)}:TaskField) => {
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <TextField
                id="title"
                label="Task Title"
                variant="outlined"
                placeholder="Task Title"
                size="small" name="title"
                fullWidth 
                disabled={disabled}
                onChange={textFieldOnChange}
            />
            <TextField id="description" label="Description" variant="outlined" multiline rows={4} size="small" name='description' fullWidth />
            <TaskDateField/>

            <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
                <TaskSelectField/>
                <TaskSelectField/>

            </Stack>


        </Stack>
    )
}

export default TaskTitleField