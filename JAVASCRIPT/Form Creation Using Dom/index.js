const form=document.querySelector("#studentForm");
const nameInput=document.querySelector("#name");
const emailInput=document.querySelector("#email");
const courseInput=document.querySelector("#course");
const tableBody=document.querySelector("#tableBody");
function displayStudent(){
    const students=JSON.parse(localStorage.getItem("students"))||[];
     tableBody.innerHTML="";
  
    students.forEach((student) => {
        const row=document.createElement("tr");
        const nameCell=document.createElement("td");
        const emailCell=document.createElement("td");
        const courseCell=document.createElement("td");
       
        nameCell.textContent=student.name;
        emailCell.textContent=student.email;
        courseCell.textContent=student.course;
        row.append(nameCell,emailCell,courseCell);
        tableBody.append(row);
    });
}



form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const student={
        name:nameInput.value,
        email:emailInput.value,
        course:courseInput.value
    };
    console.log(student);

    const students=JSON.parse(localStorage.getItem("students"))||[];

    students.push(student);
    localStorage.setItem("students",JSON.stringify(students));
    form.reset();
    displayStudent();
});
displayStudent()