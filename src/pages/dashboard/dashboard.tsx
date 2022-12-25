import { Grid } from '@mui/material'
import  { FC, ReactElement } from 'react'
import SideBarDash from '../../components/sidebar/SideBarDash'
import TaskAreaDash from '../../components/taskArea/TaskAreaDash'


const dashboard:FC = ():ReactElement => {
  return (
    <>
    <Grid container minHeight = "100vh" p={0} m={0}>
        <SideBarDash/>
        <TaskAreaDash/>
        
    </Grid>
    
    </>
  )
}

export default dashboard