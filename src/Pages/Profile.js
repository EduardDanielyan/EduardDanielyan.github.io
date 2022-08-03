import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";

function Profile() {
    const { login } = useSelector(state => state.logState)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(login);
    useEffect(() => {
        dispatch({ type: "userInfo" })
    }, [])
    return (
        <div
            className="profileBG">
            <div
                className="profile">
                <h3>{login.name} {login.surname} {login.age}</h3>
                <p>__________________________________________________________________</p>
                <h4>{login.email}</h4>
                <div 
                className="minimenu">
                <ul>
                    <li><Link to='/pricelist'>-You can see price list here-</Link></li>
                </ul>
                </div>
                <button
                    onClick={() => {
                        {navigate('/signin')}
                    }}>Log Out</button>
            
            </div>

            
        </div>
    )
}

export default Profile