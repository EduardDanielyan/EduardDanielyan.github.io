import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Spa() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'showSpa' })
    }, [])
    const { spa } = useSelector(state => state.logState)
    console.log(spa);
    return (
        <div
            className="spaBg">
            <div className="gym">
                <div className="spa_list">
                    <h1>Spa Price List</h1>
                    <br/>
                   <ul>
                    {
                        spa.map((i,id) => {
                            return <li key={id}>
                                <p>{i.name} _____{i.description}_____{i.price} AMD</p> 
                                <Link 
                                className="more"
                                to={'/spaMoreInfo/' + i.id}>More</Link>   
                            </li>
                            
                        })
                    }
                   </ul>
                </div>
            </div>

        </div>

    )
}

export default Spa

