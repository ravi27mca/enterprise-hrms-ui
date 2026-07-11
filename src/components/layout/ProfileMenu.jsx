import {
    Menu,
    MenuItem,
    Divider,
} from "@mui/material";

const ProfileMenu = ({
    anchorEl,
    handleClose,
}) => {

    return (

        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >

            <MenuItem>

                Ravi

            </MenuItem>

            <MenuItem>

                Administrator

            </MenuItem>

            <Divider />

            <MenuItem onClick={handleClose}>

                Profile

            </MenuItem>

            <MenuItem onClick={handleClose}>

                Settings

            </MenuItem>

            <MenuItem onClick={handleClose}>

                Logout

            </MenuItem>

        </Menu>

    );

};

export default ProfileMenu;