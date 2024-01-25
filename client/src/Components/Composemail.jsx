import {React, useState} from 'react';
import { Dialog, InputBase, Typography, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';


const dialogstyle = {
  height: '90%',
  width: '80%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  borderRadius: '10px 10px 0  0',
  fontWeight: 500,
};

//.............................................................................................composemail starts from here 
const Composemail = ({openDialog , setOpenDialog}) => {

  const sentEmailService = useApi(API_URLS.saveSentEmail);
  const saveDraftServices = useApi(API_URLS.saveDraftEmail)
  const[data , setData] = useState({}); 

   const  closethis=(e)=>{
   e.preventDefault();
   const payload = {
    to : data.to,
    from : 'ayushsingh1771@gmail.com',
    subject : data.subject,
    body :data.body,
    date: new Date(),
    image : '',
    name :'Ayush Singh',
    starred : false,
    type:'draft',
  }
  saveDraftServices.call(payload) //call function is written in useAPI hook refer the file incaseof confusion
  
  if(!saveDraftServices.error){
    setOpenDialog(false);
    setData({})
  }

    }

const config = {
    Host : "smtp.elasticemail.com",
    Username : 'ayushsingh1771@gmail.com',
    Password : "EBA0BD22425558952607FEEF193FA070A2D3",
    port:'2525',
}


const onvalueChange = (e)=>{
     console.log(e);
    setData({...data,[e.target.name] : e.target.value})
}

const sendhogya = (e)=>{
   e.preventDefault();
   
  if(window.Email){
    window.Email.send({
         ...config,
        To : data.to,
        From : 'ayushsingh1771@gmail.com',
        Subject :  data.subject,
        Body : data.body,
    }).then(   
       message => alert(message),
      (error) => console.error("Error sending email:", error)
    );
    const payload = {
      to : data.to,
      from : 'ayushsingh1771@gmail.com',
      subject : data.subject,
      body :data.body,
      date: new Date(),
      image : '',
      name :'Ayush singh',
      starred : false,
      type:'sent',
    }
    sentEmailService.call(payload) //call function is written in useAPI hook refer the file incaseof confusion
    
    if(!sentEmailService.error){
      setOpenDialog(false);
      setData({})
    }
    setOpenDialog(false);
}
  }
//...................................................................................................send function
  return (
    <div>
      <Dialog open={openDialog} PaperProps={{ sx: dialogstyle }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 15px',
            background: '#f2f6fc',
            '& > p': {
              fontSize: 14,
              fontWeight: 500,
            },
          }}
        >
          <Typography style={{ fontWeight: 600 }}>New Message</Typography>
          <CloseIcon onClick= {(e)=>closethis(e)} style={{ fontSize: 'small' }} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 15px',
            '& > div': {
              fontSize: 14,
              borderBottom: '1px solid #F5F5F5', // Fix the border bottom
            },
          }}
        >
          <InputBase placeholder='Recipients' name = 'to' onChange={(e)=>onvalueChange(e)} />
          <InputBase placeholder='Subject' name = 'subject' onChange={(e)=>onvalueChange(e)} />

          <TextField

            name='body'
            onChange={(e)=>onvalueChange(e)}
            multiline
            rows={20}
            sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', padding:'10px 15px' , alignItems:'center'}}>
          <Button  onClick={(e)=>sendhogya(e)}
          style={{background:'#0B57D0' , color:'#fff', fontWeight:500,textTransform:'none',borderRadius:18,width:100}}>Send</Button>
          <DeleteOutlineOutlinedIcon onClick={()=> setOpenDialog(false)}/>
        </div>
      </Dialog>
    </div>
  );
};

export default Composemail;
