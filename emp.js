document.addEventListener("onclick", function() {
    const tableContainer = document.getElementById("table-container");
    if (!tableContainer) {
        
        return;
    }
    generateTable(employees);
});

const employees = [
    {
        empId: 101,
        empName: "John Doe",
        empCompany: "Accenture",
        empSalary: 50000,
        empAddress: { empCity: "New York", empArea: "Downtown" }
    },
    {
        empId: 102,
        empName: "Jane Smith",
        empCompany: "Google",
        empSalary: 60000,
        empAddress: { empCity: "Los Angeles", empArea: "Beverly Hills" }
    },
    {
        empId: 103,
        empName: "Sam Wilson",
        empCompany: "Amazon",
        empSalary: 70000,
        empAddress: { empCity: "Chicago", empArea: "Lincoln Park" }
    }
];

function generateTable(data) {
    const tableContainer = document.getElementById("table-container");
    if (!tableContainer) return;
    
    tableContainer.innerHTML = "";

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Emp ID", "Name", "Company", "Salary", "City", "Area"];

    for (let headerText of headers) {
        const th = document.createElement("th");
        th.textContent = headerText;
        th.style.cursor = "pointer";
        th.onclick = () => sortTable(headers.indexOf(headerText));
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (let emp of data) {
        const row = document.createElement("tr");
        const values = [emp.empId, emp.empName, emp.empCompany, emp.empSalary.toLocaleString()];

        for (let value of values) {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        }
        
        // Nested loop for empAddress
        for (let key in emp.empAddress) {
            const td = document.createElement("td");
            td.textContent = emp.empAddress[key];
            row.appendChild(td);
        }
        
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

let ascending = true;
function sortTable(columnIndex) {
    employees.sort((a, b) => {
        let valA, valB;
        const fields = [
            a.empId, a.empName.toLowerCase(), a.empCompany.toLowerCase(),
            a.empSalary, a.empAddress.empCity.toLowerCase(), a.empAddress.empArea.toLowerCase()
        ];
        const fieldsB = [
            b.empId, b.empName.toLowerCase(), b.empCompany.toLowerCase(),
            b.empSalary, b.empAddress.empCity.toLowerCase(), b.empAddress.empArea.toLowerCase()
        ];
        valA = fields[columnIndex];
        valB = fieldsB[columnIndex];
        return ascending ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
    });
    ascending = !ascending;
    generateTable(employees);
}