import {React } from 'react'
import { Toolbar, AppBar  } from '@mui/material';
import { gmaillogo } from './Constants/Constant';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { InputBase } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




 
 
const Header = ({toggleDrawer}) => {
  // console.log(toggleDrawer)
  return (
   <AppBar position = "fixed" style={{background : '#F5F5F5', boxShadow : 'none' , zIndex:1000}}>
    <Toolbar >
    
     <MenuIcon color='action'  onClick = {toggleDrawer}/> 
    <img src ={gmaillogo} alt = "logo" style = {{width : 110 , marginLeft:15}}/>
    <div style = {{background : '#EAF1FB' , marginLeft : 80 , borderradius: 8,
    minWidth: 690,
    maxWidth: 720,
    height: 48,
    display : 'flex',
    alignItems:'center',
    justifyContent : 'space-between',
    padding: '0 20px' ,
    width : '100%'
    }} >



    <SearchIcon color = "action" />
    <InputBase placeholder='Search mail' style={{width:'100%' , padding : 10,}}/>
    <TuneIcon color  ="action"/>
    </div>

    <div style={{display :'flex',justifyContent: 'flex-end', width : 500}}>
      <HelpOutlineIcon color = 'action' style={{padding : 10}}/>
      <SettingsIcon color='action' style={{padding : 10}}/>
      <AppsIcon color = 'action' style={{padding : 10}}/>
      <AccountCircleIcon color = 'action' style={{padding : 10, marginLeft : 5}} />
    </div>

    </Toolbar>
   </AppBar>
  )
}

export default Header