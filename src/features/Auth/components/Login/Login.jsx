import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm/LoginForm";
import PropTypes from "prop-types";

const Login = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {

    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar('Login successfully', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

Login.propTypes = {
  closeDialog: PropTypes.func,
};

export default Login;
