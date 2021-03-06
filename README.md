The Live Demo of the project is available here [Here](https://anish9461.github.io/d3-visualization-and-firebase).

## D3 visualization 

This repository helps to understand the d3 visualization using SVGs. Following are the topics covered: 

### SVG paths

SVG custom path
* `M` -> moveto
* `L` -> lineto
* `Z` -> closepath
* `C` -> For curving a line

### SVG using D3
* Create simple SVG shapes
* Change the attributes of the svg using `.attr()` method
* Goupe svgs together and transform them 

### Using dynamic Data with D3
* Using Dynamic Local data
* Using arrow functions to set attributes of svg shapes
* Joining data to svg DOM elements. 
* Creating virtual elements using Enter Selection of D3
* Using local external json data
    * Using javascript promises to load json data (asynchronou method => callback function is called after task is complete `.then()`)

### SVG Charts
* Linear Scales on bar chart to not shoot the values over the range (domain and range)
* Band scales for a group of bar charts ( scale for width of the rectangle -> to fit into the svg) -> Using band scale rather than linear scale
* Padding for the bar charts
* Using Min, Max and Extent (returns array of minimum and maximum) from D3
* Using template string instead of concatenation ``${someVar}``
* Setting margins for bar graph, axis, inverting scales and bars
* Tick formatting for the axis

### Firebase
* NoSql database provided by google to store data
* Real-time capability provided by the database
* Fetching the data from the firstore collection and using it in the react Application

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.





