import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";

const Navigation = () => {
  const {auth} = useSelector(store=>store)
  const navigate = useNavigate();

  // const [anchorEl, setAnchorEl] =
  //   (React.useState < null) | (HTMLElement > null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = ()=>{
    console.log("logout")
    handleClose();
    console.log("logout")
  }

  return (
    <div className=" h-screen sticky top-0">
      <div>
        <div className=" py-5">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className=" h-8 w-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        <div className=" space-y-6">
          {navigationMenu.map((item) => (
            <div
              className=" cursor-pointer flex space-x-3 items-center"
              onClick={() =>
  item.title === "Profile"
    ? navigate(`/profile/${5}`)
    : navigate(item.path)
}
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        <div className=" py-10">
          <Button
            sx={{
              width: "100%Button",
              borderRadius: "29px",
              py: "10px",
              px: "28px",
              bgcolor: "#1288e5",
            }}
            variant="contained"
          >
            {" "}
            Tweet
          </Button>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className=" flex items-center space-x-3">
          <Avatar
            alt="username"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
          />
          <div>
            <span>{auth.user?.fullName}</span>
            <span className="opacity-70">@gaurav</span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
           
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
