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

const defaultColDef = {
    resizable: true, enableRowGroup: true
};

function printColumns() {
    const cols = gridOptions.columnApi.getAllGridColumns();
    console.log('Grid Cols', cols);
}

const gridOptions = {
    suppressDragLeaveHidesColumns: true,
    suppressMakeColumnVisibleAfterUnGroup: true,
    sideBar: true,
    rowGroupPanelShow: 'always', // always|onlyWhenGrouping|never
    // groupDisplayType: 'singleColumn',
    // groupDisplayType: 'multipleColumns',
    // groupDisplayType: 'groupRows',
    // groupDisplayType: 'custom',
    columnDefs: columnDefs,
    defaultColDef: defaultColDef,
    animateRows: true,
    // groupHideOpenParents: true,
    // showOpenedGroup: true,
    // groupRowRenderer: 'agGroupCellRenderer',
    // groupRowRendererParams: {
    //     suppressCount: true,
    //     innerRenderer: p => '<b>' 
    //                     + p.value 
    //                     + '</b>'
    //                     + ' --- Bob, if your reading this, I slept '
    //                     + ' with your wife at the Christmas Party '
    // },
    autoGroupColumnDef: {
        // cellRendererParams: 'agGroupCellRenderer',
        cellRendererParams: {
            // suppressCount: true,
            // checkbox: true,
            // innerRenderer: p => '<b>' + p.value + '</b>'
        }
    }
};

const eGridDiv = document.getElementById("myGrid");
new agGrid.Grid(eGridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(response => response.json())
    .then(data => {
        gridOptions.api.setRowData(data);
    });
