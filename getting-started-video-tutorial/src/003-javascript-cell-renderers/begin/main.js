var gridOptions = {
  rowData: [],
  columnDefs: [
    { field: "athlete" },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ],
  defaultColDef: {
    sortable: true,
    filter: true,
  },
};

document.addEventListener("DOMContentLoaded", function () {
  var gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);

  fetch(
    "https://www.ag-grid.com/example-assets/olympic-winners.json"
  )
    .then((response) => response.json())
    .then((data) => gridOptions.api.setRowData(data));
});
