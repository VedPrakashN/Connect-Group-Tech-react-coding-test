import axios from "axios";
import { Link } from 'react-router-dom' 
import { useState } from "react";

function UploadAttendance() {

    const [errorList, setErrorList] = useState({})
    const [excelFile, setExcelFile] = useState([]);

    const handleExcelFile = (e) => {

        setExcelFile({ excel: e.target.files[0] });
    }

    const submitAttendace = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('excel', excelFile.excel);

        axios.post(`http://localhost:8000/api/attendance`,formData)
            .then(res => {
                console.log(res.data);
                alert(res.data.message);
                this.excelFile = "";
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data, 'error');

                    if(error.response.status === 422){
                        setErrorList(error.response.data.errors)
                    }
                    if(error.response.status === 500){
                        alert(error.response.data)
                    }
                }
                console.log('Error', error.message);
                console.log(error.config);
            });
    }

    return (
        <div>
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Upload Attendance
                        <Link to="/attendance" className='btn btn-danger float-end'>Back</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <form onSubmit={submitAttendace} method="POST" encType="multipart/form-data">

                        <div className="mb-3">
                            <label>Upload Excel</label>
                            <input type="file" name="excel" onChange={handleExcelFile} className="form-control" />
                            <span className="text-danger">{errorList.excel}</span>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) 
}

export default UploadAttendance;
