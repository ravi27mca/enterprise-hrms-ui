import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

const MainLayout = () => {

    return (

        <Box sx={{ display: "flex" }}>

            <Header />

            <Sidebar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    ml: `${drawerWidth}px`,
                }}
            >

                <Toolbar />

                <Outlet />

            </Box>

        </Box>

    );

};

export default MainLayout;