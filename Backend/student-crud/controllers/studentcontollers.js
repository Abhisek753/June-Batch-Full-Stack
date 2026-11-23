
let students=[
    {
        id:1,
        name:"Ankita",
        age:20,
        email:"ankita@example.com"
    },
    {
        id:2,
        name:"Piyush",
        age:22,
        email:"piyush@example.com"
    },
    {
        id:3,
        name:"Abhishek",
        age:21,
        email:"abhishek@example.com"
    }
]

const getStudents=(req,res)=>{
 res.status(200).json({
    success:true,
    data:students
 })
}

const getStudentById=(req,res)=>{
  const id=Number(req.params.id);
  const student=students.find((student)=>student.id===id);
    if(!student){
        return res.status(404).json({
            success:false,
            message:"Student not found"
        })
    }
    res.status(200).json({
        success:true,
        data:student
    })

}
const createStudent=(req,res)=>{
  const {name,age,email}=req.body;
  if(!name || !age || !email){
    return res.status(400).json({
        success:false,
        message:"Please provide name, age and email"
    })
  };
  const newStudent={
    id:students.length+1,
    name,
    age,
    email
  };
  students.push(newStudent);
  res.status(201).json({
    success:true,
    data:newStudent
  })
}
const updateStudent=(req,res)=>{
   res.send("Update student");
}
const deleteStudent=(req,res)=>{
   const id=Number(req.params.id);
   const studentIndex=students.findIndex((student)=>student.id===id);
    if(studentIndex===-1){
        return res.status(404).json({
            success:false,
            message:"Student not found"
        })
    }
    students.splice(studentIndex,1);
    res.status(200).json({
        success:true,
        message:"Student deleted successfully"
    })
}
module.exports={
    getStudents,getStudentById,createStudent,updateStudent,deleteStudent
}