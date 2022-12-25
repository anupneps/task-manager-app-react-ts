import { Grid } from '@mui/material'
import { FC, ReactElement } from 'react'
import CreateTask from '../createTaskFrom/CreateTask'

import Profile from '../profile/Profile'

const SideBarDash: FC = (): ReactElement => {
  return (
    <Grid item md={4} sx={{
      height: '100vh',
      position: 'fixed',
      right: 0,
      top: 0,
      width: '100%',
      backgroundColor: 'background.paper',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Profile name='Manisha' />
      <CreateTask />
    </Grid>
  )
}

export default SideBarDash