import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DevicesIcon from '@mui/icons-material/Devices';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
      <Link to ='/'>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItemButton>
      </Link>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders"/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers"/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Categories
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
     <DesktopWindowsIcon/>
      </ListItemIcon>
      <ListItemText primary="Pc | Gaming Pc"/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LaptopMacIcon/>
      </ListItemIcon>
      <ListItemText primary="Laptops"/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DevicesIcon/>
      </ListItemIcon>
      <ListItemText primary="Accessories" />
    </ListItemButton>
  </React.Fragment>
);



