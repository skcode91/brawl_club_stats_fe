"use client";

import React from "react";
import { Container, Box } from "@mui/material";
import Header from "./_items/header/Header";

const BasicLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container
        sx={{
          mt: 12,
        }}
      >
        <Box mt={2}>{children}</Box>
      </Container>
    </>
  );
};

export default BasicLayout;
