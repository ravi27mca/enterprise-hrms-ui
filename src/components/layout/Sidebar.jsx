import {
    Drawer,
    Toolbar,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";

import menuItems from "../../constants/menuItems";

const drawerWidth = 240;

const Sidebar = () => {

    const location = useLocation();

    return (

        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >

            <Toolbar />

            <List>

                {
                    menuItems.map((item) => (

                        <ListItemButton
                            key={item.text}
                            component={Link}
                            to={item.path}
                            selected={location.pathname === item.path}
                        >

                            <ListItemIcon>

                                {item.icon}

                            </ListItemIcon>

                            <ListItemText primary={item.text} />

                        </ListItemButton>

                    ))
                }

            </List>

        </Drawer>

    );

};

export default Sidebar;