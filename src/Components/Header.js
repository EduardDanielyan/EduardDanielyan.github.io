import { Link, Outlet, useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()
    return (
        <div className="panel">
            <div className="top">
                MODERN GYM
                <div className="logo1">
                    <img src="images/icon1.png" />
                </div>
                <div className="logo2">
                    <img src="images/icon2.png" />
                </div>
                <div className="logo3">
                    <img src="images/icon3.png" />
                </div>
                <div className="logo4">
                    <img src="images/icon4.png" />
                </div>
            </div>

            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pool">Pool</Link></li>
                        <li><Link to="/gym">Gym</Link></li>
                        <li><Link to="/fitness">Group Trainings</Link></li>
                        <li><Link to="/spa">SPA</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><ion-icon name="people-outline">
                            
                        </ion-icon>
                        <button 
                            onClick={() => {
                                navigate('/profile')
                            }}></button>
                        </li>
                    </ul>
                </nav>
            </header>

            <Outlet />
        </div>
    )
}

export default Header