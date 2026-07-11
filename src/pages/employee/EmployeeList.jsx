import { useEffect, useState, useMemo } from "react";
import { Paper, Typography } from "@mui/material";
import employeeService from "../../services/employeeService";
import EmployeeToolbar from "../../components/employee/EmployeeToolbar";
import EmployeeTable from "../../components/employee/EmployeeTable";
import EmployeeFormDialog from "../../components/employee/EmployeeFormDialog";
import AppSnackbar from "../../components/common/AppSnackbar";
import EmployeeDetailsDialog from "../../components/employee/EmployeeDetailsDialog";
import ConfirmDialog from "../../components/common/ConfirmDialog";
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [viewOpen, setViewOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteEmployee, setDeleteEmployee] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleView = (employee) => {
    setSelectedEmployee(employee);
    setViewOpen(true);
  };
  const handleViewClose = () => {
    setViewOpen(false);
    setSelectedEmployee(null);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setOpen(true);
  };

  const handleDelete = (employee) => {
    setDeleteEmployee(employee);
    setDeleteOpen(true);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
    setDeleteEmployee(null);
  };

  const loadEmployees = async () => {
    try {
      const response = await employeeService.getEmployees();
      setEmployees(response.data.users);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setSelectedEmployee(null);
    setOpen(true);
  };

  const handleSearch = (value) => {
    setSearch(value);
    setPage(0);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEmployee(null);
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({
      ...prev,

      open: false,
    }));
  };

  const handleSave = (employee) => {
    if (selectedEmployee) {
      // Edit

      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === selectedEmployee.id
            ? {
                ...emp,
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email,
                phone: employee.phone,
                company: {
                  ...emp.company,
                  department: employee.department,
                },
              }
            : emp,
        ),
      );

      setSnackbar({
        open: true,
        message: "Employee Updated Successfully",
        severity: "success",
      });
    } else {
      // Add

      const newEmployee = {
        id: Date.now(),
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        phone: employee.phone,
        image: "",
        company: {
          department: employee.department,
        },
      };

      setEmployees((prev) => [newEmployee, ...prev]);

      setSnackbar({
        open: true,
        message: "Employee Added Successfully",
        severity: "success",
      });
    }

    setSelectedEmployee(null);
    setOpen(false);
  };
  const filteredEmployees = useMemo(() => {
    return employees.filter(
      (employee) =>
        `${employee.firstName} ${employee.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase()) ||
        employee.company?.department
          .toLowerCase()
          .includes(search.toLowerCase()),
    );
  }, [employees, search]);
  const handleConfirmDelete = () => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== deleteEmployee.id));

    setSnackbar({
      open: true,

      message: "Employee Deleted Successfully",

      severity: "success",
    });

    handleDeleteClose();
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Employee Management
      </Typography>

      <EmployeeToolbar
        search={search}
        handleSearch={handleSearch}
        handleAdd={handleAdd}
      />

      <EmployeeTable
        employees={filteredEmployees}
        page={page}
        rowsPerPage={rowsPerPage}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        handleView={handleView}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <EmployeeFormDialog
        open={open}
        handleClose={handleClose}
        onSave={handleSave}
        selectedEmployee={selectedEmployee}
      />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        handleClose={handleSnackbarClose}
      />
      <EmployeeDetailsDialog
        open={viewOpen}
        employee={selectedEmployee}
        handleClose={handleViewClose}
      />
      <ConfirmDialog
        open={deleteOpen}
        title="Delete Employee"
        message={`Are you sure you want to delete "${deleteEmployee?.firstName} ${deleteEmployee?.lastName}" ?`}
        onCancel={handleDeleteClose}
        onConfirm={handleConfirmDelete}
      />
    </Paper>
  );
};

export default EmployeeList;
