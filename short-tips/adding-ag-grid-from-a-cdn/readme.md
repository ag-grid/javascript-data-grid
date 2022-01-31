## Adding AG Grid from a CDN

We don't need to use a build system and dependency management system when working in Vanilla JavaScript. We can add A Grid as a dependency from a CDN.

AG Grid is available on:


- [Unpkg.com](https://unpkg.com/ag-grid-community/)
- [jsDelivr.com](https://www.jsdelivr.com/package/npm/ag-grid-community)
- [cdnjs.com](https://cdnjs.com/libraries/ag-grid)

You can also [download AG Grid to host yourself](https://ag-grid.com/javascript-data-grid/download/) and remove the risk of a CDN going down.

We need to add AG Grid JavaScript and the CSS to structure and style the grid.


### What to Add?


Adding the JavaScript.

```
    <script src="https://unpkg.com/ag-grid-community/dist/ag-grid-community.min.noStyle.js"></script>
```    

Adding the [CSS structural styles and themes](https://ag-grid.com/javascript-data-grid/themes-provided/#cdn).

The Structural Style sheet provides the CSS that will layout the data as a Grid.

```
    <link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-grid.css">
```    

The Theme Style sheet provides the visual aesthetics for the Grid.

```
    <link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-alpine.css">
```    


### Controlling the Version

The above code adds the 'current' version, so when we release a new version your code will automatically run against the recent version. You might want to control the version number and update the version at a time you choose.

For unpkg add the version number after the package name

Unpkg using version 26.2.1

- https://unpkg.com/ag-grid-community@26.2.1/dist/ag-grid-community.min.noStyle.js
- https://unpkg.com/ag-grid-community@26.2.1/dist/styles/ag-grid.css
- https://unpkg.com/ag-grid-community@26.2.1/dist/styles/ag-theme-alpine.css


JSDelivr using version 26.2.1

- https://cdn.jsdelivr.net/npm/ag-grid-community@26.2.1/dist/ag-grid-community.min.noStyle.js
- https://cdn.jsdelivr.net/npm/ag-grid-community@26.2.1/dist/styles/ag-grid.css
- https://cdn.jsdelivr.net/npm/ag-grid-community@26.2.1/dist/styles/ag-theme-alpine.css

cdnJS using version 26.2.1

CdnJS takes a slightly different approach to version naming so it is worth checking the version drop down on the [cdnJS AG Grid listing](https://cdnjs.com/libraries/ag-grid)

- https://cdnjs.cloudflare.com/ajax/libs/ag-grid/Docs-26.2.0-20211117/ag-grid-community.min.noStyle.min.js
- https://cdnjs.cloudflare.com/ajax/libs/ag-grid/Docs-26.2.0-20211117/styles/ag-grid.min.css
- https://cdnjs.cloudflare.com/ajax/libs/ag-grid/Docs-26.2.0-20211117/styles/ag-theme-alpine.min.css


### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CDN Added AG Grid Example</title>
    <script src="https://unpkg.com/ag-grid-community/dist/ag-grid-community.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-grid.css">
    <link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-alpine.css">
</head>
<body>

    <div id="myGrid" style="height: 200px; width:500px;" class="ag-theme-alpine"></div>

<script>
document.addEventListener('DOMContentLoaded', () => {

    const columnDefs = [
        { field: "cdn" },
        { field: "url" },
    ];

    const rowData = [
        { cdn: "jsDelivr", url: "https://www.jsdelivr.com"},
        { cdn: "Unpkg", url: "https://Unpkg.com" },
        { cdn: "cdnJS", url: "https://cdnjs.com" }
    ];


    const gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        /* allow manual copy and paste */
        enableCellTextSelection:true,
        ensureDomOrder:true
    };


    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});
</script>
</body>
</html>
```