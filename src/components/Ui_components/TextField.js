import React, { useEffect, useMemo, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { themeShadows } from "../../theme/shadows";
import { opacityColors } from "../../theme/opacityColors";
import {
  IconButton,
  InputAdornment,
  styled,
  TextField as MUITextField,
  useTheme,
} from "@mui/material";

const CustomTextField = styled(MUITextField)((props) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: `1px solid ${opacityColors().borderColor}`,
      borderRadius: "34px !important",
      "& legend": {
        width: props.label ? "auto" : "unset",
      },
      "&:hover": {
        border: `1px solid ${opacityColors().borderColor}`,
      },
    },
  },
  "& .MuiInput-underline:before": {
    borderWidth: 0,
    borderBottom: "none",
  },
}));

const TextField = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const type = useMemo(() => {
    if (props.type === "password") {
      if (showPassword) {
        return "text";
      } else {
        return "password";
      }
    } else {
      return props.type;
    }
  }, [props.type, showPassword]);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    props.type === "password" && setShowPassword(false);
  }, [props.type]);
  return (
    <CustomTextField
      {...props}
      variant={props.fieldVarient ? props.fieldVarient : "outlined"}
      type={type}
      autoComplete={props.type === "password" ? "password" : undefined}
      inputProps={{
        startAdornment: props.startIcon,
        endAdornment:
          props.type === "password" ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : (
            props.endIcon || null
          ),
        ...props.inputProps,
      }}
    />
  );
};

export default TextField;
