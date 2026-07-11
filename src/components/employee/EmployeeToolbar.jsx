import {
    Box,
    Button,
    TextField,
} from "@mui/material";

const EmployeeToolbar = ({
    search,
    handleSearch,
    handleAdd,
}) => {

    return (

        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
        >

            <TextField
                label="Search Employee"
                size="small"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />

            <Button
                variant="contained"
                onClick={handleAdd}
            >
                Add Employee
            </Button>

        </Box>

    );

};

export default EmployeeToolbar;