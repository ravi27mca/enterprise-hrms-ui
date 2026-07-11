import { useEffect, useState } from "react";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
} from "@mui/material";

const EmployeeFormDialog = ({
    open,
    handleClose,
    onSave,
    selectedEmployee,
}) => {

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
    });

    useEffect(() => {

        if (selectedEmployee) {

            setEmployee({
                firstName: selectedEmployee.firstName || "",
                lastName: selectedEmployee.lastName || "",
                email: selectedEmployee.email || "",
                phone: selectedEmployee.phone || "",
                department:
                    selectedEmployee.company?.department || "",
            });

        } else {

            setEmployee({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                department: "",
            });

        }

    }, [selectedEmployee]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setEmployee((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleSubmit = () => {

        onSave(employee);

        handleClose();

    };

    return (

        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
        >

            <DialogTitle>

                {selectedEmployee
                    ? "Edit Employee"
                    : "Add Employee"}

            </DialogTitle>

            <DialogContent>

                <Grid container spacing={2} mt={1}>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={employee.firstName}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={employee.lastName}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            value={employee.phone}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <TextField
                            fullWidth
                            label="Department"
                            name="department"
                            value={employee.department}
                            onChange={handleChange}
                        />

                    </Grid>

                </Grid>

            </DialogContent>

            <DialogActions>

                <Button
                    onClick={handleClose}
                >
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Save
                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default EmployeeFormDialog;