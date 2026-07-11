import {
    Avatar,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const EmployeeTable = ({
    employees,
    page,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
    handleView,
    handleEdit,
    handleDelete,
}) => {

    return (

        <>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>Photo</TableCell>

                        <TableCell>Name</TableCell>

                        <TableCell>Email</TableCell>

                        <TableCell>Department</TableCell>

                        <TableCell>Phone</TableCell>

                        <TableCell align="center">
                            Actions
                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {
                        employees
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((employee) => (

                                <TableRow key={employee.id}>

                                    <TableCell>

                                        <Avatar
                                            src={employee.image}
                                            alt={employee.firstName}
                                        />

                                    </TableCell>

                                    <TableCell>

                                        {employee.firstName} {employee.lastName}

                                    </TableCell>

                                    <TableCell>

                                        {employee.email}

                                    </TableCell>

                                    <TableCell>

                                        {employee.company?.department}

                                    </TableCell>

                                    <TableCell>

                                        {employee.phone}

                                    </TableCell>

                                    <TableCell align="center">

                                        <IconButton
                                            color="primary"
                                            onClick={() => handleView(employee)}
                                        >

                                            <VisibilityIcon />

                                        </IconButton>

                                        <IconButton
                                            color="warning"
                                            onClick={() => handleEdit(employee)}
                                        >

                                            <EditIcon />

                                        </IconButton>

                                        <IconButton
                                            color="error"
                                            onClick={() => handleDelete(employee)}
                                        >

                                            <DeleteIcon />

                                        </IconButton>

                                    </TableCell>

                                </TableRow>

                            ))
                    }

                </TableBody>

            </Table>

            <TablePagination

                component="div"

                count={employees.length}

                page={page}

                rowsPerPage={rowsPerPage}

                onPageChange={handlePageChange}

                onRowsPerPageChange={handleRowsPerPageChange}

                rowsPerPageOptions={[5, 10, 20]}

            />

        </>

    );

};

export default EmployeeTable;