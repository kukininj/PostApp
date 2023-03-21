import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from './icons';

enum UserRole {
    Anonymous,
    User,
    Admin
};

const UserIcon: React.FC<{ role: UserRole }> = ({ role }) => {
    switch (role) {
        case UserRole.Anonymous:
            return (<Link to="/login"> {Icons.person} </Link>);
        case UserRole.User:
            return (<Link to="/profile"> {Icons.person} </Link>);
        case UserRole.Admin:
            return (<Link to="/profile"> {Icons.person} </Link>);
    }
}

const PortableMenu: React.FC<{}> = () => {
    const [role, setRole] = React.useState(UserRole.Anonymous);

    return (
        <div className={"portable-menu"}>
            <UserIcon role={role} />
            {role != UserRole.Anonymous && Icons.notifications}
        </div>
    );
}

const Navbar: React.FC<{}> = () => {
    return (
        <div className="navbar navbar-fixed-top">
            <Link to="/">
                <img className="logo navbar-brand" src="img/logo.svg" />
            </Link>
            <div className="search-bar hstack gap-3">
                <div className="search-input">
                    <input type="text" name="search-querry-input" />
                </div>
                <div className="vr" ></div>
                <div className="class-select hstack">
                    <div>{Icons.location}</div>
                    <input type="text" name="area-input" />
                </div>
                <div className="submit-search">
                    {Icons.search}
                </div>
            </div>
            <PortableMenu />
        </div>
    );
}

export default Navbar;
