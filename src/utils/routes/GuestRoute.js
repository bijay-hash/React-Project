import React, {useContext} from 'react';
import { Redirect } from 'react-router';
import AppContext from '../../store/AppContext';
import AnimatedRoute from './AnimatedRoute';

export default function GuestRoutes({children, ...rest}) {

    const [IsLoggedIn] = useContext(AppContext);

    if(!IsLoggedIn) 
    return <AnimatedRoute {...rest}>{children}</AnimatedRoute>;

    return (
    <AnimatedRoute>
    <Redirect to="/" />;
    </AnimatedRoute>
    );
}