import * as React from 'react';
import { Link } from 'react-router-dom';

export const IconLink: React.FC<{ icon: string, to: string }> = ({ icon, to }) => {
    return (
        <Link 
            className="btn btn-info rounded-circle flex-shrink-0 d-grid justify-content-center align-content-center shadow" 
            style={{ aspectRatio: "1/1" }} 
            to={to}>
            <i className={`bi ${icon}`}></i>
        </Link>
    )
}

export const IconButton: React.FC<{ icon: string, action: () => void }> = ({ icon, action }) => {
    return (
        <button 
            className="btn btn-info rounded-circle flex-shrink-0 d-grid justify-content-center align-content-center shadow"
            style={{ aspectRatio: "1/1" }} 
            onClick={action}>
            <i className={`bi ${icon}`}></i>
        </button>
    )
}
