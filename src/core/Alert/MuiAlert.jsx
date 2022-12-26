import React from "react";
import { Alert } from "@mui/material";

const MuiAlert = ({errorMessage}) => {
  return (
    <div>
    <Alert  variant="filled" severity="error" onClose={() => {}}>{errorMessage}</Alert>
      {/* <Alert variant="filled" severity="error"  >
        {errorMessage}
      </Alert> */}
      ;
    </div>
  );
};

export default MuiAlert;
