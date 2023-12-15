import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Register from "./Register";

const Login = () => {
  const theme = useTheme();
  const isNonmobile = useMediaQuery("(min-width: 1000px)");

  // Configure Theme Colors in theme.js file perhpas

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="34px" color="primary">
          CodeCollabra
        </Typography>
      </Box>
      {/* Form to Login */}
      <Box
        width={isNonmobile ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to CodeCollabra, the platform to solve all your bugs!!
        </Typography>
        <Register />
      </Box>
    </Box>
  );
};

export default Login;
