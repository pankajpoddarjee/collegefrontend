function CollegePageAdmissionNoticeBoard(){
    return (
        <section class="mt-3 mb-3">
            <div class="container-fluid p-0 m-0">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header alert-info text-uppercase">
                                <i class="fas fa-clipboard-list"></i> College Notice Board 2024
                            </div>
                            <div class="card-body border border-light p-0 cPageAdmNotice_Height">                        	
                                <ul class="cPageAdmNotice">
                                    
                                    <a href="#" title="collegeName - noticeTitle">
                                        <li>
                                            <span class="title">
                                            <i class="fa fa-hand-o-right"></i> 2nd Councelling List 2022                                    
                                            
                                                <sup><span class='badge badge-danger faa-flash faa-fast animated'>New</span></sup>
                                            
                                            </span>
                                            
                                            <span class="publishDetails"><i class="fa fa-calendar"></i>  12 Aug 2022 |  | <i class="fa fa-graduation-cap"></i>  UG |  <i class="fa fa-file-text-o"></i> Merit List</span>
                                        </li>
                                    </a>
                                
                                </ul>
                            </div>
                            <div class="card-footer bg-light text-right">
                                <a href="javascript:void(0)" title="Click here to view all updates." class="btn-link text-info" style={{fontSize:'12px'}}>
                                    View all Notices <i class="fas fa-angle-double-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CollegePageAdmissionNoticeBoard;