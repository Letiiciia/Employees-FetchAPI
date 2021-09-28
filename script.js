function fetchJson(url) {
  return fetch(url).then((r) => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error(r.statusText);
    }
  });
}

let employeesjson = fetchJson("http://localhost:3000/employees");
let rolesjson = fetchJson("http://localhost:3000/roles");

async function init() {
  try {
    let [employees, roles] = await Promise.all([employeesjson, rolesjson,]);
    addEmployeesTabela(employees, roles);
  } catch (error) {
    document.getElementById("app").innerHTML = "Erro ao carregar dados.";
    console.log(error);
  }
}

function addEmployeesTabela(employees, roles) {
  let tbody = document.getElementById("tbody");

    let arrayEmployees = [];
    let arrayRoles = [];
  for(let i = 0; i < employees.length; i++){
    console.log(employees[i]);
    arrayEmployees.push(employees[i]);
  }
//console.log(arrayEmployees);

  for(let i = 0; i < roles.length; i++){
    console.log(roles[i]);
    arrayRoles.push(roles[i]);
  }

//console.log(arrayRoles);

/* const EmployeesIterado = employees.map(({id, name, salary, role_id}) => ({
id: id,
name: name,
salary: salary,
role: roles.find((role) => role.id ===role_id).name
}))
  
console.log("final" +EmployeesIterado.name); */


for (let i = 0; i < arrayEmployees.length; i++) {
    let tr = tbody.insertRow();

    let td_id = tr.insertCell();
    let td_name = tr.insertCell();
    let td_role = tr.insertCell();
    let td_salary = tr.insertCell();

   
    let id = arrayEmployees[i].id;
    console.log(id);
    let name = arrayEmployees[i].name;
    /* let role = arrayRoles[i].find((role) => role.id == arrayEmployees[i].role_id );
    let role_name = role.name;  */
    let salary = arrayEmployees[i].salary;

    td_id.innerText = id;
    td_name.innerText = name;
   /* td_role.innerText = role_name; */
    td_salary.innerText = salary;
  }
}
init();