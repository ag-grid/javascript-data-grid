const gridOptions = {
  columnDefs: [
    { field: "athlete" },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
  ],

  defaultColDef: { flex: 1 },
};

const eGridDiv = document.getElementById("myGrid");

new agGrid.Grid(eGridDiv, gridOptions);

fetch(
  "https://www.ag-grid.com/example-assets/olympic-winners.json"
)
  .then((response) => response.json())
  .then((data) => {
    gridOptions.api.setRowData(data);
  });
