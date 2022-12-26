import { Box, Button, FormControlLabel, Switch } from '@mui/material'
import React from 'react'

export interface TaskFooterProps {
    onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => void
}

export const TaskFooter = ({ onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e) }: TaskFooterProps) => {

    return (
        <Box display={'flex'} justifyContent='space-between' alignItems={'center'} mt={4}>
            <FormControlLabel label='In progress'
                control={<Switch onChange={(e)=>onStatusChange(e)} color='warning' />}
            />
            <Button variant='contained' color='success' size='small' onClick={(e)=>onClick(e)} sx={{ color: '#ffffff' }}>Mark Complete</Button>
        </Box>
    )
}
