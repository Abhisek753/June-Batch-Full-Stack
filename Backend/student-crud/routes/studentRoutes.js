
const express=require("express");
const { getStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require("../controllers/studentcontollers");

const router=express.Router();

// GET ALL STUDENTS
 router.get("/",getStudents);

// GET SINGLE STUDENTS
 router.get("/:id",getStudentById);

// CREATE STUDENT
router.post("/",createStudent)

//UPDATE STUDENT
 router.put("/:id",updateStudent);


//DELETE STUDENT

router.delete("/:id",deleteStudent);

module.exports=router;
