import collegeImg from '../bootstrap/images/college.png'; 
import '../css/CollegePageHeader.css';
function CollegePageHeader(props){
    console.log(props.collegeData.colleges);
    return (
        <>
        <section class="bg-light">
            <div class="container-fluid c_page_header">
                <div class="row">
                    <div class="col-md-10">
                        <img class="rounded" src={collegeImg} alt="college logo" title="collegeName logo"/>
                        <a href="#" title="College Name, College Address">
                            <h1 style={{textTransform: 'capitalize'}}> {props.collegeData.colleges.college_name} - College Short name </h1>
                        </a>
                        <span class="college_location">
                            <i class="fa fa-map-marker"></i> <a href="" title="list of colleges in city name" style={{textTransform: 'capitalize'}}>{props.collegeData.colleges.address}</a>, <a href="" title="list of colleges in State name">State name</a>
                        </span>
                        <span class="college_affiliation">
                            <i class="fas fa-university"></i> <a href="" title="list of colleges affiliated under University name (University name)">University Name (universityAbbreviation)</a>
                        </span>
                    </div>
                    <div class="col-md-2">
                    
                        <a class="btn btn-danger btn-block p-2 pb-2 mt-4" href="admission_notice.php">
                            <i class="fas fa-desktop"></i> <span class="faa-flash animated text-uppercase text-light">Admission 2024</span>
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default CollegePageHeader;