# Javascript data grid Examples

JavaScript Data Grid Examples used on the blog.

https://blog.ag-grid.com/tag/javascript/

Demo of ag-Grid integration into a JavaScript project
------

- [Get started in 5 minutes](https://blog.ag-grid.com/get-started-with-javascript-grid-in-5-minutes/)
    - [Run the code on Plunker](https://plnkr.co/plunk/qEhnUluvHjCRCfHT)
- [Customising the JavaScript Grid](https://blog.ag-grid.com/learn-to-customize-javascript-grid-in-less-than-10-minutes/)

ag-Grid is a fully-featured and highly customizable JavaScript data grid.
It delivers [outstanding performance](https://www.ag-grid.com/example.php), has no 3rd party dependencies and [integrates smoothly with all major JavaScript frameworks](https://www.ag-grid.com/javascript-grid-getting-started). Here's how our grid looks like with multiple filters and grouping enabled:



Features
--------------

Besides the standard set of features you'd expect from any grid:

* Column Interactions (resize, reorder, and pin columns)
* Pagination
* Sorting
* Row Selection

Here are some of the features that make ag-Grid stand out:

* Grouping / Aggregation*
* Custom Filtering
* In-place Cell Editing
* Records Lazy Loading *
* Server-Side Records Operations *
* Live Stream Updates
* Hierarchical Data Support & Tree View *
* Customizable Appearance
* Customizable Cell Contents
* Excel-like Pivoting *
* State Persistence
* Keyboard navigation
* Data Export to CSV
* Data Export to Excel *
* Row Reordering
* Copy / Paste 
* Column Spanning
* Pinned Rows
* Full Width Rows

\* The features marked with an asterisk are available in the [enterprise version](https://www.ag-grid.com/license-pricing.php) only.

Check out [developers documentation](https://www.ag-grid.com/javascript-data-grid/) for a complete list of features or visit [our official docs](https://www.ag-grid.com/features-overview) for tutorials and feature demos. 

Looking for a framework specific solution?
--------------
* [Get Started with AngularJS](https://www.ag-grid.com/best-angularjs-data-grid)
* [Get Started with Angular](https://www.ag-grid.com/angular-getting-started)
* [Get Started with React](https://www.ag-grid.com/react-getting-started)
* [Get Started with Vue](https://www.ag-grid.com/vue-getting-started)


Usage Overview
--------------

### Add a placeholder to HTML

```
    <div id="myGrid" style="height: 500px; width:500px;" class="ag-theme-balham"></div>
```


#### Import the grid and styles

```
<head>
    <script src="https://unpkg.com/ag-grid/dist/ag-grid.min.noStyle.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/ag-grid/dist/styles/ag-grid.css">
    <link rel="stylesheet" href="https://unpkg.com/ag-grid/dist/styles/ag-theme-balham.css">
</head>
```

### Set configuration

```
    const columnDefs = [
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {
            headerName: 'Price',
            field: 'price',
            editable: true,
            cellRenderer: 'numberCellFormatter',
            cellEditor: 'numericCellEditor',
            filter: 'rangeFilter',
        }
    ];

	const gridOptions = {
        columnDefs: columnDefs,
        enableSorting: true,
        enableFilter: true,
        components: {
            numberCellFormatter: NumberCellFormatter,
            numericCellEditor: NumericCellEditor,
            rangeFilter: RangeFilter
        }
    };
```

### Initialize the grid

```
    const eGridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(eGridDiv, gridOptions);
```

For more information on how to integrate the grid into your project see [TypeScript - Building with Webpack 2](https://www.ag-grid.com/ag-grid-typescript-webpack-2).

Issue Reporting
----------
If you have found a bug, please report them at this repository `issues` section. If you're using Enterprise version please use the private ticketing system to do that.

Asking Questions
-------------

Look for similar problems on [StackOverflow](https://stackoverflow.com/questions/tagged/ag-grid) using the `ag-grid` tag. If nothing seems related, post a new message there. Do not use GitHub issues to ask questions.

Contributing
------------
ag-Grid is developed by a team of co-located developers in London. If you want to join the team check out our [jobs listing](https://www.ag-grid.com/ag-grid-jobs-board) or send your application to info@ag-grid.com.

License
------------------
This project is licensed under the MIT license. See the [LICENSE file](./LICENSE.txt) for more info.
