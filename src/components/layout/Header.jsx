import { useState } from "react";

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
    Box,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import ProfileMenu from "./ProfileMenu";
import useAuth from "../../hooks/useAuth";

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const { keycloak } = useAuth();

    const user = keycloak?.tokenParsed;

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <AppBar position="fixed">

            <Toolbar>

                {/* Application Title */}

                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    Enterprise HRMS
                </Typography>

                {/* Notification */}

                <IconButton color="inherit">

                    <NotificationsIcon />

                </IconButton>

                {/* Dark Mode */}

                <IconButton color="inherit">

                    <DarkModeIcon />

                </IconButton>

                {/* User Details */}

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        ml: 2,
                        cursor: "pointer",
                    }}
                    onClick={handleProfileClick}
                >

                    <Avatar
                        sx={{
                            width: 40,
                            height: 40,
                            bgcolor: "secondary.main",
                        }}
                    >
                        {user?.name?.charAt(0) || user?.preferred_username?.charAt(0)}
                    </Avatar>

                    <Box sx={{ ml: 1 }}>

                        <Typography
                            variant="body2"
                            fontWeight="bold"
                        >
                            {user?.name || user?.preferred_username}
                        </Typography>

                        <Typography
                            variant="caption"
                        >
                            {user?.realm_access?.roles?.[0] || "USER"}
                        </Typography>

                    </Box>

                </Box>

                <ProfileMenu
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    keycloak={keycloak}
                />

            </Toolbar>

        </AppBar>

    );

};

export default Header;