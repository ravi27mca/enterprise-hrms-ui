import {
    Menu,
    MenuItem,
    Divider,
    Typography,
    Box,
} from "@mui/material";

const ProfileMenu = ({
    anchorEl,
    handleClose,
    keycloak,
}) => {

    const user = keycloak?.tokenParsed;

    const handleLogout = () => {

        handleClose();

        keycloak.logout();

    };

    return (

        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    width: 250,
                    mt: 1,
                },
            }}
        >

            {/* User Information */}

            <Box sx={{ px: 2, py: 1 }}>

                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                >
                    {user?.name || user?.preferred_username}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {user?.email}
                </Typography>

                <Typography
                    variant="caption"
                    color="primary"
                >
                    {user?.realm_access?.roles?.join(", ")}
                </Typography>

            </Box>

            <Divider />

            <MenuItem onClick={handleClose}>

                My Profile

            </MenuItem>

            <MenuItem onClick={handleClose}>

                Settings

            </MenuItem>

            <Divider />

            <MenuItem
                onClick={handleLogout}
                sx={{
                    color: "error.main",
                    fontWeight: "bold",
                }}
            >

                Logout

            </MenuItem>

        </Menu>

    );

};

export default ProfileMenu;