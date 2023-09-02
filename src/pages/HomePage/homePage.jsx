import "./homePage.css"
import Navigation from "../../components/navigation/nav";
import Main from "../../components/main/main";


const HomePage = () => {
  return(
    <div className="container"> 
        <Navigation/>
        <Main/>
    </div>
  )
};

export default HomePage;
