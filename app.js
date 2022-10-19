let serialNumber = document.getElementById("serialNumber");
let employeeName = document.getElementById("employeeName");
let fatherName = document.getElementById("fatherName");
let currentDesignation = document.getElementById("currentDesignation");
let currentWorkplace = document.getElementById("currentWorkplace");
let birthdate = document.getElementById("birthdate");
let ownDistrict = document.getElementById("ownDistrict");
let firstJoiningDesignation = document.getElementById("firstJoiningDesignation");
let firstJoiningDate = document.getElementById("firstJoiningDate");
let dateOfJoiningPresentPost = document.getElementById("dateOfJoiningPresentPost");
let dateOfJoiningPresentWorkplace = document.getElementById("dateOfJoiningPresentWorkplace");
let educationalQualification = document.getElementById("educationalQualification");
let dateOfRetirement = document.getElementById("dateOfRetirement");
let comments = document.getElementById("comments");

// button 
let btn = document.getElementById("btn");

// table body select
let tbody = document.getElementById('tbody');
// **********************************************************************************************

// add event listener Button
btn.addEventListener('click', addEmployee);

function addEmployee(){
   
// create element tr 
let tr = document.createElement('tr');

// create element td
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
let td4 = document.createElement('td');
let td5 = document.createElement('td');
let td6 = document.createElement('td');
let td7 = document.createElement('td');
let td8 = document.createElement('td');
let td9 = document.createElement('td');
let td10 = document.createElement('td');
let td11 = document.createElement('td');
let td12 = document.createElement('td');
let td13 = document.createElement('td');
let td14 = document.createElement('td');

// *********************************************************************


// append td into tr
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);
tr.appendChild(td6);
tr.appendChild(td7);
tr.appendChild(td8);
tr.appendChild(td9);
tr.appendChild(td10);
tr.appendChild(td11);
tr.appendChild(td12);
tr.appendChild(td13);
tr.appendChild(td14);
// ******************************
// append tr into tbody
tbody.appendChild(tr);

// ************************************


td1.innerText = serialNumber.value;
td2.innerText = employeeName.value;
td3.innerText = fatherName.value;
td4.innerText = currentDesignation.value;
td5.innerText = currentWorkplace.value;
td6.innerText = birthdate.value;
td7.innerText = ownDistrict.value;
td8.innerText = firstJoiningDesignation.value;
td9.innerText = firstJoiningDate.value;
td10.innerText = dateOfJoiningPresentPost.value;
td11.innerText = dateOfJoiningPresentWorkplace.value;
td12.innerText = educationalQualification.value;
td13.innerText = dateOfRetirement.value;
td14.innerText = comments.value;




// input field blank
serialNumber.value = "";
employeeName.value = "";
fatherName.value = "";
currentDesignation.value = "";
currentWorkplace.value = "";
birthdate.value = "";
ownDistrict.value = "";
firstJoiningDesignation.value = "";
firstJoiningDate.value = "";
dateOfJoiningPresentPost.value = "";
dateOfJoiningPresentWorkplace.value = "";
educationalQualification.value = "";
dateOfRetirement.value = "";
comments.value = "";

}





