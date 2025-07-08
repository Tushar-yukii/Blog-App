import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getVlaue } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: slug?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  return <div>postform</div>;
};

export default PostForm;
