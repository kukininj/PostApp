import * as React from 'react';
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../Api/app-context';
import { Category } from '../types'
import { LatestPosts } from './post-components'
import { Filters } from './search-filter';

export const Search: React.FC<{}> = () => {
    const state = React.useContext(AppContext);

    console.log(state);

    return (
        <main className="gap-sm-3 d-sm-grid container">
            <Filters />
            <LatestPosts />
        </main>
    );
}
