import { Routes, Route } from 'react-router-dom'

import Home from '../views/Home.js'
import About from '../views/About.js'
import Attendance from '../views/Attendances/Attendance.js'
import UploadAttendance from '../views/Attendances/UploadAttendance.js'
import Solution from '../views/Solution.js'

function MyRouter(){

    return (
        <Routes>
           <Route path="/" element={<Home />} /> 
           <Route path="/about-us" element={<About />} /> 
           <Route path="/attendance" element={<Attendance />} /> 
           <Route path="/attendance/upload" element={<UploadAttendance />} /> 
           <Route path="/solutions" element={<Solution />} /> 
        </Routes>
    )
}

export default MyRouter;
