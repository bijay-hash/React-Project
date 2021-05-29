
import React from 'react';
import Home from '../../page/Home';
import Login from '../../page/Login';
import About from '../../page/About';
import Gallary from '../../page/Gallary';
import SignUp from '../../page/SignUp';
import Tensorflow from '../../page/tensorflow';

export default [

    {
        path: "/",

        exact: true,

        component: () => <Home />,

        protected: "none",
    },
    {
        path: "/login",

        component: () => <Login />,

        protected: "guest",
    },
    {
        path: "/signup",

        component: () => <SignUp />,

        protected: "guest",
    },
    {
        path: "/about",

        component: () => <About />,
    },
    {
        path: "/gallary",

        component: () => <Gallary />,

        protected: "auth",
    },
    {
        path: "/tensorflow",
        component: () => <Tensorflow />,
        protected: null,
    },
];