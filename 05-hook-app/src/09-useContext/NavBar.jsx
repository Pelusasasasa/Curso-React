import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand" href="#">UseContext</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`
                } to='/'>
                        Home
                    </NavLink>
                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`
                    } to='/about'>
                        About
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}
