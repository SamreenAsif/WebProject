import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import MenuButtom from "../../share/UIElements/MenuButton/MenuButtom";
import CartTooltip from "./CartTooltip/CartTooltip";
import Categories from "./Categories/Categories";
import SearchBar from "./SearchBar/SearchBar";
import "../Btn.css";

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const goToMyCart = () => {
    navigate("./yourcart");
  };

  const RightTooltipWithStyle = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      // minWidth: 250,
      color: theme.palette.grey[900],
      borderRadius: 0,
      padding: 0,
    },
  }));
  const LeftTooltipWithStyle = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      minWidth: 830,
      color: theme.palette.grey[900],
      borderRadius: 0,
      padding: 0,
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#27599b",

          height: "7.2rem",
          px: "2.4rem",
          boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
        }}
      >
        <Toolbar disableGutters sx={{ my: "auto", gap: 1 }}>
          <Box>
            <img
              src="/images/header/logo-udemy.svg"
              alt="Udemy"
              width="91"
              height="34"
            />
          </Box>
          <MenuButtom>
            <LeftTooltipWithStyle
              title={<Categories />}
              placement="bottom-start"
            >
              <span style={{ color: "white" }}>Categories</span>
            </LeftTooltipWithStyle>
          </MenuButtom>

          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>

          <MenuButtom>
            <span style={{ color: "white" }}>Enrolled Courses</span>
          </MenuButtom>

          <MenuButtom>
            <RightTooltipWithStyle
              title={<CartTooltip />}
              placement="bottom-end"
            >
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: 28, color: "white" }}
                onClick={() => goToMyCart()}
              />
            </RightTooltipWithStyle>
          </MenuButtom>
          {loggedIn ? ( // render Profile button if logged in
            <div
              className="LinkButton"
              style={{
                "--height": "4rem",
                "--width": "8rem",
                "--font-size": "1.4rem",
              }}
            >
              Account
            </div>
          ) : (
            // render Log in and Sign up buttons if not logged in
            <>
              <div
                className="LinkButton"
                style={{
                  "--height": "4rem",
                  "--width": "8rem",
                  "--font-size": "1.4rem",
                }}
              >
                Log in
              </div>
              <div
                className="LinkButton"
                style={{
                  "--height": "4rem",
                  "--width": "8rem",
                  "--font-size": "1.4rem",
                }}
              >
                Sign up
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navigation;
