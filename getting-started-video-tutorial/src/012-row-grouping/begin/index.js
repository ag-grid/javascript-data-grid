const columnDefs = [    
    { field: 'country' },
    { field: 'athlete' },
    { field: 'age' },
    { field: 'sport' },
    { field: 'year' },
    { field: 'date' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
];


const gridOptions = {

    columnDefs: columnDefs,
    animateRows: true,
    enableCharts: true,
    enableRangeSelection: true

};

const eGridDiv = document.getElementById("myGrid");
new agGrid.Grid(eGridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(response => response.json())
    .then(data => {
        gridOptions.api.setRowData(data);
    });
