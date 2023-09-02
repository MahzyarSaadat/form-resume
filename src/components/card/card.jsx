import "./card.css"
import personalImg from "../../assets/pexels-viktorya-sergeeva-💙💛🫂-14267200.jpg"
import Button from "../../components/button/buttons";
import About from "../about/about";
import Intrest from "../interest/interest";
import Footer from "../footer/footer";

const Card = () => {
    return (
        <div>
           <div className="img-container" style={{width: "100%"}}>
                <img style={{width: "100%"}} src={personalImg} alt="personImg" />
            </div> 
            <div className="details">
                <h2>Laura smith</h2>
                <span>Frontend Developer</span>
                <div className="btns" style={{margin: "20px 40px"}}>
                    <Button>Email</Button>
                    <Button className="bg-primary">Linkdin</Button>
                </div>
                <div style={{margin: "20px 40px"}}>
                    <About/>
                    <Intrest/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Card