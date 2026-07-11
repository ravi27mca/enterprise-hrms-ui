import { Alert, Snackbar } from "@mui/material";

const AppSnackbar = ({
    open,
    message,
    severity,
    handleClose,
}) => {

    return (

        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >

            <Alert
                severity={severity}
                variant="filled"
                onClose={handleClose}
                sx={{ width: "100%" }}
            >

                {message}

            </Alert>

        </Snackbar>

    );

};

export default AppSnackbar;