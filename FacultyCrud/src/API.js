import { useEffect, useState } from "react";
import GetbyId from "./GetbyId";
import { Link, useNavigate } from "react-router-dom";

export default function ApiData() {
    // let data = [];
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://649d61ac9bac4a8e669daad7.mockapi.io/api/faculties")
            .then((res) => { return res.json() })
            .then((res) => { setData(res) });
    }, [])


    let formatedFaculty = data.map((fac) => {
        return (
            <>
                <div class="card col-2">
                    <img src={fac.FacultyImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{fac.FacultyName}</h5>
                        <p class="card-text">Faculty ID : {fac.FacultyID}</p>
                        <p class="card-text">Faculty Experience : {fac.FacultyEXP}</p>

                        <Link to={`/faculty/${fac.FacultyID}`} className="btn btn-primary me-2">
                            Details
                        </Link>

                        <a href="#" class="btn btn-danger" onClick={() => {
                            fetch("https://649d61ac9bac4a8e669daad7.mockapi.io/api/faculties" + "/" + fac.FacultyID, { method: "Delete" }
                            );
                            setData([
                                ...data.filter((e) => {
                                    return e.FacultyID !== fac.FacultyID;
                                })
                            ])
                        }}>Delete</a>
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            <button className="btn btn-success m-2" onClick={()=>{navigate("/addfaculty")}}>Add Faculty</button>
            <div className="row">{formatedFaculty}</div>
        </>
    )
}