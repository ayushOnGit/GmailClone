import {React , useState} from 'react'
import { Button , List,ListItem,Box,styled, Container } from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { SIDEBAR_DATA } from '../Config/sidebar.config';
import Composemail from './Composemail';
import { useParams , NavLink } from 'react-router-dom';
import { routes } from '../Routes/routes';




const SideBarContent = () => {
  
    const[openDialog , setOpenDialog] = useState(false);
    const {type} = useParams();
  
  
    const onComposeClick=()=>{
        setOpenDialog(true)
    }


    const Container = styled(Box)({
        padding : 8,
        '&>ul':{
            padding : '10px 0  05px',
            fontSize : 14,
            cursor:'pointer',
            fontWeight : 600,
            '& > a ' :{
                textDecoration : 'none',
                color : 'inherit'
            }
        },
    })


  return (
     <Container 
    > 
        <div>
            
        <Button variant="text" onClick={()=> onComposeClick()} style={{background : '#c2e7ff',
    color : '#001d35', padding:15, borderRadius : 16, minWidth : 140, textTransform : 'none'
    }}>
        <CreateOutlinedIcon/>
            Compose</Button>
        </div>

        <List>
        {
           
           (SIDEBAR_DATA).map(data => (
            <NavLink key={data.name} to = {`${routes.emails.path}/${data.name}`}>
                <ListItem 
            style={type === data.name.toLowerCase() ? { background:'#d3e3fd',
             borderRadius:'0 16px 16px 0'}:{}}
            >
               <data.icon  fontSize='small' 
               style={{marginRight:20, fontWeight:'bold' }}
               /> {data.title}
            </ListItem>
            </NavLink>
           ))

        }

        </List>
        <Composemail openDialog= {openDialog} setOpenDialog= {setOpenDialog}/>
    </Container>
  )
}

export default SideBarContent