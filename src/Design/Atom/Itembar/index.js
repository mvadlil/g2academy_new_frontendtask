import React from 'react';
import { Link } from 'react-router-dom'

export default function Itembar({ children, path }) {
    return (
        <>
            <li>
                <Link to={path}><p><i className="fas fa-user-circle"></i>{children}</p></Link>
            </li>
        </>
    )
}