import React, { useState } from "react";

import {
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

interface RegistroProps {
  password: string;
  showPassword: boolean;
}

export function Registro(props: RegistroProps) {
  //   const [firstName, setFirstName] = useState();
  //   const [lastName, setLastName] = useState();
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof RegistroProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  function handleClick() {
    window.location.href = "/";
  }

  return (
    <Grid
      container
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography fontSize={32} fontWeight="bold" pb="34px">
        Sign Up
      </Typography>
      <Grid
        width={426}
        border="1px solid #DEE5EE"
        borderRadius="10px"
        bgcolor="#FFFFFF"
        textAlign="start"
        py={7}
        px={5}
      >
        <Grid display="flex" pb={2}>
          <Grid display="flex" flexDirection="column" mr={1}>
            <Typography pb={1} fontSize={16} fontWeight="600">
              First Name <b style={{ color: "red" }}>*</b>
            </Typography>
            <TextField value="firstName" fullWidth size="small" />
          </Grid>

          <Grid display="flex" flexDirection="column">
            <Typography pb={1} fontSize={16} fontWeight="600">
              Last Name <b style={{ color: "red" }}>*</b>
            </Typography>
            <TextField value="lastName" fullWidth size="small" />
          </Grid>
        </Grid>

        <Typography pb={1} fontSize={16} fontWeight="600">
          Email address
        </Typography>
        <TextField value="email" fullWidth size="small" />

        <Typography pb={1} pt={2} fontSize={16} fontWeight="600">
          Password
        </Typography>
        <OutlinedInput
          sx={{ marginBottom: "24px" }}
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          fullWidth
          size="small"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />

        <Button fullWidth variant="contained" sx={{ textTransform: "none" }}>
          Sign in
        </Button>

        <Grid pt={3} display="flex" justifyContent="center" alignItems="center">
          <Typography pr={0.5}>Already a user? </Typography>
          <Link
            sx={{ textDecoration: "none", cursor: "pointer" }}
            onClick={handleClick}
          >
            Login
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
