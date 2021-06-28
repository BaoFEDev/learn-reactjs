import { Box, FormHelperText, makeStyles, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {

  },
  box: {
    display: 'flex',
    flexGrow: 'row nowrap',
    alignItems: 'center',
    maxWidth: '200px'
  },
}));

const QuantityField = (props) => {
  const { name, disabled, form, label } = props;
  const { formState: { errors }, register, setValue } = form;
  const hasError = errors[name];
  const classes = useStyles();

  return (
    <>
      <FormControl fullWidth error={hasError} margin="normal" variant="outlined" size="small"
      >
        <Typography>{label}</Typography>
        <Controller
          control={form.control}
          name={name}
          disabled={disabled}
          render={({
            field: { onChange, onBlur, value, name, ref }
          }) => (
            <Box className={classes.box}>
              <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                <RemoveCircleOutline />
              </IconButton>
              <OutlinedInput
                id={name}
                type="number"
                {...register(name)}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
                ref={ref}
              />
              <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                <AddCircleOutline />
              </IconButton>
            </Box>
          )}
        />

        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </>
  );
};

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default QuantityField;
