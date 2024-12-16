window.onload = async () => {
    try {
        const response = await fetch("http://localhost:3000/datasets");
        const data = await response.json();
        
        renderEvents(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function renderEvents(events) {
    const tableBody = document.querySelector("#savedEventsTable tbody");

    tableBody.innerHTML = '';

    events.forEach(event => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = event.id;  

        const nameCell = document.createElement("td");
        nameCell.textContent = event.name;  

        const urlCell = document.createElement("td");
        const link = document.createElement("a");
        link.href = event.url;  
        link.textContent = "View Event";
        link.target = "_blank"; 
        urlCell.appendChild(link);

        const typeCell = document.createElement("td");
        typeCell.textContent = event.type; 

        const testCell = document.createElement("td");
        testCell.textContent = event.test ? "True" : "False";  

        const timezoneCell = document.createElement("td");
        timezoneCell.textContent = event.timezone;  
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(urlCell);
        row.appendChild(typeCell);
        row.appendChild(testCell);
        row.appendChild(timezoneCell);

        tableBody.appendChild(row);
    });
}
