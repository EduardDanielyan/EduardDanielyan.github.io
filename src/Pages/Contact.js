import { useNavigate } from "react-router-dom"

function Contact() {
    const navigate = useNavigate()
    return (
        <div
            className="contactBg">
            <div
                className="delMap">
                <img
                    className="map" src="images/map/1.jpg" />

            </div>
            <p
                className="text">
                <ion-icon name="call"></ion-icon>  +374 (99) 000000</p>
            <div
                className="social">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-google"></ion-icon>
                    <a href="https://www.facebook.com/" 
                    className="fb">fb</a>
                    <a href="https://twitter.com/?lang=ru" 
                    className="tw">tw</a>
                    <a href="https://www.instagram.com/" 
                    className="inst">in</a>
                    <a href="https://mail.google.com/" 
                    className="gg">gg</a>
            </div>
        </div>
    )
}

export default Contact