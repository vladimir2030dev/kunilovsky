import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import git from '../../assets/img/github.svg'


export const Navbar = () => {

   let style = {
        width: 30,
        height: 30
    }

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto ml-auto">
                        <li className="navbar-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                exact
                            >
                                Мои работы
                            </NavLink>
                        </li>
                        <a href="https://github.com/vladimir2030dev"><img src="" alt=""/><img style={style} src={git}
                                                                                                         alt=""/></a>
                    </ul>
            </nav>
        </Fragment>
    )
}