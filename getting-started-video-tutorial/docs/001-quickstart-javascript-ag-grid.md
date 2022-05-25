# Getting Started

This section will help you get started with the community edition of AG Grid using Javascript so you learn how to setup the project, render your first grid, load data from a server and configure some simple properties.

## Quick Start Guide Video

https://youtu.be/V14w_NFuZB4

- 00:00 Create HTML file
- 00:24 Import AG Grid
- 02:27 Styling the Grid
- 03:06 Adding Data from API
- 03:35 Column Definition Properties
- 04:05 Default Column Definitions
- 04:37 Grid Properties
- 05:13 Grid Events
- 05:40 Grid API
- 06:20 Summary

## Initial Code

This section will start from a basic HTML file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Ag Grid App</title>
  </head>
  <body>
      <h1>Hello from Ag Grid</h1>
  </body>
</html>
```

## Import AG Grid

We can add AG Grid by including the appropriate `script` and CSS includes in our HTML file.

```html
    <script src="https://unpkg.com/ag-grid-community/dist/ag-grid-community.min.noStyle.js">        
    </script>
```

The `script` include brings in the Javascript of all the core grid functionality in the free community edition of AG Grid.

Next we include the CSS styles. AG Grid comes with two CSS styles, one structural which renders the data as a grid, and one visual which adds the theme style.

```html
    <link
      rel="stylesheet"
      href="https://unpkg.com/ag-grid-community/dist/styles/ag-grid.css"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-alpine.css"
    />
```

- `ag-grid.css` is the structural CSS which provides the layout
- `ag-theme-alpine.css` is the styling theme which makes it look nice

AG Grid comes with many themes built in which you can find described in the documentation.

https://www.ag-grid.com/vue-data-grid/themes-provided/


## Add a Grid

To render a Data Grid we need to create a div to contain it.

```html
    <div id="myGrid" class="ag-theme-alpine" style="height: 500px"></div>
```

We add the `class` name which corresponds to the theme style we imported and as a minimum we provide a height to the div to allow the grid to be visible when we add it as a child to this `div`.

Then we generate the grid inside the div by creating a new `agGrid.Grid` object and assigning it the `gridOptions` to define the columns and data, and we pass in the `div` element we wish to use as the parent container for the grid.:

```html
    <script type="text/javascript">
      const eGridDiv = document.getElementById("myGrid");
      const gridOptions = {
        columnDefs: [],
        rowData: []
      };
      new agGrid.Grid(eGridDiv, gridOptions);
    </script>
```

This will create a grid on screen, but it won't have any data displayed.

To display data we have to define columns that the grid will display. We do this by configuring the Column Definitions in `columnDefs`.

```javascript
        columnDefs: [
          { field: "make",  },
          { field: "model",  },
          { field: "price",  },
        ],
```

This will display headings on the grid, but no data.

The data is contained in the `rowData`.

```javascript
    rowData: [
        {make: "Vauxhall", model: "Corsa", price: 17300},
        { make: "Ford", model: "Fiesta", price: 18000 },
        { make: "Volkswagen", model: "Golf", price: 26000}
    ],
```

This will render a basic grid with data on the page:

```html
    <script type="text/javascript">
      const eGridDiv = document.getElementById("myGrid");
      const gridOptions = {
        columnDefs: [
          { field: "make", },
          { field: "model", },
          { field: "price" },
        ],
        rowData: [
            {make: "Vauxhall", model: "Corsa", price: 17300},
            { make: "Ford", model: "Fiesta", price: 18000 },
            { make: "Volkswagen", model: "Golf", price: 26000}
        ],
      };
      new agGrid.Grid(eGridDiv, gridOptions);
    </script>
```

## Loading Server Data

To load data from the server we will use the grid API.

```javascript
      fetch("https://www.ag-grid.com/example-assets/row-data.json")
        .then((response) => response.json())
        .then((data) => {gridOptions.api.setRowData(data)});
    });
```

When we instantiate the `new agGrid.Grid` the gridOptions have the `api` property set. This gives us access to the grid API which we can use to configure and manipulate the grid configuration and its data. In the code above we set the row data with the `setRowData` API command and pass in the `data` returned from the `fetch` call.

## Column Definitions

There are many properties available for column definitions, and these can be found in the documentation:

https://www.ag-grid.com/javascript-data-grid/column-definitions/

Column Definition properties allow us to very quickly add functionality like filtering and sorting to the grid.

We can do this by adding the `sortable` and `filter` property to each column definition that we want to sort or filter:

```javascript
    columnDefs = [
        { field: "make", sortable: true, filter: true }, 
        { field: "model", sortable: true, filter: true }, 
        { field: "price", sortable: true, filter: true }
    ],
```

This is all that is required to make every column sortable and have a text filter.

## Default Column Definitions

Because it would become clumsy to add every property to every column definition we also have the concept of Default Column Definitions and these can be overridden (when necessary) by columns.

To add default column definitions we need to add `defaultColDef` to the `gridOptions`.

```javascript
    defaultColDef = {
      sortable: true,
      filter: true
    };
```

This means that our `columnDefs` can return to their simpler form:

```javascript
        columnDefs:[
            { field: "make" },
            { field: "model" },
            { field: "price" }
        ],
```

Because of the `defaultColDef` the `sortable` and `filter` property will be applied to all columns automatically.

## Grid Properties

In addition to configuring the column definitions we can also configure the data grid itself for properties to control pagination, selection and other grid options.

https://www.ag-grid.com/javascript-data-grid/grid-options/


We can enable selection by adding `rowSelection` and `animateRows` will animate the rows when the user sorts data.

```javascript
    rowSelection: "multiple",
    animateRows: true
```

These properties would be added in the `gridOptions` section.

```javascript
      const gridOptions = {
        columnDefs: [
          ...
        ],
        rowData: [
            ...
        ],
        rowSelection: "multiple",
        animateRows: true
      };
```

`rowSelection` allows the user to select multiple rows by using the mouse and shift keys.

`animateRows` configures the grid to nicely animate the row movements when the user sorts the data in the grid.

## Grid Events

There are many Grid Events that can be handled to add extra functionality into your application.

In this section we will look at the click event.

Full list of events can be found in the documentation:

https://www.ag-grid.com/javascript-data-grid/grid-events/

We add the event handler to the `gridOptions`:


And then create an event handler to output the details of the event to the console.

```javascript
      onCellClicked: params => {
        console.log("cell was clicked", params);
      }
```

## Grid API

AG Grid has an extensive API that allows you to re-configure and interact with the grid data at run time.

The Grid API is documented online:

https://www.ag-grid.com/vue-data-grid/grid-api/

As an example we can use the Grid API to interact with the rows that a user has selected and deselect them:

```javascript
gridOptions.api.deselectAll();
```

First we will create a button to allow the user to desect rows:

```javascript
    <button onclick="deselect()">Deselect Rows</button>
```

And then implement the `deselect` function:

```javascript
        function deselect(){
            gridOptions.api.deselectAll()
        }
```

This uses the global `gridOptions` variable that we created and takes advantage of the `api` property which was set when we initialized the data grid.

The user will now be able to deselect rows when the button is clicked.

The API provides access to many features that can be toggled at run time and to interact with the grid contents.


## Summary

In this section you learned how to get started with AG Grid and JavaScript.

We have released all the code for this section to Github:

https://github.com/ag-grid/javascript-data-grid/tree/main/getting-started-video-tutorial/src/001-javascript-getting-started

We recommend that you experiment with other grid and column properties and see how little configuration it takes to offer new functionality to your user e.g. pagination, column header values, ordering, sizing, etc.