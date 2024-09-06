import React from "react";
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplyModel from "./ReplyModel";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openReplyModel, setOpenReplyModel] = React.useState(false);
  const handleOpenReplyModel = () => setOpenReplyModel(true);
  const handleCloseReplyModel = () => setOpenReplyModel(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    console.log("delete tweet");
    handleClose();
  };
  // const handleOpenReplyModel = () => {
  //   console.log("open reply model");
  // };

  const handleCreateRetweet = () => {
    console.log("create retweet");
  };
  const handleLiketweet = () => {
    console.log("handle like tweets");
  };
  return (
    <React.Fragment className=" ">
      {/* <div className=' flex items-center  font-semibold text-gray-700 py-2'>
       <RepeatOnIcon/>
       <p> You Retweet</p>
       </div> */}
      <div className=" flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          alt="username"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
          className=" cursor-pointer"
        />
        <div className=" w-full">
          <div className="flex justify-between items-center">
            <div className=" flex cursor-pointer items-center space-x-2">
              <span className=" font-semibold">Gaurav Singh</span>
              <span className=" text-gray-600">@gaurav . 2m</span>
              <img
                className="h-5 w-5 ml-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3yHNnmtMJmvbHeGrOVw_hq-tWodT6w4wNw&s"
                alt="verifiedImage"
              />
            </div>
            <div>
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
                onClick={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                <MenuItem onClick={handleDelete}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className=" mt-2">
            <div onClick={()=> navigate(`/twit/${3}`)} className=" cursor-pointer">
              <p className=" mb-2 p-0">nice content full stact project</p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://www.devopsschool.com/blog/wp-content/uploads/2023/12/image-168.png"
                alt=""
              />
            </div>
            <div className=" py-5 flex flex-wrap justify-between items-center">
              <div className=" space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className=" cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>34</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex`}
              >
                <RepeatOnIcon
                  className=" cursor-pointer"
                  onClick={handleCreateRetweet}
                ></RepeatOnIcon>
                <p>23</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex`}
              >
                {true ? (
                  <FavoriteIcon
                    className=" cursor-pointer"
                    onClick={handleLiketweet}
                  ></FavoriteIcon>
                ) : (
                  <FavoriteBorderIcon
                    className=" cursor-pointer"
                    onClick={handleLiketweet}
                  />
                )}
                <p>23</p>
              </div>
              <div className=" space-x-3 flex items-center text-gray-600">
                <BarChartIcon
                  className=" cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>3487</p>
              </div>
              <div className=" space-x-3 flex items-center text-gray-600">
                <FileUploadIcon
                  className=" cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModel open={openReplyModel} handleClose={handleCloseReplyModel}/>
      </section>
    </React.Fragment>
  );
};

export default TweetCard;
