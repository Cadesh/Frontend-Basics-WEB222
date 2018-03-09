// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

//makes the JS run after the window is loaded
window.onload = function () {

    //create the table
    var lTable = document.querySelector("#outputTable");
    var lhtml = buildTable(users);

   // lTable.innerHTML = "<p>teste</p>";SS
    lTable.innerHTML += "<table border='1'><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Email</th></tr>"+ lhtml +"</table>";

};

buildTable = function(obj) {
    var table = "";

    for (var j = 0; j < obj.length; j++) {
        table += "<tr><td>"+ obj[j]["first_name"] +"</td>"; 
        table += "<td>"+ obj[j]["last_name"] +"</td>"; 
        table += "<td>"+ obj[j]["age"] +"</td>"; 
        table += "<td><a href='mailto:"+ obj[j]["email"] +"'>"+ obj[j]["email"] +"</a></td></tr>"; 
    }
    return table;
};