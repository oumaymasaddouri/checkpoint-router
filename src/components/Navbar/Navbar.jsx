import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FilterText from "./FilterText";
import FilterRate from "./FilterRate";

export default function Navbar({ setText, setRate, rate }) {
  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Movies
            </Typography>
            <FilterText setText={setText} />
            <FilterRate setRate={setRate} rate={rate} />
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
}
