import * as React from 'react';
import { useParams, redirect } from 'react-router-dom'
import { Post, User } from '../types'
import {AppContext} from '../Api/app-context'

const AccountPage: React.FC<{}> = () => {
    const state = React.useContext(AppContext);
    console.log(state);
    return (
        <p>
            {state.user}
        </p>
    );
}

export default AccountPage;
