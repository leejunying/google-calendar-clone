import { Navigate, useRoutes } from 'react-router-dom';
import { APP_ROUTES } from '../config';
import { useEffect, useState } from 'react';
// layouts
import { Dashboard } from '../layouts';
// pages
 
import { Login, Register } from '../pages/Auth';
 
// import NotFound from '~/pages/Page404';
 
// ----------------------------------------------------------------------

 
export default function ThemeRoutes() {
 
    const [isLogin,setIsLogIn]=useState<boolean>(false)

    const [userInfo,setUserInfo]=useState<any>({})

    useEffect(()=>{console.log(isLogin)},[isLogin])

    const changeIsLogIn=(data:boolean)=>{
        setIsLogIn(data)
    }

    const setUserData=(data:any)=>{
        setUserInfo(data)
    }
 
 




    return useRoutes([
        {   
            // isLoggedIn ? <DashboardLayout /> :
            // isLoggedIn ? APP_ROUTES.USER_MANAGEMENT :
            path:   APP_ROUTES.HOME,
            element: isLogin? <Dashboard  ></Dashboard>  : <Login setUserData={setUserData} changeIsLogIn={changeIsLogIn} />,
            children: [
                {
                    index: true,
                    element:   <Navigate to={isLogin? APP_ROUTES.DASHBOARD :APP_ROUTES.LOGIN} replace={true}></Navigate>   ,
                },

          
                 
            ],
        },
       

        { path: APP_ROUTES.LOGIN, element: <Login setUserData={setUserData}  changeIsLogIn={()=>changeIsLogIn}/> },
      

        // { path: APP_ROUTES.NOT_FOUND, element: <NotFound /> },
        { path: '*', element: <Navigate to={APP_ROUTES.NOT_FOUND} /> },
    ]);
}
