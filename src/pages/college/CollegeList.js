import axios from "axios";
import React,{  useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import CollegeHeader from "./CollegeHeader";
import collegeimg from '../bootstrap/images/collegeimg.jpg';
import collegelogo from '../bootstrap/images/collegelogo.jpg';
import { Link } from "react-router-dom";
const LIMIT = 8;
function  CollegeList() {
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
      <InfiniteScroll
            dataLength={colleges.length}
            next={fetchData}
            hasMore={colleges.length < totalColleges}
            loader={<Loader/>}
            // endMessage={
            //   <p style={{ textAlign: 'center', marginTop: '10px' }}>
            //     <b>Yay! You have seen it all</b>
            //   </p>
            // }
          >
      <CollegeHeader/>
      <section class="mt-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                	<div class="row">
                    	<div class="col-md-12">
                            <h4 class="alert-info p-3" ><i class="fas fa-building"></i> List of Colleges in Kolkata</h4>
                        </div>
                    </div>
                    
                	<div class="row ml-0 mr-0 mt-4 pt-3 pb-3 bg-light" >   
                      {colleges.map((item,index)=>
                        <div class="col-md-3 mb-4" key={index}>
                            <div class="img-thumbnail">
                                <div class="row">
                                	<div class="col-12">
                                    	<a  href={`/college/${item._id}`} title="">
                                      <img class="img-fluid border p-1" src={collegeimg} alt=""/>
                                            <div class="ml-2" style={{marginTop:'-35px', position:'relative'}}>
                                              <img class="img-fluid bg-white p-1 rounded d-block" src={collegelogo} width="45"/>
                                            </div>
                                            <div class="border-bottom pb-1">
                                                <span class="text-danger" style={{fontFamily:'fantasy'}}>
													                      {item.college_name}  - 
													
                                                </span>
                                                <span class="text-dark">{item.address}</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="row mt-2">
                                	<div class="col-6 listing_links">                                    	
                                        <a class="btn border btn-sm btn-block mb-2" href="" title=""><i class="fas fa-book-reader"></i> Courses Offered</a>
                                    </div>
                                	<div class="col-6 listing_links">
                                    <a class="btn border btn-sm btn-block mb-2" href="" title=""><i class="fas fa-desktop"></i> Admission </a>
                                    </div>
                                	<div class="col-6 listing_links">
										<a class="btn border btn-sm btn-block mb-2" href="" title="apply online for  admission"><i class="fas fa-edit"></i> Apply Now </a>
                                    </div>
                                	<div class="col-6 listing_links">
										<a class="btn border btn-sm btn-block mb-2" href="" title=""><i class="fa fa-list-ol"></i> Merit List </a>
                                    </div>
                                	<div class="col-12 listing_links">
										<a class="btn border btn-sm btn-block mb-1" href="" title=""><i class="fas fa-file-alt"></i> View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      )}                
                  </div>
                   
                    <div class="row d-none d-sm-block">
                        <div class="col-md-12">
                        	google_ads_contextual
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    </InfiniteScroll>
    </div>
  );
}

export default CollegeList;