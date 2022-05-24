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

You can find Marat online:

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