window.addEventListener("DOMContentLoaded",(event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector('.text-error');
    name.addEventListener("input",function(){
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            new EmployeePayrollData().name = name.value;
            textError.textContent = "";
        }catch (e){ textError.textContent = e; }
    });

    const salary =document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
        output.textContent = salary.value;
    });

    const date = document.querySelector('#date');
    const dateError = document.querySelector('.date-error');
    date.addEventListener('input',function(){
        let startDate = getInputValueById("#day") +" "+getInputValueById("#month") +" "+getInputValueById("#year");
        try{
            new EmployeePayrollData().startDate = new Date(Date.parse(startDate));
            dateError.textContent = "";
        }catch(e){ dateError.textContent = e};
    });
        
});

let save = ()=>{
    try{
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }catch (e){ return; }
}
function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }else{ employeePayrollList = [employeePayrollData]}
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
}

let createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById("#name");
    }catch(e){ setTextValue(".text-error",e);
                throw e}
    employeePayrollData.profileImage = getselectedValues("[name=profile]").pop();
    employeePayrollData.gender = getselectedValues("[name=gender]").pop();
    employeePayrollData.department = getselectedValues("[name=department]");
    employeePayrollData.salary = getInputValueById("#salary");
    let date = getInputValueById("#day") +" "+getInputValueById("#month") +" "+getInputValueById("#year");
    employeePayrollData.date = Date.parse(data);
    employeePayrollData.notes = getInputValueById("#notes");
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
const getselectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}
const getInputValueById = (id)=>{
    let value = document.querySelector(id).value;
    return value;
}
const getInputElementValue = (id) =>{
    let value = document.getElementById(id).value;
    return value;
}
const resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}
const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.value = value;
}
const setValue =(id,value) => {
    const element = document.querySelector(id);
    element.value = value;
}
