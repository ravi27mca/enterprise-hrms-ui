import { useMemo, useState } from "react";

import EmployeeDetailsDialog from "./EmployeeDetailsDialog";

import {
    Avatar,
    Box, Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    TextField,
    TablePagination,
} from "@mui/material";

const RecentEmployees = ({ users }) => {

    const [search, setSearch] = useState("");

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const [open, setOpen] = useState(false);
    const handleView = (employee) => {

        setSelectedEmployee(employee);

        setOpen(true);

    };

    const handleClose = () => {

        setOpen(false);

        setSelectedEmployee(null);

    };

    const filteredUsers = useMemo(() => {

        return users.filter((user) =>

            `${user.firstName} ${user.lastName}`
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            user.email
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            user.company?.name
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [users, search]);

    const handlePageChange = (event, newPage) => {

        setPage(newPage);

    };

    const handleRowsPerPageChange = (event) => {

        setRowsPerPage(parseInt(event.target.value, 10));

        setPage(0);

    };

    return (

        <Paper sx={{ p: 3 }}>

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >

                <Typography variant="h6">

                    Recent Employees

                </Typography>

                <TextField
                    size="small"
                    label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </Box>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>Photo</TableCell>

                        <TableCell>Name</TableCell>

                        <TableCell>Email</TableCell>

                        <TableCell>Company</TableCell>
                        <TableCell align="center">
                            Actions
                        </TableCell>


                    </TableRow>

                </TableHead>

                <TableBody>

                    {

                        filteredUsers
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((user) => (

                                <TableRow key={user.id}>

                                    <TableCell>

                                        <Avatar
                                            src={user.image}
                                            alt={user.firstName}
                                        />

                                    </TableCell>

                                    <TableCell>

                                        {user.firstName} {user.lastName}

                                    </TableCell>

                                    <TableCell>

                                        {user.email}

                                    </TableCell>

                                    <TableCell>

                                        {user.company?.name}

                                    </TableCell>
                                    <TableCell align="center">

                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() => handleView(user)}
                                        >
                                            View
                                        </Button>

                                    </TableCell>

                                </TableRow>

                            ))

                    }

                </TableBody>

            </Table>

            <TablePagination

                component="div"

                count={filteredUsers.length}

                page={page}

                rowsPerPage={rowsPerPage}

                onPageChange={handlePageChange}

                onRowsPerPageChange={handleRowsPerPageChange}

                rowsPerPageOptions={[5, 10, 15]}

            /><EmployeeDetailsDialog

                open={open}

                employee={selectedEmployee}

                handleClose={handleClose}

            />

        </Paper>

    );

};

export default RecentEmployees;