import * as React from 'react';
import { Link } from 'react-router-dom';
import { IconLink } from './icons';

enum UserRole {
    Anonymous,
    User,
    Admin
};

const UserIcon: React.FC<{ role: UserRole }> = ({ role }) => {
    switch (role) {
        case UserRole.Anonymous:
            return (<IconLink to='/login' icon='bi-box-arrow-in-right' />);
        case UserRole.User:
            return (<Link className="h-auto" to="/profile"> <i className="bi bi-person"></i> </Link>);
        case UserRole.Admin:
            return (<Link className="h-auto" to="/profile"> <i className="bi bi-person"></i> </Link>);
    }
}

const PortableMenu: React.FC<{ className: string, style: React.CSSProperties }> = ({ className, style }) => {
    const [role, setRole] = React.useState(UserRole.Anonymous);

    return (
        <div className={className} style={style}>
            <UserIcon role={role} />
            {role != UserRole.Anonymous && <i className="bi bi-bell"></i>}
        </div>
    );
}

const Navbar: React.FC<{}> = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-fixed-top justify-content-center text-dark">
            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-3 px-3">
                <Link className="d-inline order-0 logo navbar-brand" to="/">
                    <img src="/images/logo-sm.svg"/>
                </Link>
                <form className="inline-flex my-auto order-md-1 order-last hstack gap-3 rounded-pill bg-light p-2 shadow" style={{ height: "75px" }}>
                    <div className="search-input p-1">
                        <input className="form-control fs-3 bg-transparent border-0 shadow-none" type="text" name="search-querry-input" placeholder="Masz coś na myśli?" />
                    </div>
                    <div className="vr" ></div>
                    <div className="class-select hstack p-1">
                        <div className="m-1"><i className="bi bi-geo-alt-fill"></i></div>
                        <input className="form-control fs-3 bg-transparent border-0 shadow-none" type="text" name="area-input" placeholder="Kraków"/>
                    </div>
                    <button className="submit-search btn btn-info rounded-circle flex-shrink-0" style={{ height: "100%", aspectRatio: "1/1" }}>
                        <i className="bi bi-search"></i>
                    </button>
                </form>
                <PortableMenu className="hstack my-auto gap-3 order-2 portable-menu rounded-pill bg-light p-3 shadow" style={{ height: "75px" }} />
            </div>
        </div>
    );
}

export default Navbar;
