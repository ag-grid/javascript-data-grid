# Javascript data grid Examples

JavaScript Data Grid Examples used on the blog.

https://blog.ag-grid.com/tag/javascript/

Demo of ag-Grid integration into a JavaScript project
------

- [Get started in 5 minutes](https://blog.ag-grid.com/get-started-with-javascript-grid-in-5-minutes/)
    - [Run the code on Plunker](https://plnkr.co/plunk/qEhnUluvHjCRCfHT)
- [Customising the JavaScript Grid](https://blog.ag-grid.com/learn-to-customize-javascript-grid-in-less-than-10-minutes/)


## Getting Started Video Tutorial Series

This video series covers AG Grid's Data Grid using Javascript. Using a step by step series of videos you will quickly learn AG Grid features and how to customize them for your project.

Videos in this Series

- 01 - Community Getting Started
    - https://youtu.be/V14w_NFuZB4
- 02 - Enterprise Getting Started
    - https://youtu.be/EIkxDliHFYw
- 03 - Javascript Cell Renderers
    - https://youtu.be/NwLVitYQ9c4
- 04 - Javascript Column Filters
    - https://youtu.be/haGW168Mfog
- Enterprise Row Grouping
    - https://youtu.be/kM0RFOoPDXk


All videos are available in a playlist:

https://www.youtube.com/playlist?list=PLsZlhayVgqNxijfRQxg5Mc6W4MzZHQ9MK

Source code is available on Github:

- https://github.com/ag-grid/javascript-data-grid/tree/main/getting-started-video-tutorial

## What is AG Grid?

AG Grid is a fully-featured and highly customizable JavaScript data grid.
It delivers [outstanding performance](https://www.ag-grid.com/example), has no 3rd party dependencies and [integrates smoothly with all major JavaScript frameworks](https://www.ag-grid.com/javascript-data-grid/getting-started/). Here's how our grid looks like with multiple filters and grouping enabled:

The community edition of AG Grid is absolutely free, even for commercial use.

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

\* The features marked with an asterisk are available in the [enterprise version](https://www.ag-grid.com/license-pricing/) only.

Check out [developers documentation](https://www.ag-grid.com/javascript-data-grid/) for a complete list of features or visit [our official docs](https://www.ag-grid.com/features-overview) for tutorials and feature demos. 

AG Grid is available for React, Angular, Vue and Javascript.


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



License
------------------
This project is licensed under the MIT license. See the [LICENSE file](./LICENSE.txt) for more info.
