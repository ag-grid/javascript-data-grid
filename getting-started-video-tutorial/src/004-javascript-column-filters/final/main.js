let savedFilterModel = null;
const gridOptions = {
  columnDefs: [
    {
      field: "athlete",
      filter: "agTextColumnFilter",
    },
    {
      field: "age",
      filter: "agNumberColumnFilter",
    },
    { field: "year", filter: "agSetColumnFilter" },
    { field: "country", filter: "agMultiColumnFilter" },
    {
      field: "date",
      filter: "agDateColumnFilter",
    },
  ],

  defaultColDef: {
    floatingFilter: true,
    flex: 1,
    filterParams: {
      // buttons: ["apply", "clear", "cancel", "reset"],
    },
  },
  popupParent: document.body
};
function onBtnSave() {
  savedFilterModel = gridOptions.api.getFilterModel();
  console.log("saving filter state", savedFilterModel);
}
function onBtnApply() {
  gridOptions.api.setFilterModel(savedFilterModel);
  console.log("applying filter state", savedFilterModel);
}
const eGridDiv = document.getElementById("myGrid");

new agGrid.Grid(eGridDiv, gridOptions);

fetch(
  "https://www.ag-grid.com/example-assets/olympic-winners.json"
)
  .then((response) => response.json())
  .then((data) => {
    gridOptions.api.setRowData(data);
  });
