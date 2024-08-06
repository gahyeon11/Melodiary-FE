import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Mates from './pages/Mates';
import MyPage from './pages/MyPage';
import WriteDiary from './pages/WriteDiary';
import Landing from './pages/Landing';
import Join from './pages/Join';
import Login from './pages/Login';
import { AnimatePresence } from 'framer-motion';
import NickName from './pages/Nickname';
import Auth from './pages/Auth';
import { AuthProvider, tokenLoader } from './context/AuthContext';

const App = () => {
  const routerList = [
    {
      path: '/home',
      component: <Home />,
    },
    {
      path: '/explore',
      component: <Explore />,
    },
    {
      path: '/mates',
      component: <Mates />,
    },
    {
      path: '/mypage',
      component: <MyPage />,
    },
    {
      path: '/writediary',
      component: <WriteDiary />,
    },
    {
      path: '/',
      component: <Landing />,
      loader: tokenLoader,
    },
    {
      path: '/join',
      component: <Join/>,
    },
    {
      path: '/login',
      component: <Login/>,
    },
    {
      path: '/nickname',
      component: <NickName/>,
    },
    {
      path: '/auth',
      component: <Auth/>,
    },
  ];

  const router = createBrowserRouter(
    routerList.map((item) => {
      return {
        ...item,
        element: <Layout>{item.component}</Layout>,
      };
    })
  )
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
};

export default App;