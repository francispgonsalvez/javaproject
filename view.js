let viewdetails = new URLSearchParams(document.location.search);
let id = viewdetails.get('id');
// alert(id);
function place(id){
    fetch(`http://localhost:3000/employees/${id}`,{
        method:"GET",
    })
    .then(res => res.json())
    .then(employees =>{
        console.log(employees);
        // alert(id);
        var empdetails=document.getElementById("view-details");
        empdetails.innerHTML=`
        <div class="output-form">
        <div class="background">
          <img src="project.img/blue Background.png">
        </div>
        <div class="profile">
          <img src="project.img/Avatar.png">
          <h5>${employees.firstName +" " + employees.lastName}</h5>
          <p>${employees.email}</p>
        </div>
        <div class="general">
          <div class="info">
            <h6>Gender</h6>
            <p>${employees.gender}</p>
          </div>
          <div class="info">
            <h6>Age</h6>
            <p>${ageCalc()}</p>
          </div>
          <div class="info">
            <h6>Date of Birth</h6>
            <p>${Date(employees.dob)}</p>
          </div>
        </div>
        
          <div class="general">
          <div class="info">
            <h6>Mobile Number</h6>
            <p>${employees.phone}</p>
          </div>
          <div class="info">
            <h6>Qualifications</h6>
            <p>${employees.qualifications}</p>
          </div>
        </div>
          <div class="general">
          <div class="info">
            <h6>Address</h6>
            <p>${employees.address + ", " + employees.city + ", " + employees.state + ", " + employees.country}</p>
          </div>
          <div class="info">
            <h6>Username</h6>
            <p>${employees.username}</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
              <div class="side">
              <button type="button" class="btn btn-danger btn-lg">Delete</button>
              <button type="button" class="button btn btn-lg">Add Details</button>
              </div>
          </div>
        </div>
        </div>`;
    })
}
place(id);