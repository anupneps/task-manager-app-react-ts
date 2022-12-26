import { Box, Avatar, Typography } from '@mui/material'
import { Status } from '../createTaskFrom/enums/Status'
import { EmitCorrectBorderColor } from './helpers/emitCorrectBorderColor'
import { emitCorrectSubtitle } from './helpers/emitCorrectSubtitle'


export type TaskCounterStatusType = Status.todo|Status.inProgress|Status.completed

export interface TaskCounterProps{
    count?: number
    status?:TaskCounterStatusType
}

export const TaskCounter = ({count=0, status=Status.completed}:TaskCounterProps) => {
    return (
        <>
            <Box display={'flex'} flexDirection='column' justifyContent={'center'} alignItems='center' >
                <Avatar sx={{
                    backgroundColor: 'transparent',
                    border:'5px solid',
                    width:'96px',
                    height:'96px',
                    marginBottom:'16px',
                    borderColor: `${EmitCorrectBorderColor(status)}`
                }} >
                    <Typography color={'#ffffff'} variant='h4' >{count}</Typography>
                </Avatar>
                <Typography color={'#ffffff'} fontWeight='bold' fontSize={'20px'} variant='h5' >{emitCorrectSubtitle(status)}</Typography>
            </Box>


        </>
    )
}
