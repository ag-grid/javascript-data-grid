---
title: "QuickStart AG Grid Tutorial in Javascript"
author: Marats Stelihs
date: "ag-grid.com"
subtitle: "An Introductory Guide to Using AG Grid with Javascript"
lang: "en"
titlepage: true
titlepage-color : "003672"
titlepage-text-color: "FFFFFF"
titlepage-rule-color: "B4BBBF"
toc-own-page: true
book: true
listings-disable-line-numbers: true
logo: images/1920x327-AG-Grid-logo-white-writing-transparent-bg.png
logo-width: 10cm
include-before:
  - \hspace{0pt}
  - \vfill
  - \em
  - \hfil Copyright \textcopyright\nobreakspace 2022, AG Grid Ltd. All rights reserved. \hfil
  - \em
  - \vfill
...


\newpage

# QuickStart Javascript and AG Grid Tutorial

Welcome to the "QuickStart Javascript and AG Grid Tutorial," created by Marats Stelihs. The tutorial text, example source code, and walk-through videos will help you become proficient with AG Grid using Angular very quickly.

AG Grid is an Enterprise-level Data Grid that powers applications for most of the Fortune 500; it supports multiple frameworks with the same functionality and API due to its MVC architecture. To make the development experience for each framework seamless, we have rendering engines specific to the framework.

## AG Grid Introduction

AG Grid has full Javascript compatibility, so you'll be able to use all the standard Javascript development tools to profile and optimize your application.

AG Grid comes in two editions, the 100% free and MIT Licensed Community edition. You are free to use this in any commercial application, and we have applications showcased on our website that do precisely this.

- https://blog.ag-grid.com/showcase/

We also have an Enterprise edition if you need more features like pivoting, aggregation, Excel export, integrated charts, and custom toolbars.

We don't mind if you stick with the Community Edition or the Enterprise Edition; it's important to pick the best component that meets your needs. Both editions are fully featured and customizable with Javascript Components, allowing you to create custom editors and renderers to show whatever you want in the grid cells.

Much of the grid is customizable by simple properties; as you'll see in the early sections, we can enable sorting, filtering, and pagination in seconds:

- `sortable: true`
- `filter: true`

```javascript
{ field: 'make', sortable: true, filter: true },
```

And pagination is a grid property:

- `pagination: true`

```javascript
const gridOptions = {
  columnDefs: columnDefs,
  pagination: true
};
```

But we don't want to show you too much code too quickly. We just want to give you a hint as to how much you can achieve with very little code.

We know that writing an interactive data grid or data table can be a fun and challenging project; after all, we've had a team of dedicated programmers working on AG Grid for over seven years.

We also know that it can be very hard. Creating a simple table to sort when you click a heading is relatively easy. Adding filtering, lots of data, high-frequency updates, data grouping, and column ordering becomes more challenging. Not forgetting all the other features that your users will want to see as your project matures.

It takes time to build and maintain a data grid component, so this tutorial will allow you to look at AG Grid and try out the community edition before writing your own. You'll be able to get up and running quickly and add business value to your users faster than writing and maintaining a custom-built data grid.


## What's a Data Grid?

A data grid is a tabular rendering of data in a web app, like embedding an Excel sheet on a page.

Data grids differ from data tables in several ways:

- users don't expect tables to be interactive
- tables grow and shrink based on the contents, whereas a data grid is a fixed size leading to a consistent user interface

Standard features you would expect to find in a Data Grid are:

- sorting
- multi-column sorting
- filtering
- drag and drop row and column ordering
- pagination
- scroll bars for data to keep grid size consistent
- cell editing
- column and row virtualization
- row selection
- column grouping
- row and column pinning

All of the above, with a lot more features, are available in the community edition of AG Grid and configurable through simple properties, so it should be powerful enough to meet your needs for a data grid. And if you discover you need a custom filter, editor, or renderer, you can create a custom Javascript Component to implement your domain feature, as we will explain in detail in this tutorial.

A Data Grid also differs from a Data Table in that a Table is built on top of an HTML `table` element, whereas a Data Grid will often manipulate the DOM directly and is built on top of `div` elements. This can simplify the DOM virtualization to reduce memory overhead and improve performance for high-frequency updates.

If you are interested in seeing if AG Grid meets your long term needs, then we have a list of features in the documentation:

- https://ag-grid.com/javascript-data-grid/licensing/


## About the Tutorial Author

The tutorial was created by Marats Stelihs.

You can find Marats online:

- https://blog.ag-grid.com/author/marats/
- https://www.linkedin.com/in/marats-stelihs-69b85489/

## Introduction To Tutorial

This text contains a self-guided tutorial to help you quickly get started with AG Grid and Javascript. Through a series of text content explaining the incremental development of code, it walks you through the basic concepts that help you get the most from AG Grid with Javascript.

We can't cover everything in this text. Stephen has pulled out the most critical concepts to help you get started and cover the most common use-cases. Still, we recommend you read the documentation because the grid API is rich and very flexible.

The AG Grid documentation is online at:

- https://www.ag-grid.com/javascript-data-grid/

AG Grid supports multiple frameworks, and you can view the documentation for different frameworks by clicking the framework icon.

There are plenty of embedded examples in the documentation that are runnable or click to view and edit them online to help you experiment without installing anything.

All the source code for this tutorial is on Github.

The repo 'Javascript-data-grid' contains all the Javascript tutorials and examples used on our blog:

- https://github.com/ag-grid/javascript-data-grid

The folder for this tutorial is:

- https://github.com/ag-grid/javascript-data-grid/tree/main/getting-started-video-tutorial

You can find the source code in the `src` sub-folder.

Each chapter is in its own folder as stand-alone projects.

## Installing Prerequisites

### Javascript

Pre-requisites are having Node and Javascript installed because we will use standard Javascript tooling to create the project.

You can find instructions and downloads for installing Node.js on [nodejs.org](https://nodejs.org)

- https://nodejs.org/en/download/


### IDE

We typically recommend Visual Studio Code as a good IDE because it is free and easy to install for each platform.

- https://code.visualstudio.com/


## Let's Go

Now. Let's get started.


\newpage

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

\newpage

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




\newpage

# End Notes

Thanks for following the tutorial. You should now be able to implement and customize AG Grid within your Javascript projects.

The documentation for the grid has more examples and goes deep into the many options available via the API.

- https://ag-grid.com/javascript-data-grid

We also have a blog where you can find case studies and more tutorials:

- https://blog.ag-grid.com/

If you prefer video, then you can subscribe to our YouTube channel:

- https://www.youtube.com/ag-grid

And you can follow us on Social Media:

- https://twitter.com/ag_grid
- https://www.linkedin.com/company/ag-grid
- http://instagram.com/ag_grid


We build AG Grid in the open, and the Community Edition is MIT Licensed, you can find our code on Github:

- https://github.com/ag-grid


If you haven't yet signed up for our mailing list, we announce new releases and periodically share tutorial information via email. You can sign up online:

- https://blog.ag-grid.com/newsletter/


---

_This document was collated and edited by Alan Richardson, Head of Digital Marketing at AG Grid_

- _https://blog.ag-grid.com/author/alan/_