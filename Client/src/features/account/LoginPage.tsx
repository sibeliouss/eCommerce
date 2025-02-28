import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Container, Paper, TextField, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";

import { LoadingButton } from "@mui/lab";

import { loginUser } from "./accountSlice";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../store/store";
import { getCart } from "../cart/CartSlice";


export default function LoginPage() {

    // const [username, SetUserName]= useState("");
    // const [password, SetPassword]= useState("");

   /*  const [values, setValues] = useState({
        username: "",
        password:""
    });
    function handleSubmit(e:any){
        e.preventDefault();
         console.log(values);
         requests.Account.login(values);
    }

    function handleInputChange(e:any){
       const {name, value} =e.target; //username ve password için
       setValues({...values, [name]:value}); // {username:"abc", password:"123"} güncelleme 

    } */ //react-hook-form kütüphanesi kullanacağımız için artık bunlara gerek yok.


    const dispatch = useAppDispatch();

    const nagivate = useNavigate();

    const {register, handleSubmit, formState:{errors, isSubmitting, isValid} } = useForm({
        defaultValues:{
            username:"",
            password:""
        }
    });
   async function submitForm(data:FieldValues){
        console.log(data);
       await dispatch(loginUser(data));
       await dispatch(getCart()); //user giriş yaptıktan sonra kartın son hali getiriliyor.
       nagivate("/catalog");
    }
    return (
        <Container maxWidth="xs">
            <Paper sx={{marginTop: 8, padding:2}} elevation={3}>
               <Avatar sx={{mx:"auto", color: "secondary.main", textAlign:"center", mb:1}}>
                <LockOutlined/>
                </Avatar> 
                <Typography component="h1" variant="h5" sx={{textAlign:"center"}} >Login</Typography>
                <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{mt:2}} >
                    <TextField 
                    {...register("username", {required:"username is required"})}
                    label="Enter username" 
                    fullWidth required autoFocus 
                    sx={{mb:2}} 
                    size="small"
                    error={!!errors.username}
                    helperText={errors.username?.message} >
                     
                    </TextField>
                    <TextField
                    {...register("password", {required:true, minLength:{
                        value:6,
                        message:"min length is 6 characters"
                    }})}
                    label="Enter password" 
                    type="password" fullWidth required 
                    sx={{mb:2}} 
                    size="small"
                    error={!!errors.password}>
                    {errors.password?.message}    
                    </TextField>
                    {errors.password?.message} 
                    <LoadingButton loading={isSubmitting} disabled={!isValid} type="submit" variant="contained" fullWidth sx={{mt:1}}> Login</LoadingButton>
                </Box>
            </Paper>
        </Container>
    );
}
