window.addEventListener("DOMContentLoaded",(event)=>{
    createInnerHtml();
});
let createInnerHtml =()=>{
    let innerHtml =`
    <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
</tr>
<tr>
    <td><img class="profile" src="image\Ellipse -1.png" alt="Employee Image"></td>
    <td> Deepika Padukone</td>
    <td>Female</td>
    <td>
        <div clas="dept-label"> HR</div>
        <div clas="dept-label"> Engineer</div>
        <div clas="dept-label"> Finance</div>
    </td>
    <td>450000</td>
    <td>1 Nov 2020</td>
    <td>
        <img id ="1" onclick="remove(this)" src="image\delete-black-18dp.svg" alt="delete">
        <img id = "1" onclick="edit(this)" src="image\create-black-18dp.svg" alt="edit">
    </td>
</tr> `;
document.querySelector('#display').innerHTML = innerHtml;
}
