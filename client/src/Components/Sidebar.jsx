import React from 'react'
import { Drawer } from '@mui/material'
import SideBarContent from './SideBarContent'

const Sidebar = ({ openDrawer }) => {
  return (
    <div>
      <Drawer
        anchor="left"
        open={openDrawer} // Properly destructure openDrawer from props
        hideBackdrop={true}
        ModalProps={{
          keepMounted: true,
        }}
        variant="persistent"
        sx={{
          '& .MuiDrawer-paper': {
            marginTop: '64px',
            width: 250,
            background: '#F5F5F5',
            borderRight: 'none',
            height: 'calc(100vh - 64px)',
          },
        }}
      >
        <SideBarContent />
      </Drawer>
    </div>
  );
};

export default Sidebar;