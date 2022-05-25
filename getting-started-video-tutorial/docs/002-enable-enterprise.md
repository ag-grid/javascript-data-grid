# Getting Started

This section will help you get started with the enterprise edition of AG Grid. The community edition is free to use in commercial applications, the Enterprise edition requires a license and offers extra features like pivoting, aggregation, integrated charts, row grouping, server side data models and more.

## Quick Start Guide Video

https://youtu.be/EIkxDliHFYw

- 00:00 Starting Code
- 00:20 Enable Enterprise
- 01:13 Row Grouping
- 01:33 User Controlled Grouping
- 02:03 Enterprise Features


## Starting Code

You can find the starting code in the github repo, but the `index.html` should be familiar to you if you worked through the first section on getting started with the community edition.

This configures a grid with some column definitions, and a default column definition to enable sorting and filtering, then loads in some data from the server to render in the grid when the `fetch` is called.

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/ag-grid-community/dist/ag-grid-community.min.noStyle.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-grid.css"/>
    <link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-alpine.css"/>
    <title>Ag Grid Enterprise</title>
  </head>
  <body>
    <div id="myGrid" class="ag-theme-alpine" style="height: 800px; width: 100%"></div>

    <script type="text/javascript" charset="utf-8">
      const gridOptions = {
        rowData: [],
        columnDefs: [
          { field: "athlete" }, { field: "age" }, { field: "country" },
          { field: "year" }, { field: "date" }, { field: "sport" },
          { field: "gold" }, { field: "silver" }, { field: "bronze" },
          { field: "total" },
        ],
        defaultColDef: { sortable: true, filter: true},
      };

      const eGridDiv = document.querySelector("#myGrid");
      new agGrid.Grid(eGridDiv, gridOptions);

      fetch(
        "https://www.ag-grid.com/example-assets/olympic-winners.json"
      )
        .then((response) => response.json())
        .then((data) => gridOptions.api.setRowData(data));
    </script>
  </body>
</html>
```

This uses the community edition of AG Grid which has the standard features you'd expect from a data grid and offers extensive column header, cell and row customization opportunities.

## Enabling Enterprise

To enable the enterprise edition features all we need to do is include the enterprise edition.

Currently we are using the community edition:

```html
<script src="https://unpkg.com/ag-grid-community/dist/ag-grid-community.min.noStyle.js"></script>
```

We ned to replace this with the Enterprise script include:

```html
<script src="https://unpkg.com/ag-grid-enterprise/dist/ag-grid-enterprise.min.noStyle.js"></script>
```

The default enterprise features will be enabled in the grid after this `script` is added.

Out of the box you will see new options like the right click menu now being an AG Grid menu with export and clipboard options, and you will see richer filtering capabilities. There are many more features available which can be found in the documentation. In this section we will only cover a small subset of available Enterprise features.

## Row Grouping

Column Grouping is available in the community edition of AG Grid. To use Row Grouping and start working with a hierarchical data view we need the Enterprise edition.

Row Grouping is configured as a column definition property.

We can group by specific column values by adding the `rowGroup` property to a column:

```javascript
{ field: "country", rowGroup: true },
```

This will cause the grid to group by values in the `Country` column.

It is possible to group by multiple columns, and they are nested based on their order in the definitions, so we can group by country and then by year using the code below:

```javascript
{ field: "country", rowGroup: true },
{ field: "year", rowGroup: true },
```

## User Controlled Grouping

We can pass control of grouping over to the user by adding `enableRowGroup` to the default column definitions.

```javascript
    defaultColDef: {
      sortable: true,
      filter: true,
      enableRowGroup: true
    }
```

We also have to enable the grouping drop zone to allow users to drag column headers and subsequently group by the values. We do this by adding `rowGroupPanelShow` to the grid properties.

```javascript
      const gridOptions = {
        rowData: [],
        columnDefs: [
          ...
        ],
        defaultColDef: {
          sortable: true,
          filter: true,
          enableRowGroup: true
        },
        rowGroupPanelShow: 'always'
      };
```

Learn more about Row Grouping in the documentation:

https://www.ag-grid.com/javascript-data-grid/grouping/

You will see that enterprise features like row grouping are identifiable with a red "(e)" symbol in the docs. Anything without this symbol means it is part of the Community edition.

AG Grid does not require a trial license for Enterprise evaluation you are free to trial Enterprise in your own organization, a license is required when you deploy the application to production.

If you wish to remove the watermark and console message then a trial license can be issued to help you evaluate AG Grid without the license warnings.

Contact `info@ag-grid.com` if you wish to purchase a license, or be issued with a trial license.


