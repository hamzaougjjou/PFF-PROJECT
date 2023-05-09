
import React, { useEffect, useState } from 'react'
import { a, NavLink, useNavigate } from 'react-router-dom';

function Header() {



    // const { token, loading } = useSelector(state => state.refreshLogin);

    //css class for active item in main menu 
    const myClass = ({ isActive }) => isActive ? "el-menu active" : "el-menu";


    return (
        <header className="main-header">
            <nav>
                <ul>

                    <li>
                        <NavLink to='/'>
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/trips'>
                            trips
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            Create
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts'>
                            Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/settings'>
                            settings
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header>

    ) // return

} // header class 

export default Header;

// export { getFriendsFun , getCurrentUser } ;