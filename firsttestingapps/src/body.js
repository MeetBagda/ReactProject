function Maincontaint() {
    return (
        <div className='col-8'>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    );
}

function Side() {
    return (
        <div className='col-4 p-2'>
            <ul class="list-group">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
        </div>
    );
}

function Faculties(){
    
        let arr = [
            {
                FacultyID: 1,
                FacultyName: "Dr. Gopi Sanghani",
                FacultyDesignation: "Dean - School of Computer Science",
                FacultyEducationQualification: "Ph.D. , M.E. (CE)",
                FacultyExperience: "22+ Years",
                FacultyWorkingSince: "Jul-2012",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg",
            },
            {
                FacultyID: 2,
                FacultyName: "Dr. Nilesh Gambhava",
                FacultyDesignation: "Professor",
                FacultyEducationQualification: "Ph.D. , M.E. (CE)",
                FacultyExperience: "19+ Years",
                FacultyWorkingSince: "Jul-2009",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
            },
            {
                FacultyID: 3,
                FacultyName: "Dr. Pradyumansinh Jadeja",
                FacultyDesignation: "Associate Professor",
                FacultyEducationQualification: "Ph.D. , M.E. (CE)",
                FacultyExperience: "17+ Years",
                FacultyWorkingSince: "Jul-2009",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
            },
            {
                FacultyID: 4,
                FacultyName: "Prof. Maulik Trivedi",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.Tech. (CSE)",
                FacultyExperience: "14+ Years",
                FacultyWorkingSince: "Jun-2009",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg",
            },
            {
                FacultyID: 5,
                FacultyName: "Prof. Dixita Kagathara",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.Tech. (Web Technology)",
                FacultyExperience: "13+ Years",
                FacultyWorkingSince: "Jul-2009",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/9---28-04-2023-02-06-37.jpg",
            },
            {
                FacultyID: 6,
                FacultyName: "Prof. Rupesh Vaishnav",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.E. (CE)",
                FacultyExperience: "14+ Years",
                FacultyWorkingSince: "May-2013",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/10---28-04-2023-02-07-03.jpg",
            },
            {
                FacultyID: 7,
                FacultyName: "Prof. Swati Sharma",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.Tech. (CSE)",
                FacultyExperience: "14+ Years",
                FacultyWorkingSince: "May-2013",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/11---29-04-2023-01-44-21.jpg",
            },
            {
                FacultyID: 8,
                FacultyName: "Prof. Arjun Bala",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.Tech. (CSE)",
                FacultyExperience: "12+ Years",
                FacultyWorkingSince: "Jul-2013",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
            },
            {
                FacultyID: 9,
                FacultyName: "Prof. Mayur Padia",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.E. (CE)",
                FacultyExperience: "13+ Years",
                FacultyWorkingSince: "Jul-2011",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/13---28-04-2023-02-07-48.jpg",
            },
            {
                FacultyID: 10,
                FacultyName: "Prof. Vijay Shekhat",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.E. (CE)",
                FacultyExperience: "10+ Years",
                FacultyWorkingSince: "Jun-2012",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/16---28-04-2023-02-08-00.jpg",
            },
            {
                FacultyID: 11,
                FacultyName: "Prof. Naimish Vadodariya",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.E. (CE)",
                FacultyExperience: "9+ Years",
                FacultyWorkingSince: "Jun-2015",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/214---28-04-2023-02-08-35.jpg",
            },
            {
                FacultyID: 12,
                FacultyName: "Prof. UmeshKumar Thoriya",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.Tech. (CSE)",
                FacultyExperience: "9+ Years",
                FacultyWorkingSince: "Jul-2015",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/221---28-04-2023-02-08-50.jpg",
            },
            {
                FacultyID: 13,
                FacultyName: "Prof. Jayesh Vagadiya",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.E (CE)",
                FacultyExperience: "7+ Years",
                FacultyWorkingSince: "Jul-2015",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/219---28-04-2023-02-09-01.jpg",
            },
            {
                FacultyID: 14,
                FacultyName: "Prof. Krunal Vyas",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.Tech.(ICT), B.E. (EC)",
                FacultyExperience: "8+ Years",
                FacultyWorkingSince: "Jul-2018",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/290---28-04-2023-02-09-16.jpg",
            },
            {
                FacultyID: 15,
                FacultyName: "Prof. Jay Dhamsaniya",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "M.E. (E.C.), B.Tech. (E.C.)",
                FacultyExperience: "10+ Years",
                FacultyWorkingSince: "Jul-2012",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/46---28-04-2023-02-09-28.jpg",
            },
            {
                FacultyID: 16,
                FacultyName: "Prof. Mehul Bhundiya",
                FacultyDesignation: "Assistant Professor",
                FacultyEducationQualification: "BE (CE), ME (CE)",
                FacultyExperience: "8+ Years",
                FacultyWorkingSince: "Aug-2018",
                FacultyImage:
                    "https://darshan.ac.in/U01/Faculty-Photo/294---28-04-2023-02-09-43.jpg",
            }
        ];
        let Faculty = arr.map((fac) => {
            return (
    
                <div class="card col-3" >
                    <img class="card-img-top" src={fac.FacultyImage} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{fac.FacultyName}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
    
            );
        });
        return (
            <>
                <div class="container">
                    <div className="row">{Faculty}</div>
                </div>
    
            </>
        );
}

function Body() {
    return (
        <div className='container'>
            <div className='row'>
                <Faculties/>
                <Maincontaint />
                <Side />
            </div>
        </div>
    );
}

export default Body;