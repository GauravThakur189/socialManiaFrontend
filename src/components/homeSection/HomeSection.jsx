import { Avatar, Button } from "@mui/material";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from "./TweetCard";

const HomeSection = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [image, setImage] = useState(null);

  const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form submitted" + values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  const handleSelct = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div className=" space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section>
      <section className={`pb-10`}>
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
                  onChange={handleSelct}
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
      <section>
      {[1,1,1,1,1,1].map(()=><TweetCard/>)  }
      </section>
    </div>
  );
};

export default HomeSection;
