import {FaInstagram , FaSquareFacebook , FaDiscord , FaSquareTwitter} from "react-icons/fa6"
import "./footer.css"

const Footer = () => {
    return(
        <div style={{width: "100%" , backgroundColor: "#576574" , padding: "20px"}}>
            <ul style={{display: "flex" , justifyContent: "space-between"}}>
                <li><FaInstagram/></li>
                <li><FaSquareFacebook/></li>
                <li><FaDiscord/></li>
                <li><FaSquareTwitter/></li>
            </ul>
        </div>
    )
}

export default Footer;