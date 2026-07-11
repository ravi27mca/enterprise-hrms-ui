import { Card, CardContent, Typography, Box } from "@mui/material";

const SummaryCard = ({
    title,
    value,
    icon,
    color = "#1976d2",
}) => {

    return (

        <Card
            sx={{
                borderRadius: 3,
                boxShadow: 3,
            }}
        >

            <CardContent>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Box>

                        <Typography
                            color="text.secondary"
                            variant="body2"
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                        >
                            {value}
                        </Typography>

                    </Box>

                    <Box
                        sx={{
                            backgroundColor: color,
                            color: "#fff",
                            borderRadius: "50%",
                            width: 55,
                            height: 55,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >

                        {icon}

                    </Box>

                </Box>

            </CardContent>

        </Card>

    );

};

export default SummaryCard;