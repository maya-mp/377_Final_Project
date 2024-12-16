window.onload = async () => {
    // fetch saved events 
    try {
        const response = await fetch("http://localhost:3000/datasets");
        const data = await response.json();
        
        // Call renderEvents function with the fetched data
        renderEvents(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function renderEvents(events) {
    const tableBody = document.querySelector("#savedEventsTable tbody");

    // Clear any existing rows in the table body (optional)
    tableBody.innerHTML = '';

    // Iterate over the events and create table rows
    events.forEach(event => {
        // Create a new table row
        const row = document.createElement("tr");

        // Create and append table cells for each event property (assuming 'id', 'name', 'url', etc.)
        const idCell = document.createElement("td");
        idCell.textContent = event.id;  // Assuming the event object has an 'id' field

        const nameCell = document.createElement("td");
        nameCell.textContent = event.name;  // Assuming the event object has a 'name' field

        const urlCell = document.createElement("td");
        const link = document.createElement("a");
        link.href = event.url;  // Assuming the event object has a 'url' field
        link.textContent = "View Event";
        link.target = "_blank";  // Opens in a new tab
        urlCell.appendChild(link);

        const typeCell = document.createElement("td");
        typeCell.textContent = event.type;  // Assuming the event object has a 'type' field

        const testCell = document.createElement("td");
        testCell.textContent = event.test ? "True" : "False";  // Assuming the event object has a 'test' boolean

        const timezoneCell = document.createElement("td");
        timezoneCell.textContent = event.timezone;  // Assuming the event object has a 'timezone' field

        // Append cells to the row
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(urlCell);
        row.appendChild(typeCell);
        row.appendChild(testCell);
        row.appendChild(timezoneCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}
