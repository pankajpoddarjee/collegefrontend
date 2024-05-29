function CollegeInfoMainTable(props){
    return (
        <>
        <table class="table table-bordered table-striped">
            <tbody>
                
                <tr>
                    <td class="TD1">College Code</td>
                    <td class="TD2">121</td>
                </tr>
                <tr>
                    <td class="TD1">College Name</td>
                    <td class="TD2">{props.collegeData.colleges.college_name}</td>
                </tr>
                <tr>
                    <td class="TD1">Other Name</td>
                    <td class="TD2">South Suburban College</td>
                </tr>
                <tr>
                    <td class="TD1">Established</td>
                    <td class="TD2">1920</td>
                </tr>
                <tr>
                    <td class="TD1">Type</td>
                    <td class="TD2">Co-Eduacational</td>
                </tr>
                <tr>
                    <td class="TD1">Undertaking</td>
                    <td class="TD2">Government</td>
                </tr>
                <tr>
                    <td class="TD1">Principal / T.I.C</td>
                    <td class="TD2">ABCDE</td>
                </tr>
                <tr>
                    <td class="TD1">Landmark</td>
                    <td class="TD2">Jatin Das</td>
                </tr>
                <tr>
                    <td class="TD1">City</td>
                    <td class="TD2">{props.collegeData.colleges.address}</td>
                </tr>
                <tr>
                    <td class="TD1">State</td>
                    <td class="TD2">West Bengal</td>
                </tr>
                <tr>
                    <td class="TD1">Country</td>
                    <td class="TD2">India</td>
                </tr>
                <tr>
                    <td class="TD1">Course Type</td>
                    <td class="TD2">Under Graduate & Post Graduate (UG & PG)</td>
                </tr>
                <tr>
                    <td class="TD1">Affiliation</td>
                    <td class="TD2"><a href="" title="list of colleges under <?php echo strtolower ($universityName);?> (<?php echo strtolower ($universityAbbreviation);?>)">Calcutta University (CU)</a></td>
                </tr>
                <tr>
                    <td class="TD1">Accreditation / Recognition</td>
                    <td class="TD2">NAAC</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}
export default CollegeInfoMainTable;