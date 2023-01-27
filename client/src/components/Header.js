import React from 'react'
import {AppBar, Toolbar} from '@mui/material';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
const Header = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <ModeOfTravelIcon />
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header