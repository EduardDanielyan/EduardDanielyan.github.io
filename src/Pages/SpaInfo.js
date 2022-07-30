import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";


function SpaInfo() {
    const { spaInformation } = useSelector(state => state.logState)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'showId', id: id })
    }, [])
    console.log(spaInformation);
    return (
        <div
            className="spaBg">
            <div className="gym">
                <div className="spa_list2">
                    <h1>Spa Price List</h1>
                    <br />
                    <p>{spaInformation.description}</p>
                    <img src={spaInformation.photo}/>

                </div>
            </div>

        </div>

    )
}

export default SpaInfo