class EmployeePayrollData{
    id;
    name;
    profileImage;
    gender;
    department;
    salry;
    startDate;

    get id(){ return this._id; }
    set id(id){ this._id = id; }

    get name(){ return this.name; }
    set name(name){ 
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-z]{3,}$");
        if(nameRegex.test(name)){
            this._name = name; }
        else{ throw "Incorrect Name";}
    }

    get profileImage(){ return this.profileImage; }
    set profileImage(profileImage){ this._profileImage = profileImage; }

    get gender(){ return this.gender; }
    set gender(gender){ this.gender = gender; }

    get department(){ return this.department; }
    set department(department){ this._department = department; }

    get salary(){ return this.salary; }
    set salary(salary){ this._salary = salary; }

    get startDate(){ return this.startDate; }
    set startDate(startDate){
        let now =new Date();
        if(startDate > now) throw "start date is a Future Date!";
        this._startDate = startDate; 
    }

    get notes(){ return this.notes; }
    set notes(notes){ this._notes = notes; }
    
    toString(){
        const options = { year: "numeric",month= "long", day: "numeric"};
        const empDate = !this.startDate ? "undefined" :
                         this.startDate.toLocalDateString("en-US",options);
        
        return  "id=" + this.id +", name='" + this.name + ", gender='" + this.gender + 
        ", profilePic='" + this.profilePic + ", department='" + this.department +
        ", salary=" + this.salary + ", startDate='" + empDate + ", notes=" + this.notes;
    }
}