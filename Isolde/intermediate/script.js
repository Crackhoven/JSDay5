let empl = JSON.parse(employees);
console.log(empl)
console.log(empl[0])

let table = document.getElementById("rows");

function printRow() {
    for (let i = 0; i < empl.length; i++) {
        table.innerHTML += `<tr>
    <th scope="row">${empl[i]["Unique ID"]}</th>
    <td>${empl[i]["First Name"]}</td>
    <td>${empl[i]["Last Name"]}</td>
    <td>${empl[i]["Email address"]}</td>
    <td>${empl[i]["Job Title"]}</td>
    <td>${empl[i]["Salary"]}€</td>
  </tr>`;

    }
    return table;
}

console.log(printRow());



