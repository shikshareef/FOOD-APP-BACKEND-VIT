const express = require('express');
const router = express.Router();
const Student = require('../models/student.models.js'); // Adjust the path as necessary

// Route to register a student
router.post('/student/register_student', async (req, res) => {
    try {
        const { username, email, password, registernumber } = req.body;

        const newStudent = await Student.create({
            username,
            email,
            password,
            registernumber,
        });

        res.status(200).json({
            message: 'Student registered successfully',
            data: newStudent
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: 'Something went wrong. Not able to register at the moment'
        });
    }
});

//route handle login of a student

// Student login route
router.post('/student/student_login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the student by email
      const student = await Student.findOne({ email });
  
      // Check if the student exists and the password is correct
      if (student && student.password === password) {
        res.status(200).json({ success: true, message: 'Login successful', student });
      } else {
        res.status(401).json({ success: false, error: 'Invalid email or password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  });


module.exports = router;
