name_student = [];

function submit()
{
var name1 = document.getElementById("name_of_the_student_1").value;
var name2 = document.getElementById("name_of_the_student_2").value;
var name3 = document.getElementById("name_of_the_student_3").value;
var name4 = document.getElementById("name_of_the_student_4").value;

name_student.push(name1);
name_student.push(name2);
name_student.push(name3);
name_student.push(name4);

console.log(name_student);

document.getElementById("display_name").innerHTML=name_student;
document.getElementById("submit_button").style.display="none";
document.getElementById("sorting_button.style").style.display = "inline-block";
}

