import { Link, Outlet } from "react-router-dom"

function Header() {
    return (
        <div className="panel">
            <div className="top">
                MODERN GYM
                <div className="logo1">
                    <img src="https://www.seekpng.com/png/full/85-851044_small-swimming-clipart-no-background.png" />
                </div>
                <div className="logo2">
                    <img src="https://www.nicepng.com/png/full/16-165556_dumbbells-clipart-group-fitness-weights-icon-white-png.png" />
                </div>



            </div>

            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pool">Pool</Link></li>
                        <li><Link to="/gym">Gym</Link></li>
                        <li><Link to="/fitness">Group Trainings</Link></li>
                        <li><Link to="">Services</Link></li>
                        <li><Link to="/spa">SPA</Link></li>
                        <li><Link to="/priceList">Price List</Link></li>
                    </ul>
                </nav>
            </header>

            <Outlet />
        </div>
    )
}

export default Header