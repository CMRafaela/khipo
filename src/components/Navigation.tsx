import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Button,
  Grid,
} from "@mui/material";

import GridViewIcon from "@mui/icons-material/GridView";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ConteudoLogado from "./ConteudoLogado";

const drawerWidth = 200;

interface NavigationProps {
  children?: string;
}

export default function Navigation(props: NavigationProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="estilo"
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#FFFFFF",
        }}
      >
        <Toolbar>
          <Grid item xs={6} width="100%" display="flex">
            <Typography pr={5} color="#000" fontWeight="bold">
              Logo
            </Typography>
            <Typography pr={5} color="#000">
              Inspiration
            </Typography>
            <Typography pr={5} color="#000">
              Find Work
            </Typography>
            <Typography pr={5} color="#000">
              Learn Design
            </Typography>
            <Typography pr={5} color="#000">
              Hide Designers
            </Typography>
          </Grid>

          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Typography color="#000" pr={3}>
              email@email.com
            </Typography>
            <Button
              sx={{
                minWidth: "100px",
                color: "#ffff",
                textTransform: "none",
                background: "#ea599c",
              }}
            >
              Sign Out
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#dee5ee",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Link 1", "Link 1", "Link 1", "Link 1", "Link 1"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <GridViewIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <ConteudoLogado />
      </Box>
    </Box>
  );
}
