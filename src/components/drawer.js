import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openDrawer, closeDrawer } from '../actions/drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Drawer from '@mui/material/Drawer'
import { DrawerList } from '../lists/drawer'
import Link from 'next/link';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

export default function CustomDrawer() {
    // const [isOpen, setIsOpen] = React.useState(false);
    // const toggleDrawer = (open, event) => {
    //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //     return;
    //   }
    //   setIsOpen(open);
    // }

    const isOpen = useSelector(state => state.drawer.Open)
    const dispatch = useDispatch()

    const list = () => (
        <Box
            sx={{ width: 250, pt: 3, height: "100%" }}

            role="presentation"
            onClick={() => dispatch(closeDrawer(false))}  //(e) => toggleDrawer(false, e)
            onKeyDown={() => dispatch(closeDrawer(false))} //(e) => toggleDrawer(false, e)
        >
            <List sx={{ height: "100%" }}>
                <ListItem className="drawer-title">DZ Fêtes</ListItem>
                {DrawerList.map((item, index) => (
                    <Link href={item.link} passHref key={index}>
                        <ListItem button component="a" key={index}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    </Link>
                ))}
                <Divider />
                <Link href="/newServiceOwner" passHref>
                    <ListItem
                        button
                        sx={{ position: "absolute", bottom: "5px" }}
                        className="Item-drawer-bottom"
                        component="a" // LINK
                        key={DrawerList.length}
                    >
                        <ListItemIcon>
                            <AssignmentIndOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Register As Service Owner" />
                    </ListItem>
                </Link>
            </List>
        </Box>
    );

    return (
        <div>
            <div key={'left'}>
                <Drawer
                    anchor='left'
                    open={isOpen}
                    onClose={() => dispatch(closeDrawer(false))} //(e) => toggleDrawer(false, e)
                    onOpen={() => dispatch(openDrawer(true))}
                >
                    {list()}
                </Drawer>
            </div>
        </div>
    );
}
