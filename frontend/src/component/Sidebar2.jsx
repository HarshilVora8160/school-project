import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Inventory2Icon from '@mui/icons-material/Inventory2';
import MemoryIcon from '@mui/icons-material/Memory';
import WifiFindIcon from '@mui/icons-material/WifiFind';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer() {

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const navigatorData = (data) => {
        console.log("data-------------", data);

        // navigate(`${}`)
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Production', 'Digital marketing', 'Services', 'AboutUs', 'Login', 'SignUp'].map((text, index) => (
                    <ListItem key={text} disablePadding>

                        <ListItemButton>
                            <ListItemIcon>
                                {text === "Production" ? <span onClick={() => navigatorData("production")} ><Inventory2Icon /></span> : ""}
                                {text === "Digital marketing" ? <MemoryIcon /> : ""}
                                {text === "Services" ? <WifiFindIcon /> : ""}
                                {text === "AboutUs" ? <InfoIcon /> : ""}
                                {text === "Login" ? <LoginIcon /> : ""}
                                {text === "SignUp" ? <VpnKeyIcon /> : ""}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Logout', 'Settings'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {text === "All mail" ? <MailIcon /> : ""}
                                {text === "Logout" ? <LogoutIcon /> : ""}
                                {text === "Settings" ? <SettingsIcon /> : ""}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)} ><span className='text-3xl text-white' >&#8801;</span></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}