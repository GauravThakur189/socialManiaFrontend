import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, outlinedInputClasses } from '@mui/material';
import { useFormAction, useNavigate } from 'react-router-dom';
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'null',
  boxShadow: 24,
  p: 4,
  outline:"null",
  borderRadius: 4,
};

export default function ReplyModel({handleClose,open}) {
    const navigate = useNavigate();
  
  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [image, setImage] = React.useState(null);

    
  const handleSubmit = (values)=>{
    console.log("form submitted ",values);
  }

  const formik  = useFormik({
    initialValues:{
        content:"",
        image:"",
        twitId:4
    },
    onSubmit:handleSubmit
  })
  const handleSelect = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      
      <Modal
        open={open}
        onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            
          </div>

          <div className=" mt-2">
            <div onClick={()=> navigate(`/twit/${3}`)} className=" cursor-pointer">
              <p className=" mb-2 p-0">nice content full stact project</p>
             
            </div>
           
          </div>
        </div>
       
      </div>
      <section className={`py-10`}>
        <div className=" flex space-x-5">
          <Avatar
            alt="username"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
          />
          <div className=" w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="what is happening"
                  className={` border-none outline-none text-xl bg-transparent`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className=" text-red-500">{formik.errors.content}</span>
                )}
              </div>
              {/* <div>
                <img src='' alt=''/>
            </div> */}
              <div className=" flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center"></div>
                <label className=" flex items-center space-x-2 rounded-md cursor-pointer">
                <ImageIcon className=" text-[#1d9bf0]" />
                <input 
                  type="file"
                  name="imageFile"
                  className="hidden"
                  onChange={handleSelect}
                />
                </label>
                <FmdGoodIcon className=" text-[#1d9bf0]"/>
                <TagFacesIcon className=" text-[#1d9bf0]"/>
              </div>
              <div>
                <Button sx={{
              width: "100%Button",
              borderRadius: "29px",
              paddingY: "8px",
              px: "28px",
              bgcolor: "#1288e5",
            }}
            variant="contained"
            type="submit"
            >Tweet</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
        </Box>
      </Modal>
    </div>
  );
}