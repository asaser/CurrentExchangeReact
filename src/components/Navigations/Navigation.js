import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logoNavBar from "../../images/logoNavbar.png";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              textDecoration: "none",
            }}
          >
            <img
              src={logoNavBar}
              alt="Logo"
              style={{ width: "30px", height: "30px" }}
            />
            <span>Money</span>
          </Typography>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              textDecoration: "none",
            }}
          >
            <img
              src={logoNavBar}
              alt="Logo"
              style={{ width: "30px", height: "30px" }}
            />
            <span
              style={{
                textAlign: "center",
              }}
            >
              Money
            </span>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
