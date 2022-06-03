import React from "react";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "app/login/context/authContext";

type Form = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const { control, handleSubmit } = useForm<Form>();
  const { loginUser, getAuthError } = useAuth();

  const authError = getAuthError();
  const onSubmit: SubmitHandler<Form> = async (data) => {
    await loginUser(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, mt: "12vh" }}
    >
      <Typography variant="h1">Login</Typography>
      <Box>
        <Typography sx={{ py: 1 }} variant="body2">
          Username
        </Typography>
        <Controller
          name="username"
          control={control}
          rules={{ required: "Field is required" }}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              placeholder="Enter username"
              error={fieldState.error ? true : false}
              helperText={fieldState.error?.message ?? " "}
              {...field}
            />
          )}
        />
      </Box>
      <Box>
        <Typography sx={{ py: 1 }} variant="body2">
          Password
        </Typography>
        <Controller
          name="password"
          control={control}
          rules={{ required: "Field is required" }}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              placeholder="Enter password"
              type="password"
              error={fieldState.error ? true : false}
              helperText={fieldState.error?.message ?? " "}
              {...field}
            />
          )}
        />
      </Box>
      <Button
        type="submit"
        sx={{ mt: 6, mb: 1 }}
        variant="contained"
        size="large"
        fullWidth
      >
        Log in
      </Button>
      <Typography variant="caption" sx={{ textDecorationLine: "underline" }}>
        Forgot password?
      </Typography>
      {!!authError && (
        <Alert severity="error" sx={{ width: "100%" }}>
          {authError}
        </Alert>
      )}
    </Box>
  );
};

export default LoginForm;
