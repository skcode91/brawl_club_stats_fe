import React, { useState } from "react";
import { Collapse, Paper, Box, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type CollapsedComponentProps = {
  title: string;
  children: React.ReactNode;
};

const CollapsedComponent = (props: CollapsedComponentProps) => {
  const { title, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <Paper elevation={3} sx={{ mb: 2 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={2}
        py={1.5}
        sx={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        <Typography variant="subtitle1">{title}</Typography>
        <IconButton size="small">
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box px={2} pb={2}>
          {children}
        </Box>
      </Collapse>
    </Paper>
  );
};

export default CollapsedComponent;
