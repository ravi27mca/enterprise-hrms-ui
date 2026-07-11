import {
    Avatar,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Button,
    Divider,
} from "@mui/material";

const EmployeeDetailsDialog = ({
    open,
    employee,
    handleClose,
}) => {

    if (!employee) return null;

    return (

        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
        >

            <DialogTitle>

                Employee Details

            </DialogTitle>

            <DialogContent>

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mb={2}
                >

                    <Avatar
                        src={employee.image}
                        sx={{
                            width: 100,
                            height: 100,
                            mb: 2,
                        }}
                    />

                </Box>

                <Divider sx={{ mb: 2 }} />

                <Typography>

                    <strong>Name :</strong> {employee.firstName} {employee.lastName}

                </Typography>

                <Typography>

                    <strong>Email :</strong> {employee.email}

                </Typography>

                <Typography>

                    <strong>Phone :</strong> {employee.phone}

                </Typography>

                <Typography>

                    <strong>Company :</strong> {employee.company?.name}

                </Typography>

                <Typography>

                    <strong>Department :</strong> {employee.company?.department}

                </Typography>

                <Typography>

                    <strong>Address :</strong>

                    {employee.address?.address},

                    {employee.address?.city}

                </Typography>

            </DialogContent>

            <DialogActions>

                <Button
                    variant="contained"
                    onClick={handleClose}
                >
                    Close
                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default EmployeeDetailsDialog;