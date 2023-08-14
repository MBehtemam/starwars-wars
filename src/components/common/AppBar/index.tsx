import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Drawer, List, ListItem, Stack, ListItemButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import swLogo1 from "../../../assets/logo/sw-logo-1.webp";
import swLogo2 from "../../../assets/logo/sw-logo-2.webp";

const pages = ["People", "Films", "Species"];
const StarWarsLogo = styled("img")({
  width: 200,
  height: "100%",
});
function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [isDrawerOpen, toggleDrawer] = useState(false);
  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <AppBar
        position="static"
        sx={{
          height: { xs: "64px", md: "150px" },
          backgroundColor: "secondary.main",
        }}
      >
        <Stack sx={{ flexDirection: { xs: "row", md: "column" } }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
                onClick={()=> toggleDrawer(prev => !prev)}
            >
              <MenuIcon sx={{ color: "common.white" }} />
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
              <Box sx={{ width: 250 }}>
                <List>
                  {pages.map((page) => (<ListItem key={page}>
                    <ListItemButton onClick={() => {
                        toggleDrawer(false)
                        navigate(`/${page}`)
                    }}>{page}</ListItemButton>
                  </ListItem>))}
                </List>
              </Box>
            </Drawer>
          </Box>
          <Link to="/">
            <Box
              sx={{
                height: 80,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                flexGrow: 1,
                justifyContent: "center",
                mt: 2,
              }}
            >
              <StarWarsLogo src={swLogo1} />
            </Box>
            <Box
              sx={{
                //   height: 80,
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                flexGrow: 1,
                justifyContent: "center",
                mt: 2,
              }}
            >
              <StarWarsLogo src={swLogo2} />
            </Box>
          </Link>
          <Toolbar
            sx={{ justifyContent: "center", flexGrow: 1, width: "100%" }}
          >
            <Box
              sx={{
                width: "25%",
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  variant="text"
                  sx={{ mr: 4 }}
                  onClick={() => navigate(`/${page.toLowerCase()}`)}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Stack>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
