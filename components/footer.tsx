import { Box, Link, Typography } from "@mui/material";

export default function Footer({ style }: { style?: React.CSSProperties }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        ...style
      }}
    >
      <Typography
        variant="overline"
        component="div"
        sx={{ textAlign: 'center' }}
      >
        © 2024.{' '}
        <Link
          href="https://github.com/N3t7a1k/OUILookup"
          underline="none"
          sx={{ color: 'inherit', textDecoration: 'none' }}
        >
          N3t7a1k
        </Link>
        . All rights reserved.
      </Typography>
    </Box>
  );
}
