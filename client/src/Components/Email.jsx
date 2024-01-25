import React, { useEffect,useState } from 'react'
import { useOutletContext , useParams} from 'react-router-dom'
import { API_URLS } from '../services/api.urls'
import useApi from '../hooks/useApi'
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { List, ListItem } from '@mui/material';
import EmailasEmay from './EmailasEmay';
import Nomails from './Nomails';
import { EMPTY_TABS } from './Constants/Constant';

 
 


const Email = () => {

  const[selectedEmails , setSelectedEmails] = useState([]);

  const {openDrawer} = useOutletContext()

  const {type} = useParams();


  const getEmailsService = useApi(API_URLS.getEmailFromTypes);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  const deleteEmailServices = useApi(API_URLS.deleteEmails)
  const [refreshScreen , setRefreshSCreen] = useState(false);

  
  
  
  useEffect(()=>{
        getEmailsService.call({},type)  
  },[type,refreshScreen])
  

  const selectAllEmails= (e)=>{
    if(e.target.checked){
     const emailID = getEmailsService?.response?.map(email=>email._id);
      setSelectedEmails(emailID);    
    }else{
      setSelectedEmails([]);
    }
  }
  

  const deleteSelectedEmails = (e)=>{
         if(type === 'bin'){
             deleteEmailServices.call(selectedEmails)
         } else{
            moveEmailsToBinService.call(selectedEmails)
         }   

         setRefreshSCreen(prevState => !prevState);
  }
  
  console.log(getEmailsService);
  
  return (
    <div  style={ openDrawer ? {marginLeft : 250 , width:'calc(100% - 250px)'}:{width:'100%'}}>
       

      <div  style={{padding:'20px 10px 0 10px' , display:'flex',alignItems:'center', marginTop:'4%'}}>
       <Checkbox size = "small" onChange={(e)=> selectAllEmails(e) }/>
       <DeleteOutlineOutlinedIcon onClick={(e)=> deleteSelectedEmails(e)} />
      </div>

      <List>
        {
          getEmailsService?.response?.map(email =>(
            <EmailasEmay key={email._id} email = {email} setSelectedEmails= {setSelectedEmails} selectedEmails={selectedEmails} setRefreshSCreen= {setRefreshSCreen}/>
          ))
        }
      </List>

      {
        getEmailsService?.response?.length === 0 && <Nomails message = {EMPTY_TABS[type]}/>
      }
      
      </div>
  )
}

export default Email