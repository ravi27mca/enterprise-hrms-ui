import { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventNoteIcon from "@mui/icons-material/EventNote";

import SummaryCard from "../../components/dashboard/SummaryCard";
import EmployeeChart from "../../components/dashboard/EmployeeChart";
import RecentEmployees from "../../components/dashboard/RecentEmployees";

import dashboardService from "../../services/dashboardService";

const Dashboard = () => {

    const [users, setUsers] = useState([]);

    const [totalUsers, setTotalUsers] = useState(0);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadUsers();

    }, []);

    const loadUsers = async () => {

        try {

            const response = await dashboardService.getUsers();

            console.log(response.data);

            setUsers(response.data.users);

            setTotalUsers(response.data.total);

        } catch (error) {

            console.error("Error Loading Users :", error);

        } finally {

            setLoading(false);

        }

    };

    const chartData = [

        {
            department: "IT",
            count: 40,
        },

        {
            department: "HR",
            count: 20,
        },

        {
            department: "Finance",
            count: 15,
        },

        {
            department: "Sales",
            count: 30,
        },

        {
            department: "Admin",
            count: 10,
        },

    ];

    return (

        <>

            <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
            >
                Dashboard
            </Typography>

            {/* Summary Cards */}

            <Grid container spacing={3}>

                <Grid size={{ xs: 12, sm: 6, md: 3 }}>

                    <SummaryCard
                        title="Total Employees"
                        value={loading ? "Loading..." : totalUsers}
                        icon={<PeopleIcon fontSize="large" />}
                        color="#1976d2"
                    />

                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 3 }}>

                    <SummaryCard
                        title="Departments"
                        value="8"
                        icon={<BusinessIcon fontSize="large" />}
                        color="#2e7d32"
                    />

                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 3 }}>

                    <SummaryCard
                        title="Attendance"
                        value="95%"
                        icon={<CalendarMonthIcon fontSize="large" />}
                        color="#ed6c02"
                    />

                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 3 }}>

                    <SummaryCard
                        title="Pending Leaves"
                        value="12"
                        icon={<EventNoteIcon fontSize="large" />}
                        color="#9c27b0"
                    />

                </Grid>

            </Grid>

            {/* Employee Statistics Chart */}

            <Grid
                container
                spacing={3}
                sx={{ mt: 2 }}
            >

                <Grid size={{ xs: 12 }}>

                    <EmployeeChart
                        data={chartData}
                    />

                </Grid>

            </Grid>
            <Grid
                container
                spacing={3}
                sx={{ mt: 2 }}
            >

                <Grid size={{ xs: 12 }}>

                    <RecentEmployees
                        users={users}
                    />

                </Grid>

            </Grid>

        </>

    );

};

export default Dashboard;