import { Box, Stack, Typography } from '@mui/material'
import TaskTitleField from './_taskTitleField'
import { Status } from './enums/Status'
import { Priorities } from './enums/Priorities'
import { TaskSelectField } from './_taskSelectField'


const CreateTask = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'flex-start'}
            width='100%'
            px={4}
            my={6}
        >
            <Typography mb={2} component="h2" variant='h6'>Create A Task</Typography>
            <TaskTitleField disabled />
            <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
                <TaskSelectField label='Status' name='status' items={[
                    {
                        value:Status.todo,
                        label:Status.todo.toUpperCase()
                    },
                    {
                        value: Status.inProgress,
                        label:Status.inProgress.toUpperCase()
                    }
                ]}/>
                <TaskSelectField label = 'Priority' name='Priority' items={[
                    {
                        value:Priorities.low,
                        label:Priorities.low

                    },
                    {
                        value:Priorities.normal,
                        label:Priorities.normal
                    },
                    {
                        value:Priorities.high,
                        label:Priorities.high
                    }
                ]}/>

            </Stack>




        </Box>
    )
}

export default CreateTask