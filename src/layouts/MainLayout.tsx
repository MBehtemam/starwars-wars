import { Container } from "@mui/material";
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from "../components/common/AppBar";

function MainLayout() {
  return (
    <>
      <ResponsiveAppBar />
      <Container  maxWidth={false}>
      <Outlet />
      </Container>
    </>
  );
}

export default MainLayout;
