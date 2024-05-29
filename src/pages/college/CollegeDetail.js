import CollegePageHeader from "./CollegePageHeader";
import CollegePageMenu from "./CollegePageMenu";
import CollegeInfoMainTable from "./CollegeInfoMainTable";
import CollegePageAdmissionLink from "./CollegePageAdmissionLink";
import CollegePageAdmissionNoticeBoard from "./CollegePageAdmissionNoticeBoard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function CollegeDetail(){
    const params = useParams();
    console.log(useParams);
    const [colleges, setColleges] = useState([]);
    
      useEffect(() => {
        fetchData();
      }, []);
      let id = params.id
      const fetchData = () => {
        setTimeout(() => {
        }, 3000);
        axios.get(`http://localhost:7000/college/${params.id}`, {
        //   params: {
        //     id: params.id
        //   }
        }).then(({data}) => {
            console.log(data);
          setColleges(data.records);
        //  console.log(colleges);
        }).catch(error => {
          console.log(error.response);
        })
      }

 return (
    <>
    <CollegePageHeader collegeData={{colleges}}/>
    <CollegePageMenu/>
    
    <section class="mt-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-9">
                	<div class="row">
                    	<div class="col-md-12">
                            <h4 class="alert-info p-3" style={{fontFamily:'Rubik'}}><i class="fas fa-building"></i> College Info </h4>
                        </div>
                    </div>
                	<div class="row">
                        <div class="col-md-12 mt-4">
                        <CollegeInfoMainTable collegeData={{colleges}}/>
                        </div>
                    </div>

                    <CollegePageAdmissionLink/>
                    
                    <div class="row d-none d-sm-block">
                        <div class="col-md-12">
                        	<CollegePageAdmissionNoticeBoard/>
                        </div>
                    </div>                    
                </div>
                <div class="col-md-3">
                	
                </div>
            </div>
        </div>
    </section>
 
    </>
 );
}
export default CollegeDetail;