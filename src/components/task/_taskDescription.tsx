import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"

export interface TaskDescriptionProp{
    description?:string
}

export const TaskDescription = ({description ='Lorem ipsum dolor sit amet consectetur adipisicing el.'}:TaskDescriptionProp) => {
  return (
    <Box>
        <Typography>
            {description}
        </Typography>
    </Box>
  )
}


