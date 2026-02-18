'use client';

import { MyAppBar, Footer, SearchBar } from "@/components";
import { Container, Box, Typography, useMediaQuery } from "@mui/material";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <title>OUI Lookup</title>
      <MyAppBar />
      <main
        className="flex flex-col items-center justify-center"
        style={{ minHeight: 'calc(100svh - 100px)' }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              OUI Lookup
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Search MAC Address or Manufacturer Information
            </Typography>
          </Box>

          <SearchBar initialQuery="" />
        </Container>
      </main>
      <Footer />
    </>
  );
}