"use client";
//import "./globals.css";
import { darkTheme } from "theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <body>
        <Main />
        <NextScript />
      </body>
      </ThemeProvider>
    </Html>
  )
}
