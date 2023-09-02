import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddData() {
    const [data, setdata] = useState({});
    const param = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (param.id > 0) {
            fetch("https://649d61ac9bac4a8e669daad7.mockapi.io/api/faculties/" + param.id, { method: "GET" })
                .then((res) =>  res.json() )
                .then((res) =>  setdata(res) );
        }
    }, []);

    return (
        <>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Faculty Name</label>
                <input type="text" value={data.FacultyName}   className="form-control" id="formGroupExampleInput" placeholder="First name" onChange={(e) => {
                    setdata({ ...data, FacultyName: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Faculty image</label>
                <input type="text" value={data.FacultyImage} className="form-control" id="formGroupExampleInput2" placeholder="Enter image Url" onChange={(e) => {
                    setdata({ ...data, FacultyImage: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Faculty Experience</label>
                <input type="text" value={data.FacultyEXP} className="form-control" id="formGroupExampleInput2" placeholder="18" onChange={(e) => {
                    setdata({ ...data, FacultyEXP: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Faculty Description</label>
                <input type="text" value={data.FacultyDes} className="form-control" id="inputAddress" placeholder="city" onChange={(e) => {
                    setdata({ ...data, FacultyDes: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Faculty Department</label>
                <input type="text" value={data.FacultyDepartment} className="form-control" id="InputEmail4" placeholder="ce/me/cv" onChange={(e) => {
                    setdata({ ...data, FacultyDepartment: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Faculty Address</label>
                <input type="text" value={data.FacultyAddress} className="form-control" id="InputEmail4" placeholder="address" onChange={(e) => {
                    setdata({ ...data, FacultyAddress: e.target.value });
                }} />
            </div>
            
            <div className="mb-3">
                <div className="btn btn-primary" onClick={() => {
                    if (Object.keys(data).length === 0) {
                        console.log("error");
                        alert("please enter the Faculty detail");
                    }
                    if (param.id > 0) {
                        navigate("/FacultyAdd/" + param.id)
                        fetch("https://649d61ac9bac4a8e669daad7.mockapi.io/api/faculties/" + param.id,
                            {
                                method: "put",
                                body: JSON.stringify(data),
                                headers: { "Content-Type": "application/json" }
                            }
                        )
                            .then((res) => { navigate("/faculty/" + param.id) });
                    }
                    else {
                        fetch("https://649d61ac9bac4a8e669daad7.mockapi.io/api/faculties",
                            {
                                method: "POST",
                                body: JSON.stringify(data),
                                headers: { "Content-Type": "application/json" }
                            }
                        )
                            .then((res) => { navigate("/api") });
                    }
                }}>
                    {param.id > 0 && "Edit "}
                    {!(param.id > 0) && "Add "}
                    Faculty
                </div>
            </div>
        </>
    );
}