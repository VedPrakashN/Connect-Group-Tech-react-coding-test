import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'
import Loading from '../../components/Loading.js'

function Attendance() { 

    const [loading, setLoading] = useState(true);
    const [attendances, setAttendances] = useState([]);

    useEffect(() => {
      
        axios.get(`http://localhost:8000/api/attendance`).then(res => {
            console.log(res)
            setAttendances(res.data.attendances);
            setLoading(false);
        });
    
    }, [])

    if(loading){
        return (
            <Loading />
        )
    }

    var allAttendances = "";

    allAttendances = attendances.map( (item, index) => {
        return (
            <tr key={index}>
                <td>{item.employee.name}</td>
                <td>{item.schedule.shift.name}</td>
                <td>{item.check_in}</td>
                <td>{item.check_out}</td>
                <td>{item.working_hours}</td>
            </tr>
        )
    });

    return (
        <div>
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Attendance List
                        <Link to="/attendance/upload" className='btn btn-primary float-end'>Upload Attendance</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Emp Name</th>
                                <th>Shift Name</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Total Working Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allAttendances}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Attendance;
