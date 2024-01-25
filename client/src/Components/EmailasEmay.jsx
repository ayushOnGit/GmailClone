import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Box, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { routes } from '../Routes/routes';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';


const Wrapper = styled(Box)({
  padding:'0 0 0 10px',
  background:'#f2f6fc',
  cursor : 'pointer',
  display:'flex',
  alignItems:'center',

  '&>div':{
    display:'flex',
    width:'100%',
    '&>p':{
      fontSize:14
    }


  }

})



 


const EmailasEmay = ({email, setSelectedEmails , selectedEmails , setRefreshSCreen}) => {
  const navigate = useNavigate();

  const toggleStarredService = useApi(API_URLS.toggleStarredEmail);
  const toggleStarredMail= ()=>{
      toggleStarredService.call({id: email._id , value : !email.starred})
      setRefreshSCreen(prevState => !prevState);
      
  }

  const Select = ()=>{
       if(selectedEmails.includes(email._id)){
        setSelectedEmails(prevState => !prevState.filter(id => id != email._id))
       }else{
        setSelectedEmails(prevState => [...prevState , email._id])
       }
  }



  return (
    
    <Wrapper>
    <Checkbox fontSize="small" checked={selectedEmails.includes(email._id)} onChange={() => Select()} />


    {
      email.starred?
      <StarIcon fontSize='small' style={{marginRight : 10, color : '#FFF200'}} onClick= {()=> toggleStarredMail()}/>
      :
      <StarBorderIcon fontSize='small' style={{marginRight:10 }} onClick={()=>toggleStarredMail()}/>
    }
     <Box onClick={()=>navigate(routes.view.path , {state : {email :email}})}>
     <Typography style={{width:200 , overflow : 'hidden'}}>{email.name}</Typography>
     <Typography style={{fontSize:'12px !important',background:'#ddd',color:'#222', padding:'0 4px',
  borderRadius:4,
  marginRight:6,}}>Inbox</Typography>
     <Typography style={{overflow:'hidden'}}>{email.subject} {email.body.slice(0,25) && '-'} {email.body}</Typography>
     <Typography style={{marginLeft:'auto', marginRight:20, fontSize:12, color :'#5F6368'}}>
      {(new window.Date(email.date)).getDate()}
      {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })
}
     </Typography>
     </Box>
    </Wrapper>
  )
}

export default EmailasEmay