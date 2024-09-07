import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SubscriptionModal from "../subscriptionModal/SubscriptionModel";

const RightPart = () => {
    const [openSubscriptionModel, setOpenSubscriptionModel] = React.useState(false);
   const handleOpenSubscriptionModel = () => setOpenSubscriptionModel(true);
   const handleCloseSubscriptionModel = () => setOpenSubscriptionModel(false);
  const handleChangeTheme = () => {
    document.body.classList.toggle("dark-mode");
    console.log("handle change theme");
  };

  return (
    <div className=" py-5 sticky top-0">
      <div className=" relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-fullpi-12"
        />
        <div className=" absolute top-0 left-0 pl-3">
          <SearchIcon className=" text-gray-500 br" />
        </div>
        <Brightness4Icon
          className=" ml-3 cursor-pointer"
          onclick={handleChangeTheme}
        />
      </div>
      <section className=" my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className=" font-bold my-2">Subscribe to unlock new Features</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        
          onClick={handleOpenSubscriptionModel}
        >
          Get Verified
        </Button>
      </section>
      <section className=" mt-7 space-y-5">
        <h1 className=" font-bold text-xl py-1">What's happening</h1>
        <div>
          <p className=" text-sm"> Paris Olampyc</p>
          <p className=" font-bold">Neeraj chopra</p>
        </div>
      { [1,1,1].map(()=> <div className=" flex justify-between w-full">
          <div>
            <p>Sports . Trending</p>
            <p className="font-bold">#theMarvels</p>
            <p>34k Tweets</p>
          </div>
          <MoreHorizIcon />
        </div>) }
      </section>
      <section>
        <SubscriptionModal open={openSubscriptionModel} handleClose={handleCloseSubscriptionModel}/>
      </section>
    </div>
  );
};

export default RightPart;
