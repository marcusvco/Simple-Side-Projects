function fetchJson(url) {
    return fetch(url).then((r) => {
        return r.json();
    });
}

fetchJson("http://localhost:3000/employees").then((employees) => {
    fetchJson("http://localhost:3000/roles").then((roles) => {
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
    });
});

function ascName(emp){
  emp.sort((i1, i2) => {
    if (i1.name < i2.name) {
      return -1;
    } else if (i1.name > i2.name) {
      return 1;
    } else {
      return 0;
    }
})
}

function desName(emp){
  emp.sort((i1, i2) => {
    if (i1.name > i2.name) {
      return -1;
    } else if (i1.name < i2.name) {
      return 1;
    } else {
      return 0;
    }
  })
}

function ascSalary(emp){
  emp.sort((i1, i2) => {
    if (i1.salary < i2.salary) {
      return -1;
    } else if (i1.salary > i2.salary) {
      return 1;
    } else {
      return 0;
    }
  })
}

function desSalary(emp){
  emp.sort((i1, i2) => {
    if (i1.salary > i2.salary) {
      return -1;
    } else if (i1.salary < i2.salary) {
      return 1;
    } else {
      return 0;
    }
  })
}
  
function renderTable(employees, roles) {
  var cont = 0;
  let data = employees.filter((item) => item.role_id == 1 || item.role_id == 12)

  if(document.getElementById("sortBy").value == desName){
    desName(employees)
  }

  let rows = employees.map((employee) => {
      let role = roles.find((role) => role.id == employee.role_id);
      return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td><td>${employee.salary}</td></tr>`;
  });
  for(item of rows){
    cont++;
  }
  return `<h2>Tabela de Funcionarios, Contador: ${cont}</h2><table><tr><th>ID</th><th>Name</th><th>Role</th><th>Salary</th></tr>${rows.join("")}</table>`;
}

window.onload = () => {
  let sortByButton = document.getElementById("sortBy");
  sortByButton.addEventListener("change", (evnt) => {
    console.log(evnt.target.value)
    renderTable()
  })
}