import axios from "axios";
import React,{  useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import CollegeHeader from "./college/CollegeHeader";
import collegeimg from './bootstrap/images/collegeimg.jpg';
import collegelogo from './bootstrap/images/collegelogo.jpg';
const LIMIT = 8;
function  Home() {
  const [colleges, setColleges] = useState([]);
  const [totalColleges, setTotalColleges] = useState(0);
  const [activePage, setActivePage] = useState(1);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      setTimeout(() => {
      }, 3000);
      axios.get('http://localhost:7000/colleges', {
        params: {
          page: activePage,
          size: LIMIT
        }
      }).then(({data}) => {
        setActivePage(activePage+ 1);
        setColleges([...colleges, ...data.records]);
        setTotalColleges(data.total)
      }).catch(error => {
        console.log(error.response);
      })
    }
  

  return (
    <div>
      <h2>Home Page</h2>
      <p>Learn more about us!</p>
    </div>
  );
}

export default Home;