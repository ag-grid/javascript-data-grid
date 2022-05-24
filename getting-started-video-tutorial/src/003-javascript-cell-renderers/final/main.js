const SimpleComp = (params) => params.value;

class PushComp {
  init(params) {
    this.eGui = document.createElement("div");
    this.eGui.innerHTML = `
    <button class="btn-dollar">Push</button>
    <span>${params.value}</span>
    `;
    this.btnDollar = this.eGui.querySelector(".btn-dollar");

    this.btnDollar.onclick = () =>
      alert("$$$ " + params.value);
  }

  getGui() {
    return this.eGui;
  }
  refresh() {
    return false;
  }
  destroy() {}
}
class PullComp {
  init(params) {
    this.eGui = document.createElement("div");
    this.eGui.innerHTML = `
    <button class="btn-dollar">Pull</button>
    <span>${params.value}</span>
    `;
    this.btnDollar = this.eGui.querySelector(".btn-dollar");

    this.btnDollar.onclick = () =>
      alert("$$$ " + params.value);
  }

  getGui() {
    return this.eGui;
  }
  refresh() {
    return false;
  }
  destroy() {}
}

var gridOptions = {
  columnDefs: [
    {
      field: "athlete",
      cellRenderer: PushComp,
    },
    {
      field: "age",
      cellRenderer: (p) => `<b>Age is: </b> ${p.value}`,
    },
    {
      field: "year",
      cellRendererSelector: (p) => {
        if (p.value === 2008) {
          return { component: PullComp, params:{} };
        }
        if (p.value === 2012) {
          return { component: PushComp, params:{} };
        }
      },
    },
    { field: "country" },
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
