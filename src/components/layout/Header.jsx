import { useState } from "react";

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Avatar,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import ProfileMenu from "./ProfileMenu";

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <AppBar position="fixed">

            <Toolbar>

                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >

                    Enterprise HRMS

                </Typography>

                <IconButton color="inherit">

                    <NotificationsIcon />

                </IconButton>

                <IconButton color="inherit">

                    <DarkModeIcon />

                </IconButton>

                <IconButton
                    color="inherit"
                    onClick={handleProfileClick}
                >

                    <Avatar>

                        R

                    </Avatar>

                </IconButton>

                <ProfileMenu
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                />

            </Toolbar>

        </AppBar>

    );

};

export default Header;