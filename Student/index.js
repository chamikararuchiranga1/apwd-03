console.log("run");

const student = []
const saveUser = () => {
    const name = document.getElementById('name').value
    const address = document.getElementById('adress').value
    const age = document.getElementById('age').value
    const contact = document.getElementById('contact').value

    const obj = {
        name: name,
        address: address,
        age: age,
        contact: contact,
    }

    student.push(obj);
    getUser();
}
const getUser = () => {
    let data = "";
    for(let i=0; i<student.length; i++){
        data += `<div class="card p-2 m-2" style="width: 18rem;">
        <h6 class="card-subtitle m-1 text-body-secondary">First Name : ${student[i].name}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary">Address : ${student[i].address}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary">Age : ${student[i].age}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary">Contact : ${student[i].contact}</h6>
        <button onclick="deleteUser(${i})" type="button" class="btn btn-danger m-1">Delete</button>
    </div>`
    }
    document.getElementById('display').innerHTML = data
}

getUser()

const deleteUser = (id) => {
    student.splice(id, 1);
    getUser()
}