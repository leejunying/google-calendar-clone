import React,{useState,useEffect} from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Link as LInk, useNavigate } from "react-router-dom";
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  LoginPage,
  Container,
  Title,
  InputText,
  Boxform,
  BoxFooter,
} from "./styled";
import {
  Button,
  TextField,
  Checkbox,
  Grid,
  Link,
  Box,
  Paper,
} from "@mui/material";
import { toast } from "react-toastify";
 
interface IFormInput {
  username: string;
  password: string;
   
}

interface ILogin{
  changeIsLogIn:(data:any)=>void
  setUserData:(data:any)=>void
}

const Login = ({  changeIsLogIn,setUserData }: ILogin) => {
  const navigate = useNavigate();

  const [resError,setResError]=useState<string>("")
  


  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Vui lòng nhập tên đăng nhập")
      .min(6, "Tên đăng nhập có từ 6-20 kí tự!")
      .max(16, "Tên đăng nhập có từ 6-20 kí tự!"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu có từ 6-20 kí tự!")
      .max(20, "Mật khẩu có từ 6-20 kí tự!"),
  });
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  }= useForm<IFormInput>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSubmission:SubmitHandler<IFormInput> = async   (data: any) => {
    changeIsLogIn(true)
    setUserData({
      username:"vinh",
      id:"1",
      eventid:["1","2"],
    })
  };

  
  return (
    <LoginPage>
      <Container>
        <Title>Clone google calender</Title>
        <Boxform  component="form"  onSubmit={handleSubmit(handleSubmission)}>
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                label="Tên đăng nhập"
                margin="dense"
                required
                error={!!errors.username}
                helperText={errors.username && `${errors.username.message}`}
              />
            )}
          />
          
          <Controller
            control={control}
            name="password"
          
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                label="Mật khẩu"
                margin="dense"
                required
                type="password"
                error={!!errors.password}
                helperText={errors.password && `${errors.password.message}`}
              />
            )}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Nhớ mật khẩu"
          />
          <Button 
             type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Đăng nhập
          </Button>
 
          <Grid container>
            <Grid item xs>
              {/* nhét link quên mật khẩu */}
              <Link href="#" variant="body2">
                Quên mật khẩu?
              </Link>
            </Grid>
          </Grid>
        </Boxform>

        <p>Type anything to login if not errors</p>

        <BoxFooter>
          <LInk to="/register">Tạo tài khoản mới</LInk>
        </BoxFooter>
      </Container>
    </LoginPage>
  );
};

export default Login;
