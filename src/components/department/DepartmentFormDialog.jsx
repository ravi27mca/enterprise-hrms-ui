import { useEffect } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import departmentSchema from "../../validation/departmentSchema";

const DepartmentFormDialog = ({
  open,
  handleClose,
  onSave,
  selectedDepartment,
}) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(departmentSchema),

    defaultValues: {
      departmentName: "",
      manager: "",
      location: "",
      employeeCount: "",
      status: true,
    },
  });

  const departmentName = watch("departmentName");

  useEffect(() => {
    if (selectedDepartment) {
      reset(selectedDepartment);
    } else {
      reset({
        departmentName: "",
        manager: "",
        location: "",
        employeeCount: "",
        status: true,
      });
    }
  }, [selectedDepartment, reset]);

  const handleCancel = () => {
    reset();

    handleClose();
  };

  const onSubmit = (data) => {
    onSave(data);

    reset();

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleCancel} fullWidth maxWidth="sm">
      <DialogTitle>
        {selectedDepartment ? "Edit Department" : "Add Department"}
      </DialogTitle>

      <DialogContent>
        <Typography variant="subtitle1" color="primary" sx={{ mb: 2 }}>
          Department : {departmentName || "Not Entered"}
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Department Name"
              {...register("departmentName")}
              error={!!errors.departmentName}
              helperText={errors.departmentName?.message}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Manager"
              {...register("manager")}
              error={!!errors.manager}
              helperText={errors.manager?.message}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Location"
              {...register("location")}
              error={!!errors.location}
              helperText={errors.location?.message}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              type="number"
              label="Employee Count"
              {...register("employeeCount")}
              error={!!errors.employeeCount}
              helperText={errors.employeeCount?.message}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  label="Active"
                  control={
                    <Switch
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              variant="outlined"
              onClick={() => setValue("manager", "Ravi Kumar")}
            >
              Auto Fill Manager
            </Button>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>

        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DepartmentFormDialog;
