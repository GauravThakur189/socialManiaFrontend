import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TweetCard from "../homeSection/TweetCard";

const Profile = () => {
    const [tabValue, setTabValue] = React.useState('1');

    const handleTabChange = (event, newValue) => {
      setTabValue(newValue);
      if (newValue==4) {
        console.log("likes tweet")
      }
      else if(newValue==1){
        console.log("users tweets");
        
      }
    };
  
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleOpenProfile = () => {
    console.log("open profile model");
  };
  const handleFollowUser = () => {
    console.log("follow user");
  };
  return (
    <div>
      <section className={` bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className=" cursor-pointer"
          onclick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Gaurav Singh</h1>
      </section>
      <section>
        <img
          className=" w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2023/09/14/16/17/paddle-boat-8253274_640.jpg"
          alt=""
        />
      </section>
      <section className=" pl-6">
        <div className=" flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className=" transform -translate-y-24"
            alt="gaurav singh"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true ? (
            <Button
              onclick={handleOpenProfile}
              className=" rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onclick={handleFollowUser}
              className=" rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follw" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className=" flex items-center">
            <h1 className=" font-bold text-lg">Gaurav Singh</h1>
            {true && (
              <img
                className="h-5 w-5 ml-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3yHNnmtMJmvbHeGrOVw_hq-tWodT6w4wNw&s"
                alt="verifiedImage"
              />
            )}
          </div>
          <h1 className=" text-gray-500">@gaurav</h1>

          <div className=" mt-2 space-y-3">
            <p>
              {" "}
              hello i am making this project with spring boot and react js which
              is a complete full stack project
            </p>
            <div className=" py-1 flex space-x-5"> 
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className=" ml-2">Education</p>
            </div>
            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className=" ml-2">India</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className=" ml-2">Joined Jun 2024</p>
            </div>
          </div>
          <div className=" flex items-center space-x-5">
          <div className=" flex items-center space-x-1 font-semibold">
          <span>5234</span>
          <span className=" text-gray-500">Followers</span>
          </div>
          <div className=" flex items-center space-x-1 font-semibold">
          <span>234</span>
          <span className=" text-gray-500">Following</span>
          </div>
</div>
          </div>
        </div>
      </section>

      <section className=" py-5">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
       
        <TabPanel value="1">{[1,1,1,1].map(()=><TweetCard/>)}</TabPanel>
        <TabPanel value="2">users replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
    
      </section>
    </div>
  );
};

export default Profile;
