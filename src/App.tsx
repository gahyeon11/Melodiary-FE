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
    },
    {
      path: '/join',
      component: <Join/>,
    },
    {
      path: '/login',
      component: <Login/>,
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
      <RouterProvider router={router} />
    </ThemeProvider>
  )
};

export default App;