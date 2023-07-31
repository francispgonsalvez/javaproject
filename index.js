function refresh(){
    fetch("http://localhost:3000/employees")
    .then((res)=>res.json())
    .then((employees)=>{
        console.log(employees);
        const table =document.getElementById("employee-table");
        table.innerHTML="";

        var i=1;
        employees.forEach((employees) => {

            var id=employees.id;

            const element=table.insertRow();
            var sino=element.insertCell();
            sino.innerHTML="#0"+i;

            var name=element.insertCell();
            name.innerHTML=employees.firstName+" "+employees.lastName;

            var email=element.insertCell();
            email.innerHTML=employees.email;

            var phone=element.insertCell();
            phone.innerHTML=employees.phone;

            var gender=element.insertCell();
            gender.innerHTML=employees.gender;

            var state=element.insertCell();
            state.innerHTML=employees.state;

            var country=element.insertCell();
            country.innerHTML=employees.country;

            var button=element.insertCell();
            button.innerHTML=`
            <button class="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis"></i>
            </button>
            <ul class="dropdown-menu "id="boot" aria-labelledby="dropdownMenuButton1">
                  <button class="action"><a class="link" href="http://127.0.0.1:5500/viewform.html?id=${id}" target="_blank"><i class="fa fa-sharp fa-light fa-eye" id="buttonDropdown_action" ></i>view</a></button>
                  <button class="action" data-bs-toggle="modal" data-bs-target="#updateform" onclick="updateform('${id}')"><i class="fa fa-sharp fa-light fa-pen" id="buttonDropdown_action"></i>edit</button>
                  <button class="action" data-bs-toggle="modal" data-bs-target="#db" onclick="trash('${id}')"><i class="fa fa-sharp fa-light fa-trash" id="buttonDropdown_action"></i>delete</button>
            </ul>`
            i++;
        });
    })
}
refresh();
    
var modal = document.getElementById("formmodal");
modal.addEventListener('submit', (f)=>{
    f.preventDefault();

    var salutation = document.getElementById("salutation").value;
    console.log(salutation);

    var firstname = document.getElementById("firstname").value;
    console.log(firstname);

    var lastname = document.getElementById("lastname").value;
    console.log(lastname);

    var email = document.getElementById("exampleInputEmail1").value;
    console.log(email);

    var phone = document.getElementById("typePhone").value;
    console.log(phone);

    var date = document.getElementById("date").value;
    var entereddob = dateformat(date);
    
    function dateformat(dob){
        const array = dob.split("-")
        let day = array[0];
        let month=array[1];
        let year = array[2];
        let outputdate = year + "-" + month + "-" + day;
        return outputdate;
    }
    function ageCalc(){
              var birthDate = new Date(employees.dob);
              var currentDate = new Date();
             console.log(currentDate);
             console.log(birthDate);
             var age = currentDate.getFullYear()-birthDate.getFullYear();
              return age;
              }
    

    var gender = document.getElementsByName("gender");
    for(i=0;i<gender.length;i++){
        if(gender[i].checked){
            var selectedgender = gender[i].value;
        }
    }
    console.log(selectedgender);

    var username = document.getElementById("Username").value;
    console.log(username);

    var password = document.getElementById("password").value;
    console.log(password)

    var qualification = document.getElementById("TextInput").value;
    console.log(qualification);

    var address = document.getElementById("inputAddress2").value;
    console.log(address);

    var country = document.getElementById("inputcountry").value;
    console.log(country);

    var state = document.getElementById("inputState").value;
    console.log(state);

    var city = document.getElementById("inputCity").value;
    console.log(city);

    var pin = document.getElementById("inputpin").value;
    console.log(pin);



const object={
    address:address,
    city:city,
    country:country,
    dob:entereddob,
    email:email,
    firstName:firstname,
    gender:selectedgender,
    lastName:lastname,
    password:password,
    phone:phone,
    qualifications:qualification,
    salutation:salutation,
    state:state,
    username:username
}

fetch("http://localhost:3000/employees",{
    method:"post",headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(object)
})
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        
    // document.getElementById("staticBackdrop").style.display="none";
    })
    // reload();
    refresh();
})

var firstname=document.forms["formmodal"]["firstname"];
var lastname=document.forms["formmodal"]["lastname"];
var email=document.forms["formmodal"]["exampleInputEmail1"];
var phone=document.forms["formmodal"]["typePhone"];
var qualification=document.forms["formmodal"]["TextInput"];
var address=document.forms["formmodal"]["inputAddress2"];
var country=document.forms["formmodal"]["inputcountry"];
var state=document.forms["formmodal"]["inputState"];
var city=document.forms["formmodal"]["inputCity"];
var pin=document.forms["formmodal"]["inputpin"];
var username=document.forms["formmodal"]["Username"];
var password=document.forms["formmodal"]["password"];
var salutation=document.forms["formmodal"]["salutation"];

function loop(){

    if(firstname.value==""){
        firstname.style.border="1px solid red";
        firstname.focus();
        return false;
    }
    else{
    firstname.style.border="1px solid green";
    }

    if(lastname.value==""){
        lastname.style.border="1px solid red";
        lastname.focus();
        return false;
    }
    else{
    lastname.style.border="1px solid green";
    }

    if(email.value==""){
        email.style.border="1px solid red";
        email.messages="please";
        email.focus();
        return false;
    }
    else{
    email.style.border="1px solid green";
    }

    // if(phone.value==""){
    //     phone.style.border="1px solid red";
    //     phone.focus();
    //     return false;
    // }
    // else{
    // phone.style.border="1px solid green";
    // }
    var mobval=document.getElementById("typePhone").value;
    var mobsval=/^\d{10}$/;
    if(mobsval.test(mobval)){
        document.getElementById("typePhone").style.border="1px solid green";
    }
    else{
        document.getElementById("typePhone").style.border="1px solid red";
        document.getElementById("typePhone").focus();
    }

    if(qualification.value==""){
        qualification.style.border="1px solid red";
        qualification.focus();
        return false;
    }
    else{
    qualification.style.border="1px solid green";
    }

    if(address.value==""){
        address.style.border="1px solid red";
        address.focus();
        return false;
    }
    else{
    address.style.border="1px solid green";
    }

    if(country.value=="select country"){
        country.style.border="1px solid red";
        country.focus();
        return false;
    }
    else{
    country.style.border="1px solid green";
    }

    if(state.value=="select state"){
        state.style.border="1px solid red";
        state.focus();
        return false;
    }
    else{
    state.style.border="1px solid green";
    }

    if(city.value==""){
        city.style.border="1px solid red";
        city.focus();
        return false;
    }
    else{
    city.style.border="1px solid green";
    }

    if(pin.value==""){
        pin.style.border="1px solid red";
        pin.focus();
        return false;
    }
    else{
    pin.style.border="1px solid green";
    }

    if(username.value==""){
        username.style.border="1px solid red";
        username.focus();
        return false;
    }
    else{
    username.style.border="1px solid green";
    }

    if(password.value==""){
        password.style.border="1px solid red";
        password.focus();
        return false;
    }
    else{
    password.style.border="1px solid green";
    }

    if(salutation.value=="Select"){
        salutation.style.border="1px solid red";
        salutation.focus();
        return false;
    }
    else{
    salutation.style.border="1px solid green";
    }

    if(formmodal.value==""){
        document.getElementById("staticBackdrop").style.display="block";
    }
    else{
        document.getElementById("staticBackdrop").style.display="none";
        refresh();
        reload();
    }
}
document.getElementById("formmodal").reset();

function trash(id){
    var popup = document.getElementById("confirmdel")
    popup.addEventListener('click',()=>{
        fetch(`http://localhost:3000/employees/${id}`,{
        method:"DELETE",                                                       
    })
    // alert("Deleted sucessfully");
    
    document.getElementById("deletesucess").style.display="none";
    refresh();
    })
    
}

function updateform(id){
    fetch(`http://localhost:3000/employees/${id}`,{
        method:"get",                                                        
    })
    .then(res => res.json())
    .then(employees =>{
        console.log(employees);
        // const editform=document.getElementById("edit-modal");
        document.getElementById("edit-salutation").value=employees.salutation;
        document.getElementById("edit-firstname").value=employees.firstName;
        document.getElementById("edit-secname").value=employees.lastName;
        document.getElementById("edit-mail").value=employees.email;
        document.getElementById("edit-phone").value=employees.phone;
        document.getElementById("edit-date").value=employees.dob;
        document.getElementsByName("edit-gender").value=employees.gender;
        document.getElementById("edit-qualification").value=employees.qualifications;
        document.getElementById("edit-Address").value=employees.address;
        document.getElementById("edit-state").value=employees.state;
        document.getElementById("edit-country").value=employees.country;
        document.getElementById("edit-place").value=employees.city;
        document.getElementById("edit-pin").value=employees.pin;
        document.getElementById("edit-username").value=employees.username;
        document.getElementById("edit-password").value=employees.password;
    })

    var onobject = document.getElementById("edit-modal")
    onobject.addEventListener('submit',function(e){

        e.preventDefault();
        // alert("upload");


        let onobj ={
            salutation:document.getElementById("edit-salutation").value,
            firstName:document.getElementById("edit-firstname").value,
            lastName:document.getElementById("edit-secname").value,
            email:document.getElementById("edit-mail").value,
            phone:document.getElementById("edit-phone").value,
            dob:document.getElementById("edit-date").value,
            gender:document.getElementsByName("edit-gender").value,
            qualifications:document.getElementById("edit-qualification").value,
            address:document.getElementById("edit-Address").value,
            state:document.getElementById("edit-state").value,
            country:document.getElementById("edit-country").value,
            city:document.getElementById("edit-place").value,
            pin:document.getElementById("edit-pin").value,
            username:document.getElementById("edit-username").value,
            password:document.getElementById("edit-password").value,




        }
        


// alert(onobj.lastName);
        fetch(`http://localhost:3000/employees/${id}`,{
             method:"PUT",
             headers:{
                "content-type":"application/json",
             },
             body:JSON.stringify(onobj),

        })
        
        .then(res=> res.json())
        .then(employees =>{console.log(employees)

            // alert("warning");
            refresh();
            document.getElementById("updateform").style.display="none";
        })
        
        // document.getElementById("").style.display="none";
    })
}

// function addempl(){
//     document.getElementById("addsuccess").style.display="none";
//     refresh();
// }
function editempl(){
    document.getElementById("editsuccess").style.display="none";
    refresh();
}

function reload(){
    // document.getElementById("formmodal").reset();
    location.reload();
}