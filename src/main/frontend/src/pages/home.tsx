import * as React from 'react';
import { Link } from 'react-router-dom'
import { AppContext } from '../Api/app-context';
import { Category } from '../types'
import { LatestPosts } from './post-components'

const FeaturedCategories: React.FC<{}> = () => {
    const categories = [
        new Category("Motoryzacja", "moto", new URL("/images/categories/car-front-fill.svg", document.location.href)),
        new Category("Elektronika", "elektronika", new URL("/images/categories/motherboard-fill.svg", document.location.href)),
        new Category("Hobby", "hobby", new URL("/images/categories/book-half.svg", document.location.href)),
        new Category("Kolarstwo", "kolarstwo", new URL("/images/categories/bicycle.svg", document.location.href)),
        new Category("Biżuteria", "bizuteria", new URL("/images/categories/gem.svg", document.location.href)),
        new Category("Narzędzia", "tarzedzia", new URL("/images/categories/hammer.svg", document.location.href)),
    ];
    let categoriesComponents = categories.map((category) => {
        return (
            <div className="d-flex justify-content-center flex-column p-2" key={category.name}>
                <div className="rounded-circle flex-shrink-0 felx-grow-1 shadow p-3 btn btn-info link" style={{ aspectRatio: "1/1", width: "85px", height: "" }}>
                    <img className="text-center img-responsive w-100 h-100" src={category.url.href} alt="obrazek" />
                </div>
                <Link className="text-center link-dark text-decoration-none" to={`/search/${category.name}`} >{category.title}</Link>
            </div>
        )
    })
    return (
        <div className="d-flex flex-wrap bg-light rounded rounded-5 justify-content-center shadow" >
            {categoriesComponents}
        </div>
    );
}

const Home: React.FC<{}> = () => {
    const state = React.useContext(AppContext);

    return (
        <main className="gap-sm-3 d-sm-grid container">
            <FeaturedCategories />
            <LatestPosts />
        </main>
    );
}

export default Home;
