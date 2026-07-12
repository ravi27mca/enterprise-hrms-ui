import { useMemo, useState } from "react";

import { Paper, Typography } from "@mui/material";

import DepartmentToolbar from "../../components/department/DepartmentToolbar";
import DepartmentTable from "../../components/department/DepartmentTable";
import DepartmentFormDialog from "../../components/department/DepartmentFormDialog";
import ConfirmDialog from "../../components/common/ConfirmDialog";
import AppSnackbar from "../../components/common/AppSnackbar";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      departmentName: "Information Technology",
      manager: "Ravi Kumar",
      location: "Hyderabad",
      employeeCount: 45,
      status: true,
    },

    {
      id: 2,
      departmentName: "Human Resources",
      manager: "Suresh",
      location: "Bangalore",
      employeeCount: 15,
      status: true,
    },

    {
      id: 3,
      departmentName: "Finance",
      manager: "Mahesh",
      location: "Chennai",
      employeeCount: 20,
      status: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [open, setOpen] = useState(false);

  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [deleteDepartment, setDeleteDepartment] = useState(null);

  const [snackbar, setSnackbar] = useState({
    open: false,

    message: "",

    severity: "success",
  });

  const filteredDepartments = useMemo(() => {
    return departments.filter(
      (department) =>
        department.departmentName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        department.manager.toLowerCase().includes(search.toLowerCase()) ||
        department.location.toLowerCase().includes(search.toLowerCase()),
    );
  }, [departments, search]);

  const handleSearch = (value) => {
    setSearch(value);

    setPage(0);
  };

  const handleAdd = () => {
    setSelectedDepartment(null);

    setOpen(true);
  };

  const handleEdit = (department) => {
    setSelectedDepartment(department);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (department) => {
    if (selectedDepartment) {
      setDepartments((prev) =>
        prev.map((item) =>
          item.id === selectedDepartment.id
            ? {
                ...selectedDepartment,

                ...department,
              }
            : item,
        ),
      );

      setSnackbar({
        open: true,

        message: "Department Updated Successfully",

        severity: "success",
      });
    } else {
      setDepartments((prev) => [
        {
          id: Date.now(),

          ...department,
        },

        ...prev,
      ]);

      setSnackbar({
        open: true,

        message: "Department Added Successfully",

        severity: "success",
      });
    }

    setOpen(false);

    setSelectedDepartment(null);
  };

  const handleDelete = (department) => {
    setDeleteDepartment(department);

    setDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    setDepartments((prev) =>
      prev.filter((item) => item.id !== deleteDepartment.id),
    );

    setDeleteOpen(false);

    setDeleteDepartment(null);

    setSnackbar({
      open: true,

      message: "Department Deleted Successfully",

      severity: "success",
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Department Management
      </Typography>

      <DepartmentToolbar
        search={search}
        handleSearch={handleSearch}
        handleAdd={handleAdd}
      />

      <DepartmentTable
        departments={filteredDepartments}
        page={page}
        rowsPerPage={rowsPerPage}
        handlePageChange={(e, page) => setPage(page)}
        handleRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));

          setPage(0);
        }}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      <DepartmentFormDialog
        open={open}
        handleClose={handleClose}
        onSave={handleSave}
        selectedDepartment={selectedDepartment}
      />

      <ConfirmDialog
        open={deleteOpen}
        title="Delete Department"
        message={`Are you sure you want to delete "${deleteDepartment?.departmentName}" ?`}
        onCancel={() => setDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
      />

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        handleClose={() =>
          setSnackbar((prev) => ({
            ...prev,
            open: false,
          }))
        }
      />
    </Paper>
  );
};

export default DepartmentList;
