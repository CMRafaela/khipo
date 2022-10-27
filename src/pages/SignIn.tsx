/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import {
  Grid,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";

interface SignInProps {
  children?: string;
}

export function SignIn(props: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    window.location.href = "/registro";
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
        Sign In
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
        <Typography pb={1} fontSize={16} fontWeight="600">
          Email address
        </Typography>
        <TextField value="email" fullWidth size="small" />

        <Typography pb={1} pt={2} fontSize={16} fontWeight="600">
          Password
        </Typography>
        <TextField value="password" fullWidth size="small" />

        <Grid
          pb={3}
          pt={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
            sx={{ fontSize: "16px", fontWeight: "semi-bold" }}
          />
          <Link sx={{ textDecoration: "none" }}>Forgot password?</Link>
        </Grid>

        <Button fullWidth variant="contained" sx={{ textTransform: "none" }}>
          Sign in
        </Button>
      </Grid>
    </Grid>
  );
}
