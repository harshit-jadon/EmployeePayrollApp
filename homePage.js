window.addEventListener("DOMContentLoaded",(event)=>{
    createInnerHtml();
});
const createInnerHtml =()=>{
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                         "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml =`${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml =`${innerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt="Employee Image"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
            <img name ="${empPayrollData._id}" onclick="remove(this)" src="image/delete-black-18dp.svg" alt="delete">
            <img id = "${empPayrollData._id}" onclick="edit(this)" src="image/create-black-18dp.svg" alt="edit">
        </td>
        </tr> 
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Harshit Jadon',
            _gender:'Male',
            _department: [
                'Engineer',
                'Finance'
            ],
            _salary:'543210',
            _startDate:'31 Jan 2021',
            _note:'',
            _id: new Date().getTime(),
            _profilePic:'image/Ellipse -3.png'
        },
        {
            _name: 'Ankur Singh',
            _gender:'Male',
            _department: [
                'HR',
                'Sales',
                'Engineer'
            ],
            _salary:'300000',
            _startDate:'19 March 2016',
            _note:'',
            _id: new Date().getTime(),
            _profilePic:'image/Ellipse -8.png'
        }

    ];
    return empPayrollListLocal;
}
const getDeptHtml = (deptList) => {
    let deptHtml ='';
    for(const dept of deptList){
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`;
    }
    return deptHtml;
}