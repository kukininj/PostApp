import * as React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, IconLink } from './icons';
import { AppContext } from '../Api/app-context';

const PortableMenu: React.FC<{ className: string, style: React.CSSProperties }> = ({ className, style }) => {
    const app = React.useContext(AppContext);

    if (app.authenticated()) {
        return (
            <div className={className} style={style}>
                <IconLink to="/account" icon="bi-person" />
                <IconLink to="/newpost" icon="bi-plus-circle" />
                <IconLink to='/logout' icon='bi-box-arrow-right' />
            </div>
        );
    } else {
        return (
            <div className={className} style={style}>
                <IconLink to='/login' icon='bi-box-arrow-in-right' />
            </div>
        );
    }

}

const Navbar: React.FC<{}> = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-fixed-top justify-content-center text-dark">
            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-3 px-3">
                <Link className="d-inline order-0 logo navbar-brand" to="/">
                    <img src="/images/logo-sm.svg" />
                </Link>
                <form action="/search" className="inline-flex my-auto order-md-1 order-last hstack gap-3 rounded-pill bg-light p-2 shadow" style={{ height: "75px" }}>
                    <div className="search-input p-1">
                        <input className="form-control fs-3 bg-transparent border-0 shadow-none" type="text" name="search-querry" placeholder="Masz coś na myśli?" />
                    </div>
                    <div className="vr" ></div>
                    <div className="class-select hstack p-1">
                        <div className="m-1"><i className="bi bi-geo-alt-fill"></i></div>
                        <input className="form-control fs-3 bg-transparent border-0 shadow-none" type="text" name="area" placeholder="Kraków" />
                    </div>
                    <button className="submit-search btn btn-info rounded-circle flex-shrink-0" style={{ height: "100%", aspectRatio: "1/1" }}>
                        <i className="bi bi-search"></i>
                    </button>
                </form>
                <PortableMenu className="hstack my-auto gap-2 order-2 portable-menu rounded-pill bg-light p-3 shadow" style={{ height: "75px" }} />
            </div>
        </div>
    );
}

export default Navbar;
