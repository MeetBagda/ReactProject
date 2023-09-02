import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function GetbyId() {
    const [faculty, setFaculty] = useState({});
    const param = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://649d61ac9bac4a8e669daad7.mockapi.io/api/faculties/' + param.id)
            .then((res) => res.json())
            .then((data) => setFaculty(data));
    }, []);

    
    const handleDelete = () => {
        fetch('https://649d61ac9bac4a8e669daad7.mockapi.io/api/faculties/' + faculty.FacultyID, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                setFaculty({});
                navigate("/api")
                
            }
        })
        .catch(error => {
            console.error("Error deleting faculty:", error);
        });
    };

    return (
        <div className="detail-container ms-3">
            <h2 className="detail-heading">Faculty Details</h2>
            <Link to="/api" className="btn btn-primary">Back</Link>
          
            <button className="btn btn-danger ms-2" onClick={handleDelete}>Delete</button>

            <Link to={"/edit/" + param.id} className="btn btn-success ms-2">Edit</Link>

            <div className="faculty-card">
                <img className="faculty-image image-fluid col-2 mb-3 mt-3" src={faculty.FacultyImage} alt={faculty.FacultyName} />
                <div className="faculty-info">
                    <p className="faculty-id fs-3">ID: {faculty.FacultyID}</p>
                    <p className="faculty-name fs-3">Name: {faculty.FacultyName}</p>
                    <p className="faculty-exp fs-3">Experience: {faculty.FacultyEXP}</p>
                    <p className="faculty-desc fs-3">Description: {faculty.FacultyDes}</p>
                    <p className="faculty-dept fs-3">Department: {faculty.FacultyDepartment}</p>
                    <p className="faculty-address fs-3">Address: {faculty.FacultyAddress}</p>
                </div>
            </div>
        </div>
    );
}
