import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { FormattedMessage } from "react-intl";


const MuiAlert = ({message, severity}) => {

   const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert variant="filled" severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
           <FormattedMessage id="app.mensajeError" />
        </Alert>
      </Collapse>
      {/* <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button> */}
    </Box>
  );

  // return (
  //   <div>
  //   <Alert  variant="filled" severity="error" onClose={() => {}}>{errorMessage}</Alert>
  //     {/* <Alert variant="filled" severity="error"  >
  //       {errorMessage}
  //     </Alert> */}
  //     ;
  //   </div>
  // );
};

export default MuiAlert;
