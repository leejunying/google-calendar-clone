 import { ToastContainer } from 'react-toastify';
 import ThemeRoutes from './routers';
 import ThemeProvider from './theme';
 import React,{useState} from 'react';
const LoginContext = React.createContext(false);
 
function App() {
    //  const isLoggedIn = !!userInfo?.object?.token;


 
    document.body.style.overflow = 'hidden';


    return (
        <ThemeProvider>
             <ThemeRoutes />
            <ToastContainer autoClose={2000} position="top-center" />
        </ThemeProvider>
    );
}

export default App;
