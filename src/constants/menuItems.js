import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PaymentsIcon from "@mui/icons-material/Payments";
import AssessmentIcon from "@mui/icons-material/Assessment";

const menuItems = [
    {
        text: "Dashboard",
        path: "/dashboard",
        icon: DashboardIcon,
    },
    {
        text: "Employees",
        path: "/employees",
        icon: PeopleIcon,
    },
    {
        text: "Departments",
        path: "/departments",
        icon: BusinessIcon,
    },
    {
        text: "Attendance",
        path: "/attendance",
        icon: CalendarMonthIcon,
    },
    {
        text: "Leave",
        path: "/leave",
        icon: EventNoteIcon,
    },
    {
        text: "Payroll",
        path: "/payroll",
        icon: PaymentsIcon,
    },
    {
        text: "Reports",
        path: "/reports",
        icon: AssessmentIcon,
    },
];

export default menuItems;