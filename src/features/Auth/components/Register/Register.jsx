import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm/RegisterForm";
import PropTypes from "prop-types";

const Register = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    console.log("Form submit:", values);
    const { closeDialog } = props;

    try {
      //auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      if (closeDialog) {
        closeDialog();
      }

      console.log("New user", user);
      enqueueSnackbar("Register successfully !!", { variant: "success" });
    } catch (error) {
      console.log("Failed to register:", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

Register.propTypes = {
  closeDialog: PropTypes.func,
};

export default Register;
