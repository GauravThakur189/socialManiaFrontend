import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "null",
  boxShadow: 24,
  p: 4,
  outline: "null",
  borderRadius: 4,
};

export default function SubscriptionModal({open,handleClose}) {

  const [plan, setPlan] = React.useState("Annually");
  const features = ["Prioritized ranking in conversations and search",
    "Access to advanced analytics and insights, Priority access to new features and updates",
    "Dedicated support and onboarding",
    "Customized onboarding and training",
    
  ];

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className=" flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className=" flex justify-center py-10">
            <div className=" w-[80%] space-y-10">
              <div className="p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg">
                <h1 className=" text-xl pr-5">
                  Blue subscribers with a verified phone number will get a blue
                  checkmark once approved
                </h1>
                <img
                  className="w-24 h-24"
                  src="https://static.vecteezy.com/system/resources/thumbnails/047/309/918/small_2x/verified-badge-profile-icon-png.png"
                  alt="verified"
                />
              </div>
              <div className=" flex justify-between border rounded-full px-5 py-3 border-gray-500">
                <div>
                  <span
                    onClick={() => setPlan("Annually")}
                    className={`${
                      plan === "annually" ? "text-black" : "text-gray-400"
                    } cursor-pointer`}
                  >
                    Annually
                  </span>
                  <span className=" text-green-500 text-sm ml-5">SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("Monthly")}
                  className={`${
                    plan === "monthly" ? "text-black" : "text-gray-400"
                  } cursor-pointer`}
                >
                  Monthly
                </p>
              </div>
              <div className=" space-y-3">
               {features.map((item)=> <div className=" flex items-center space-x-5">
                  <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                  <p className=" text-xs">
                    {item}
                  </p>
                </div>) }
              </div>
              <div className=" cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3">
                <span className=" line-through italic">₹7,800.00</span>
                <span className="px-5">₹6,800/year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
