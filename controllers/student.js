import express from "express";

const allStudents = (req, res) => {
  res.send("All students");
};


const newStudent = (req,res) => {
    res.send("Create User")
}

const updateStudent = (req,res) => {
    res.send("Update user")
}

const deleteStudent = (req,res) => {
    res.send("Delete User")
}


export { allStudents, newStudent, updateStudent, deleteStudent }
