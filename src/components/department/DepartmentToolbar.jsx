import { Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const DepartmentToolbar = ({ search, handleSearch, handleAdd }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <TextField
        size="small"
        label="Search Department"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        sx={{ width: 300 }}
      />

      <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
        Add Department
      </Button>
    </Box>
  );
};

export default DepartmentToolbar;
