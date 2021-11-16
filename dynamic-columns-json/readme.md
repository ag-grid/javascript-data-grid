# Dynamically Setting AG Grid Columns From JSON

In this blog post we will show how to dynamically configure and read a JSON object from API calls into AG Grid.

We will read JSON information from an API and use the keys from the returned JSON objects to configure the column heading names while rendering returned data in the grid.

The information required to handle this is contained in our documentation for [Updating Column Definitions](https://www.ag-grid.com/javascript-data-grid/column-updating-definitions/). The normal use case for AG Grid is to render a specific set of data in a controlled way, this allows pre-configuration of the formatting, editing, header names etc. for the columns.

If we dynamically set the data from a JSON file then we can't offer as rich a user experience as we don't really know what data will be present and the only information we have for the columns is their name.

## Short Answer

The short answer to "How to set the column definitions from JSON" is:

- Get the keys from the JSON data
- Get the Column Definitions from the grid using the api call `getColumnDefs()`
- Amend the Array of Column Definitions to use the keys
- Set the definitions to use the amended array by using the api call `setColumnDefs(colDefs)`

The Column Definitions array contains `ColDef` objects with the properties defined in the documentation for [Column Def Properties](https://www.ag-grid.com/javascript-data-grid/column-properties/).

The most important property is the name of the `field` to map on to in the `rowData`.

e.g.

```javascript
const columnDefs = [{field: 'make'}];
```

## Example of Setting Column Definitions Dynamically From JSON

Using the example from the [Getting Started in 5 Minutes with JavaScript](https://blog.ag-grid.com/get-started-with-javascript-grid-in-5-minutes/) guide.

The blog example example creates the column definitions in advance.

```javascript
    const columnDefs = [
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price', editable: true}
    ];
```

And this maps on to the data returned by the API call using the `field` value to link column to data:

```json
[
  { "make": "Porsche", "model": "Boxter", "price": 72000 },
  { "make": "Ford", "model": "Mondeo", "price": 32000 },
  { "make": "Ford", "model": "Mondeo", "price": 32000 },
  { "make": "Toyota", "model": "Celica", "price": 35000 },
  { "make": "Toyota", "model": "Celica", "price": 35000 },
  ...
]  
```


The example code then fetches data from a JSON and uses this as the row data for the grid.

```javascript
    fetch('https://www.ag-grid.com/example-assets/row-data.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        gridOptions.api.setRowData(data);
    })
```

When we set the data dynamically from the JSON then we will lose the `editable: true` property in the grid.

If we remove the pre-defined column definitions then we can configure them when we read the JSON file:

```javascript
    const columnDefs = [
    ];
```

Reading from the example data, setting the headings and populating the data:


```javascript
    fetch('https://www.ag-grid.com/example-assets/row-data.json').
    then(function (response) {
    
        return response.json();
        
    }).then(function (data) {
    
        // set the column headers from the data
        
        const colDefs = gridOptions.api.getColumnDefs();
        colDefs.length=0;
        const keys = Object.keys(data[0])
        keys.forEach(key => colDefs.push({field : key}));
        gridOptions.api.setColumnDefs(colDefs);
        
        // add the data to the grid
        
        gridOptions.api.setRowData(data);
    })
```

To explain the code in more detail.


`const colDefs = gridOptions.api.getColumnDefs();`

Get the column definitions from the grid, and store it in the `colDefs` array.

`colDefs.length=0;`

Clear the array by setting the length.

`const keys = Object.keys(data[0])`

Get all the keys from the first Object in the JSON.

`keys.forEach(key => colDefs.push({field : key}));`

Add each of the keys to the `colDefs` array as the value of the `field` property.

`gridOptions.api.setColumnDefs(colDefs);`

Set the column definitions back in the grid.

`gridOptions.api.setRowData(data);`

Set the data in the grid.

## Abstracting Column Creation

If I was going to do this often then I'd abstract it into a function.

```javascript
function dynamicallyConfigureColumnsFromObject(anObject){
    const colDefs = gridOptions.api.getColumnDefs();
    colDefs.length=0;
    const keys = Object.keys(anObject)
    keys.forEach(key => colDefs.push({field : key}));
    gridOptions.api.setColumnDefs(colDefs);
}
```

## A More Complicated Example

In the previous example, we just process a simple JSON file from a GET request.

We use the same process for working with APIs, but we might have to customise the `fetch` a little more.

In this example I'm using the Star Wars API from [swapi.dev](https://swapi.dev/)

A call the the `api/people` end point returns a more complex JSON object.

```json
{
	"count": 82,
	"next": "https://swapi.dev/api/people/?page=2",
	"previous": null,
	"results": [
		{
			"name": "Luke Skywalker",
			"height": "172",
			"mass": "77",
            ...
        }
    ]
}
```

I have to process the `results` array, rather than the full returned JSON.

I also have to add a `content-type` header to the `GET` request, otherwise Swapi.dev returns an HTML page.

Reading from the Swapi API

```javascript
    fetch('https://swapi.dev/api/people/',
        { 
            method: 'GET',
            headers: {
                        'Content-Type': 'application/json'
                    }
        }
  ).then(function (response) {
        return response.json();
    }).then(function (data) {
        dynamicallyConfigureColumnsFromObject(data.results[0])
        gridOptions.api.setRowData(data.results);
    })
</script>
```

## Using Default Column Definitions

The easiest way to add a richer user experience is to configure [default column definitions](https://www.ag-grid.com/javascript-data-grid/column-definitions/) that will be applied to all the dynamically created columns.

Using default column definitions we can configure the columns at a global level. To make every column sortable and filterable:

```javascript
const gridOptions = {

    defaultColDef: {
        sortable: true,
        filter: 'agTextColumnFilter',
        resizable: true
    },
```

With more information about the type of information in the field we could configure specific filter types e.g. date, numeric or resize the columns which is why we tend to pre-configure the column definitions.

We configure the default column definition using the API's [column properties](https://www.ag-grid.com/javascript-data-grid/column-properties/).

## Live Code

You can find the code for this example on Plunker:

https://plnkr.co/edit/8uZMkESggrlMFyox

And in the repo [github.com/ag-grid/javascript-data-grid](https://github.com/ag-grid/javascript-data-grid) in the `dynamic-columns-json` folder.

## Summary

Most use-cases for AG Grid will have predefined column headers because this allows taking advantage of the grid configuration available e.g. in-cell editing etc.

The AG Grid API offers you full configuration of the Column Definitions:

- [Column Definitions](https://www.ag-grid.com/javascript-data-grid/column-definitions/)
- [Updating Column Definitions](https://www.ag-grid.com/javascript-data-grid/column-updating-definitions/)

This allows you to configure the columns at runtime.