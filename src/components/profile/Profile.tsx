import  { FC } from 'react'
import { Avatar, Box, Typography } from '@mui/material'

interface ProfileProps{
    name?:string
    initial?:string

}

const Profile:FC<ProfileProps> = ({name, initial}) => {
    return (
        <Box
            display="flex"
            flexDirection='column'
            justifyContent={'center'}
            alignItems='center'>
            <Avatar
                sx={{
                    width: '96px',
                    height: '96px',
                    backgroundColor: 'primary.main',
                    marginBottom: '16px'
                }}
            >
                <Typography variant='h4' color={'text.primary'}>{initial = name?.charAt(0)}</Typography>
            </Avatar>
            <Typography variant='h6' color={'text.primary'}>
                Welcome, {name}
            </Typography>
            <Typography variant='body1' color={'text.primary'}>
                This is you personal task manager

            </Typography>

        </Box>



        //Name

        // Welcome message 

    )
}

export default Profile