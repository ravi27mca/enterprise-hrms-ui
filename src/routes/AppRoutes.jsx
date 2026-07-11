import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import EmployeeList from "../pages/employee/EmployeeList";
import DepartmentList from "../pages/department/DepartmentList";
import AttendanceList from "../pages/attendance/AttendanceList";
import LeaveList from "../pages/leave/LeaveList";
import PayrollList from "../pages/payroll/PayrollList";
import Reports from "../pages/reports/Reports";

const AppRoutes = () => {

    return (

        <Routes>

            <Route path="/" element={<MainLayout />}>

                <Route index element={<Navigate to="/dashboard" replace />} />

                <Route path="dashboard" element={<Dashboard />} />

                <Route path="employees" element={<EmployeeList />} />

                <Route path="departments" element={<DepartmentList />} />

                <Route path="attendance" element={<AttendanceList />} />

                <Route path="leave" element={<LeaveList />} />

                <Route path="payroll" element={<PayrollList />} />

                <Route path="reports" element={<Reports />} />

            </Route>

        </Routes>

    );

};

export default AppRoutes;