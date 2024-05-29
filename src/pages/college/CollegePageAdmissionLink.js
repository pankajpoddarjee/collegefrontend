function CollegePageAdmissionLink(){
    return (
        
        <div class="row mt-3">
            <div class="col-md-4">
                <a class="btn btn-danger btn-block p-3 text-uppercase text-left mb-2" href="<?php echo BASE_URL;?>/<?php echo $folderName;?>/admission_notice.php" title="<?php echo strtolower ($collegeName);?> admission <?php echo CURRENT_YEAR_DISPLAY_C_PAGE;?>">
                    <h5 class="p-0 m-0" style={{fontFamily:'Roboto'}}>
                        <i class="fas fa-desktop"></i> | Admission <sup><span class="faa-flash animated">2024</span></sup>
                    </h5>
                </a>
            </div>
            
            <div class="col-md-4">
                <a class="btn btn-info btn-block p-3 text-uppercase text-left mb-2" href="<?php echo BASE_URL;?>/<?php echo $folderName;?>/applynow.php" title="how to apply at <?php echo strtolower ($collegeName);?> <?php echo CURRENT_YEAR_DISPLAY_C_PAGE;?>">
                    <h5 class="p-0 m-0" style={{fontFamily:'Roboto'}}>
                        <i class="fas fa-edit"></i> | Apply Now <sup><span class="faa-flash animated">2024</span></sup>
                    </h5>
                </a>
            </div>
            
            <div class="col-md-4">
                <a class="btn btn-warning btn-block p-3 text-uppercase text-left mb-2" href="<?php echo BASE_URL;?>/<?php echo $folderName;?>/meritlist.php">
                    <h5 class="p-0 m-0" style={{fontFamily:'Roboto'}}>
                        <i class="fas fa-list-ol"></i> | Merit List <sup><span class="faa-flash animated">2024</span></sup>
                    </h5>
                </a>
            </div>
        </div>
        
    );
}

export default CollegePageAdmissionLink;