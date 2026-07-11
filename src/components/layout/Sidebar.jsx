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
                    borderRight: "1px solid #e0e0e0",
                },
            }}
        >
            {/* Header Space */}
            <Toolbar />

            <List>

                {menuItems.map((item) => {

                    const Icon = item.icon;

                    return (
                        <ListItemButton
                            key={item.path}
                            component={Link}
                            to={item.path}
                            selected={location.pathname === item.path}
                            sx={{
                                mx: 1,
                                borderRadius: 2,
                                mb: 0.5,

                                "&.Mui-selected": {
                                    backgroundColor: "#1976d2",
                                    color: "#fff",

                                    "& .MuiListItemIcon-root": {
                                        color: "#fff",
                                    },
                                },

                                "&:hover": {
                                    backgroundColor: "#e3f2fd",
                                },
                            }}
                        >
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>

                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    );

                })}

            </List>

        </Drawer>
    );
};

export default Sidebar;