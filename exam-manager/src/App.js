import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Login from './Components/admin/Login';
import Logins from './Components/students/Logins';
import Logint from './Components/teachers/Logint';
import Home from './Home';
import Adminreg from './Components/admin/Adminreg';
import Admindash from './Components/admin/Admindash';
import ClassList from './Components/classallocation/classrooms/ClassList';
import ClassCreation from './Components/classallocation/ClassCreation';
import Navbar from './Components/Navbars/Navbar';
import ClassroomEdit from './Components/classallocation/classrooms/ClassroomEdit';
import AddStudents from './Components/students/AddStudents';
import StudentsList from './Components/students/StudentsList';
import AddTeachers from './Components/teachers/AddTeachers';
import TeachersList from './Components/teachers/TeachersList';
import AddSubjects from './Components/subjects/AddSubjects';
import SubjectList from './Components/subjects/SubjectList';
import RegSample from './RegSample';
import AddTimetable from './Components/timetable/AddTimetable';
import ExamList from './Components/timetable/ExamList';




function App() {
  return (
   <Router>
      <Routes>
        <Route exact path='/' element={<div><Home/></div>} />
        <Route path='/classes' element={<ClassList/>} />
        <Route path='/classroom' element={<ClassCreation/>} />
        <Route path='/admin' element={<div><Navbar/><Login/></div>} />
        <Route path='/student' element={<div><Navbar/><Logins/></div>} />
        <Route path='/teacher' element={<div><Navbar/><Logint/></div>} />
        <Route path='/adminreg' element={<div><Navbar/><Adminreg/></div>} />
        <Route path='/admindash' element={<Admindash/>} />
        <Route path='/editclassroom' element={<ClassroomEdit/>} />
        <Route path='/addstudent' element={<AddStudents/>} />
        <Route path='/students' element={<StudentsList/>} />
        <Route path='/addteacher' element={<AddTeachers/>} />
        <Route path='/teachers' element={<TeachersList/>} />
        <Route path='/addsubject' element={<AddSubjects/>} />
        <Route path='/subjects' element={<SubjectList/>} />
        <Route path='/schedule' element={<AddTimetable/>} />
        <Route path='/exams' element={<ExamList/>} />


        <Route path='/geethu' element={<RegSample/>} />





      </Routes>
    </Router>
  );
}

export default App;