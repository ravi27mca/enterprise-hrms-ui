import {
    Avatar,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Grid,
    Typography,
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
            fullWidth
            maxWidth="sm"
        >

            <DialogTitle>

                Employee Details

            </DialogTitle>

            <DialogContent>

                <Grid
                    container
                    spacing={2}
                    mt={1}
                >

                    <Grid size={{ xs: 12 }} textAlign="center">

                        <Avatar
                            src={employee.image}
                            sx={{
                                width: 100,
                                height: 100,
                                margin: "auto",
                            }}
                        />

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <Typography>

                            <strong>Name :</strong>{" "}

                            {employee.firstName} {employee.lastName}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <Typography>

                            <strong>Email :</strong>{" "}

                            {employee.email}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <Typography>

                            <strong>Phone :</strong>{" "}

                            {employee.phone}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <Typography>

                            <strong>Department :</strong>{" "}

                            {employee.company?.department}

                        </Typography>

                    </Grid>

                </Grid>

            </DialogContent>

            <DialogActions>

                <Button
                    onClick={handleClose}
                    variant="contained"
                >

                    Close

                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default EmployeeDetailsDialog;