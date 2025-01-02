
const NavBar = ({coin}) => {

  return (
    <div>
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
            <div className="navbar-start">              
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <a className="btn btn-ghost text-xl">Cricket</a>
            </div>
            <div className="navbar-center hidden lg:flex font-bold">
                <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>                 
                <li><a>Fixture</a></li>
                <li><a>Teams</a> </li>
                <li><a>Schedules</a></li>
                </ul>
            </div>
            <div className="border flex rounded-xl p-3 space-x-1">
                <a className="font-bold">{coin}</a>
                <p className="font-bold">coin</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar