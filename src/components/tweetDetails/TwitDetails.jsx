import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import TweetCard from "../homeSection/TweetCard";
import { Divider } from "@mui/material";

const TwitDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <section className={` bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className=" cursor-pointer"
          onclick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Tweets</h1>
      </section>
      <section >
 <TweetCard/>
 <Divider sx={{margin:"2rem 0rem"}}/>
      </section>
      <section>
       { [1,1,1,1,1].map(()=><TweetCard/>)}
      </section>
    </>
  );
};

export default TwitDetails;
