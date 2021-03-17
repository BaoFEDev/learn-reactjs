import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

const InputField = (props) => {
  const { name, disabled, form, label } = props;
  const { errors } = form;
  const hasError = errors[name];
  return (
    <>
      <Controller
        name={name}
        control={form.control}
        as={TextField}
        margin="normal"
        variant="outlined"
        label={label}
        disabled={disabled}
        error={!!hasError}
        helperText={errors[name]?.message}
        fullWidth
      />
    </>
  );
};

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
