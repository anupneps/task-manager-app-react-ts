import { Box, Chip } from '@mui/material'
import Typography from '@mui/material/Typography'
import { format } from 'date-fns'
import React from 'react'

export interface TaskHeaderProps{
    title?: string
    date?:Date
}

export const TaskHeader = ({title='Default Title', date= new Date()}:TaskHeaderProps) => {
  return (
    <Box display={'flex'} width='100%' justifyContent={'space-between'} mb={3}>
        <Box>
            <Typography variant='h6'>{title}</Typography>
        </Box>
        <Box>
            <Chip variant='outlined' label={format(date, 'PPP')}></Chip>
        </Box>
    </Box>
  )
}
