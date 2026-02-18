"use client"

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import logo from '../public/favicon.svg'
import Image from 'next/image';
import Link from "next/link";

export default function MyAppBar() {
  return (
    <AppBar position="sticky">
      <Toolbar style={{ height: 60 }}>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Logo"
            />
            <Typography
              variant="h6"
              component="span"
              sx={{ ml: 2, color: 'white', fontWeight: 'bold' }}
            >
              OUI Lookup
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}