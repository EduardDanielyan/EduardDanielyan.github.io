import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

function Profile() {
    const { login } = useSelector(state => state.logState)
    const dispatch = useDispatch()
    console.log(login);
    useEffect(() => {
        dispatch({ type: "userInfo" })
    }, [])
    return (
        <div
            className="profileBG">
            <div
                className="profile">
                    <h3>{login.name} {login.surname}</h3>
            </div>
        </div>
    )
}

export default Profile