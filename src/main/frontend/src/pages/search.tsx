import * as React from 'react';
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../Api/app-context';
import { Category } from '../types'
import { LatestPosts, PostsList } from './post-components'
import { Filters } from './search-filter';
import { EmptyPost } from '../types/post';
import { Posts } from '../Api';
import { FilteredFindRequest, FilteredFindRequestFromJSON } from 'PostAppAPI';

export const Search: React.FC<{}> = () => {
    const [posts, setPosts] = React.useState([EmptyPost, EmptyPost]);

    const params = new URLSearchParams(window.location.search);
    const [filters, setFilters] = React.useState<FilteredFindRequest>(
        FilteredFindRequestFromJSON(Object.fromEntries(params.entries())) // eww
    );

    React.useEffect(() => {
        let f = Object.entries(filters).filter(e => typeof e[1] != 'undefined');
        const params = new URLSearchParams(f);
        window.history.pushState(null, "", `/search?${params.toString()}`);
        Posts.getByFilter({
            filteredFindRequest: filters
        }).then(setPosts)
    }, [filters])

    return (
        <main className="gap-sm-3 d-sm-grid container">
            <Filters results={posts.length} setFilters={setFilters} />
            <PostsList posts={posts} />
        </main>
    );
}
