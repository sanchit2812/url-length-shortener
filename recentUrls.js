axios.get('http://localhost:3000/urls')
    .then((res) => {
        const table = document.querySelector('#recent-urls-table-id');
        Object.keys(res.data).forEach((key) => {
            const value = res.data[key];
            const row = table.insertRow(1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.innerHTML = `<a target="_blank" href='http://localhost:3000/urls/${key}'>http://localhost:3000/urls/${key}</a>`;
            cell2.innerHTML = `<a target="_blank" href=${value}>${value}</a>`;
        });
    })
    .catch( err =>{
        console.log("No");
        const table = document.querySelector('#recent-urls-table-id');
        const row = table.insertRow(1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = 'No recently shortened URL exist';
        cell2.innerHTML = 'No Long URL exist';
    });