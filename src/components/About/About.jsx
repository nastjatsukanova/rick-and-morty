import { useLocation } from "react-router-dom";
import './About.styles.css';
import { Link } from 'react-router-dom';
import { MainPage } from "../MainPage/MainPage";

export const About = (props) => {
  
  
  const location = useLocation()
  const { item } = location.state
 
  const date = new Date(item.created)
  return (
   <div  className="about">
    {item.image && <img className='image' src={item.image}  alt='' width={350} height={350} />}
    <p className='nameAbout'>{item.name}</p> 
      <div className="description">
        <p> {item.species}</p>
        <p> {item.gender} </p>
        <p> {item.status} </p>
        <p>created: {date.toDateString()}</p>
        <Link to={{
                pathname: "/",
                propsSearch: MainPage,
                
            }}>
              Main Page
            </Link>
      </div> 
   </div>
 )
}