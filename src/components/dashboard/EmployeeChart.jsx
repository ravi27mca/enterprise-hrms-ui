import {
    Paper,
    Typography,
} from "@mui/material";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

const EmployeeChart = ({ data }) => {

    return (

        <Paper sx={{ p: 3 }}>

            <Typography
                variant="h6"
                gutterBottom
            >
                Employee Statistics
            </Typography>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="department" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="count"
                        fill="#1976d2"
                    />

                </BarChart>

            </ResponsiveContainer>

        </Paper>

    );

};

export default EmployeeChart;