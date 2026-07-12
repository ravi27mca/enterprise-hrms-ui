import {
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DepartmentTable = ({
  departments,
  page,
  rowsPerPage,
  handlePageChange,
  handleRowsPerPageChange,
  handleEdit,
  handleDelete,
}) => {
  return (
    <Paper sx={{ mt: 3 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Department</b>
              </TableCell>

              <TableCell>
                <b>Manager</b>
              </TableCell>

              <TableCell>
                <b>Location</b>
              </TableCell>

              <TableCell align="center">
                <b>Employees</b>
              </TableCell>

              <TableCell align="center">
                <b>Status</b>
              </TableCell>

              <TableCell align="center">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {departments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((department) => (
                <TableRow key={department.id} hover>
                  <TableCell>{department.departmentName}</TableCell>

                  <TableCell>{department.manager}</TableCell>

                  <TableCell>{department.location}</TableCell>

                  <TableCell align="center">
                    {department.employeeCount}
                  </TableCell>

                  <TableCell align="center">
                    <Chip
                      label={department.status ? "Active" : "Inactive"}
                      color={department.status ? "success" : "error"}
                      size="small"
                    />
                  </TableCell>

                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(department)}
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      color="error"
                      onClick={() => handleDelete(department)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={departments.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </Paper>
  );
};

export default DepartmentTable;
