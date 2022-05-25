# Javascript Cell Renderers

This section will help you get started in customizing the way that cells can render data using Cell Renderers. These are simple Vanilla JS functions or classes which control how the HTML in a cell is generated and allow formatting and adding extra features like buttons or other functional elements in a cell.

## Tutorial Video

https://youtu.be/NwLVitYQ9c4

- 00:00 Starting Code
- 00:21 My first component
- 01:13 Rendering Values
- 01:30 Class Components
- 03:17 Reusing Components
- 03:56 Parameterized Components
- 04:30 Inline Components
- 04:05 Selecting Cell Renderers 
- 06:17 Summary

## Starting Code

All of our Javascript code will be in a `main.js` file included into our `index.html`.

The `index.html` is simply a page that includes the `ag-grid-community` javascript, the stylesheets, creates a `div` to add the grid into which has a `height` defined. Then imports our application code from `main.js`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"
    />
    <title>Ag Grid Renderers</title>
    <script src="https://unpkg.com/ag-grid-community/dist/ag-grid-community.min.noStyle.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-grid.css" />
    <link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-alpine.css" />
  </head>
  <body>
    <div id="myGrid" class="ag-theme-alpine" style="height: 100%">
    </div>
      <script src="main.js"></script>
  </body>
</html>
```

`main.js` defines the grid opptions with column definitions and default column definition. Then when the page has loaded, initialises the grid into the `div` in the `index.html` and fetches data from the server to load into the data grid.

```javascript
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
```

## My First Component

To demonstrate that a cell renderer component can be as simple as a function we will create one that renders "Hello World" in the cell.

A function component can return either an HTML string or an HTML DOM element.

```javascript
const SimpleComp = (params) => "Hello World";
```

We can then add the component to a column as a cellRenderer:

```javascript
        { field: "athlete", cellRenderer: SimpleComp },
```

The `cellRenderer` will handle how the contents of the cell are displayed, so now every value in the `Athlete` column will render as `Hello World`.

## Rendering Values

The `params` that are passed into the component cell renderer provides access to the grid apis, the value of the cell and all the values and definitions of the cells in the row.

The properties are all documented in the AG Grid documentation:

https://www.ag-grid.com/javascript-data-grid/component-cell-renderer/#reference-ICellRendererParams
The `value` property is the underlying value for the cell, we can use this to render the actual value of cell on the screen.


```javascript
const SimpleComp = (params) => params.value;
```

At this point we have recreated the default cell renderer, and we can now build on this to create a custom cell renderer that adds value.

## Class Components

Functional components are useful for simple use-cases, when our cell renderer needs to manage state then a class component might be a better choice.

The code below is a minimal class which will serve as a component to be used as a Cell Renderer.

```javascript
class ClassComp {
  init(params) {
    this.eGui = document.createElement("div");
    this.eGui.innerHTML = `
    <span>${params.value}</span>
    `;
  }

  getGui() {
    return this.eGui;
  }
  refresh() {
    return false;
  }
  destroy() {}
}
```

This can be added to the `age` column and again all it does is display the value of the cell.

```javascript
        { field: "age", cellRenderer: ClassComp },
```

Since we are returning a DOM element we can make this more functional by adding some buttons.

```javascript
class PushComp {
  init(params) {
    this.eGui = document.createElement("div");
    this.eGui.innerHTML = `
    <button class="btn-dollar">$</button>
    <button class="btn-at">@</button>
    <span>${params.value}</span>
    `;
    this.btnDollar = this.eGui.querySelector(".btn-dollar");
    this.btnDollar = this.eGui.querySelector(".btn-at");

    this.btnDollar.onclick = () =>alert("$$$ " + params.value);
    this.btnDollar.onclick = () =>alert("@@@ " + params.value);
  }

  getGui() {
    return this.eGui;
  }
  refresh() {
    return false;
  }
  destroy() {}
}
```

Now every cell in the `age` column also shows two buttons which, when clicked on, show an alert with the value of the cell.

The `init` method is called once, before the cell renderer is used, and it is passed the `params` which allows the button to have access to the full API and data in the grid and row.

In the `init` method we created a DOM element to add as the root element for the cell, this allows us to add whatever other HTML elements into the cell in a controlled manner.

Then, after querying the DOM to find the elements, we add a click handler to show the alert.

When the grid wants to display the cell it calls the `getGui` method, so our method returns the DOM elements we created.

`refresh` gets called whenever the cells refresh, we can add logic to change the values without destroying the component here and return `true`. By returning 'false' we hare telling the grid to destroy and remove the component from the DOM and create a new component.

`destroy` is where we would add any clean up code that we needed to execute prior to this component being removed from the DOM.


## Reusing Components

Cell Renderers can easily be used on multiple columns:

```javascript
        { field: "athlete", cellRenderer: ClassComp },
        { field: "age", cellRenderer: ClassComp },
```

We can even assign the Cell Renderer on the default column definition to have it used for all columns:

```javascript
    defaultColDef: {
        sortable: true,
        filter: true,
        cellRenderer: ClassComp,
      }
```

If we do add a Cell Renderer on a `defaultColDef` then any individual column can override the definition to use a different renderer or even the default renderer.

To use a default renderer as the override we would use `null` as the `cellRenderer`:

```javascript
        { field: "athlete", cellRenderer: null },
```

## Parameterized Components

We can make components more useful for re-use by passing some configuration parameters to the component.

For example we could set the text of the button by passing in the button text as a parameter:

```javascript
        {
          field: "athlete",
          cellRenderer: ClassComp,
          cellRendererParams: { btnText: "Amazing"},
        },
        {
          field: "age",
          cellRenderer: ClassComp,
          cellRendererParams: { btnText: "Grand"},
        },
```

Then we can amend `ClassComp` to use the parameter we just passed in as the text to render on the button:

```javascript
class ClassComp {
  init(params) {
    this.eGui = document.createElement("div");
    this.eGui.innerHTML = `
    <button class="btn-dollar">${params.btnText}</button>
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
```

The grid will now use the same component in two cells and each cell will render the button differently because we are passing in the text to display in the button.


## Inline Components

It is possible to inline components if we want to create quick prototypes.

For example, we could add a simple inline component to the `age` field as follows:

```javascript
    {
      field: "age",
      cellRenderer: (p) => `<b>Age is: </b> ${p.value}`,
    },
```

## Selecting Cell Renderers

It can be sometimes useful to use different Cell Renderers for different values in the cell. e.g. if a value is over a specific amount then have a different cell renderer.

In practice this looks like the code below using a `cellRendererSelector`:

```javascript
    {
      field: "year",
      cellRendererSelector: (p) => {
        if (p.value === 2008) {
          return { component: PullComp };
        }
        if (p.value === 2012) {
          return { component: SimpleComp };
        }
      },
    },
```

Here the `year` field has a `cellRendererSelector` this takes the same parameters as the Cell Renderer so it is possible to have complex logic and functionality in this selector.

In this code are are returning a `PullComp` Cell Renderer if the value of the cell is equal to 2008, and a `SimpleComp` Cell Renderer if the value of the cell equals 2012. If neither selection matches then the default cell renderer will be used.

It is possible to pass parameters to the returned Cell Renderers, as we saw before when we used `cellRendererParams` e.g.

```javascript
    return { component: PullComp, params: {}};
```

Any embedded `params` will be used instead of the `cellRendererParams`.

## Summary

You have seen multiple ways to create components for Cell Renderers in Vue.

- Simple functional components
- Class components
- Inline components

You also saw how to choose between cell renderers and pass parameters to the cell renderers.

Cell Renderers are a core customization mechanism for AG Grid and you can find more details in the documentation:

https://www.ag-grid.com/javasccript-data-grid/component-cell-renderer/