import React from "react";
import Box from "@material-ui/core/Box";
import logo from "../../asset/images/logo.png";

const Logo = () => {
   return (
      <Box display="flex" justifyContent="center">
         <img
            src={logo}
            alt="Logo"
            style={{ width: "200px", marginBottom: "10px" }}
         />
         <Box></Box>
      </Box>
   );
};

export default Logo;