function CollegePageMenu(){
    return (
        <>
        <section class="bg-light">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand d-md-none d-lg-none" href="javascript:void(0)">College Menu</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item mr-5">
                            <a class="nav-link active_overview" href="#" title="collegeName"><i class="fa fa-building-o"></i> OVERVIEW</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link active_courses" href="/courses.php" title="
                            collegeName Courses"><i class="fas fa-book-reader"></i> COURSES OFFERED</a>
                        </li>                
                        <li class="nav-item mr-5">
                            <a class="nav-link active_admission" href="admission_notice.php" title="collegeName Admission "><i class="fas fa-desktop"></i> COLLEGE ADMISSION 2024 <sup><span class="badge badge-danger faa-flash animated">New</span></sup></a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link active_apply" href="applynow.php" title="collegeName Apply Now for Admission 2024"><i class="fas fa-edit"></i> APPLY NOW 2024 <sup><span class="badge badge-danger faa-flash animated">New</span></sup></a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link active_list" href="meritlist.php" title="collegeName Merit List / Admission List "><i class="fas fa-list-ol"></i> MERIT / ADMISSION LIST 2024 <sup><span class="badge badge-danger faa-flash animated">New</span></sup></a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link active_contact" href="contact.php" title=" Contact"><i class="fas fa-globe"></i> CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
        </>
    );
}

export default CollegePageMenu;