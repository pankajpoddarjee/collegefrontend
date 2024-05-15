import collegeImg from '../bootstrap/images/college.png'; 
function CollegeHeader(){
    return (
        <section class="bg-light">
        <div class="container-fluid page_header">
            <div class="row">
                <div class="col-md-10">
                    <img src={collegeImg} alt="logo" title="logo" class="rounded"/>
                    <a href="" title="colleges in kolkata">
                        <h1>List of Colleges in Kolkata</h1>
                    </a>
                    <span class="subType1">
                        <i class="fa fa-map-marker"></i> <a href="/CollegesInKolkata.php" title="kolkata colleges list">Kolkata</a>, <a href="" title="">West Bengal</a>, <a href="" title="">India</a>
                    </span>
                    <span class="subType2">
                        <i class="fas fa-university"></i> <a href="" title="list">All Universities</a>
                    </span>
                </div>
                <div class="col-md-2">
                    
                    <a class="btn btn-danger btn-block p-2 pb-2 mt-4" href="">
                        <i class="fas fa-desktop"></i> <span class="faa-flash animated text-uppercase text-light">Admission </span>
                    </a>
                   
                </div>
            </div>
        </div>
    </section>
    );
}

export default CollegeHeader;