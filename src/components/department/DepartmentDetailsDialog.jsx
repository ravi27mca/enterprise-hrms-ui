import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Chip,
  Typography,
} from "@mui/material";

const DepartmentDetailsDialog = ({ open, department, handleClose }) => {
  if (!department) return null;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Department Details</DialogTitle>

      <DialogContent>
        <Grid container spacing={2} mt={1}>
          <Grid size={{ xs: 12 }}>
            <Typography>
              <strong>Department :</strong> {department.departmentName}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography>
              <strong>Manager :</strong> {department.manager}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography>
              <strong>Location :</strong> {department.location}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography>
              <strong>Employees :</strong> {department.employeeCount}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography component="div">
              <strong>Status :</strong>{" "}
              <Chip
                label={department.status ? "Active" : "Inactive"}
                color={department.status ? "success" : "error"}
              />
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DepartmentDetailsDialog;
