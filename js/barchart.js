/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your bar charts in this file 

//////////////////////////////
// chart 1
//////////////////////////////

// Set dimensions and margins for plots 
const width = 900; 
const height = 450; 
const margin = {left:50, right:50, bottom:50, top:50}; 
const yTooltipOffset = 15; 

// TODO: What does this code do? 
// add an svg built in the dimensions we set above
const svg1 = d3
  .select("#hard-coded-bar")
  .append("svg")
  .attr("width", width-margin.left-margin.right)
  .attr("height", height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

// Hardcoded barchart data
const data1 = [
  {name: 'A', score: 92},
  {name: 'B', score: 15},
  {name: 'C', score: 67},
  {name: 'D', score: 89},
  {name: 'E', score: 53},
  {name: 'F', score: 91},
  {name: 'G', score: 18}
];

/*

  Axes

*/ 

// TODO: What does this code do? 
// find max Y
let maxY1 = d3.max(data1, function(d) { return d.score; });

// TODO: What does each line of this code do?  
// map data values to pixel values 
let yScale1 = d3.scaleLinear() //have linear data
            .domain([0,maxY1])  //  inputs
            .range([height-margin.bottom,margin.top]); // outputs

// TODO: What does each line of this code do? 
let xScale1 = d3.scaleBand() // set scale of data
            .domain(d3.range(data1.length)) // inputs
            .range([margin.left, width - margin.right]) //outputs
            .padding(0.1);  //set badding for the bar chart

// TODO: What does each line of this code do?  
//add y axis
svg1.append("g") // g is placeholder for svg
   .attr("transform", `translate(${margin.left}, 0)`) // moves axes to screen left
   .call(d3.axisLeft(yScale1)) // set the scale of the axis
   .attr("font-size", '20px'); // set font style 

// TODO: What does each line of this code do? 
//add x axis
svg1.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`) // move axis to bottom
    .call(d3.axisBottom(xScale1) // set scale of axis
            .tickFormat(i => data1[i].name))  // set names of bars
    .attr("font-size", '20px'); //set font style

/* 

  Tooltip Set-up  

*/

// TODO: What does each line of this code do? 
// create a tool tip
const tooltip1 = d3.select("#hard-coded-bar") //select hard coded bar div
                .append("div") 
                .attr('id', "tooltip1") // give attribute
                .style("opacity", 0) // add style 
                .attr("class", "tooltip"); // give attribute

// TODO: What does each line of this code do?  
// define mouse over event handler
const mouseover1 = function(event, d) {
  //change the name and scroe of tool tip to selcted bar
  tooltip1.html("Name: " + d.name + "<br> Score: " + d.score + "<br>") 
          .style("opacity", 1);  
}

// TODO: What does each line of this code do? 
// define mouse move event handler
// to help with placemnt of tool tip 
const mousemove1 = function(event, d) {
  //change the location data of the cursor
  tooltip1.style("left", (event.pageX)+"px") 
          .style("top", (event.pageY + yTooltipOffset) +"px"); 
}

// TODO: What does this code do? 
// define mouse over event handler
const mouseleave1 = function(event, d) { 
  //make te tool tip temporarly disappear
  tooltip1.style("opacity", 0); 
}

/* 

  Bars 

*/

// TODO: What does each line of this code do? 
svg1.selectAll(".bar") 
   .data(data1) // add data
   .enter()  
   .append("rect") //add shape
     .attr("class", "bar") //add class
     .attr("x", (d,i) => xScale1(i)) // use x axis to tansform datum
     .attr("y", (d) => yScale1(d.score)) // use y axis to tansform datum
     .attr("height", (d) => (height - margin.bottom) - yScale1(d.score)) // set height
     .attr("width", xScale1.bandwidth()) //set with
     .on("mouseover", mouseover1) //add event listener
     .on("mousemove", mousemove1) //add event listener
     .on("mouseleave", mouseleave1); //add event listener


//////////////////////////////
// chart 2
//////////////////////////////

// Set dimensions and margins for plots 
const width2 = 900; 
const height2 = 450; 
const margin2 = {left:50, right:50, bottom:50, top:50}; 
const yTooltipOffset2 = 15; 

// add an svg built in the dimensions we set above
const svg2 = d3
  .select("#csv-bar")
  .append("svg")
  .attr("width", width2-margin2.left-margin2.right)
  .attr("height", height2 - margin2.top - margin2.bottom)
  .attr("viewBox", [0, 0, width2, height2]);

// scv barchart data
d3.csv("data/barchart.csv").then((data2) => { 

  /*

    Axes

  */ 

  // TODO: What does this code do? 
  // find max Y
  let maxY2 = d3.max(data2, function(d) { return d.score; });

  // TODO: What does each line of this code do?  
  // map data values to pixel values 
  let yScale2 = d3.scaleLinear() //have linear data
              .domain([0,maxY2])  //  inputs
              .range([height2-margin2.bottom,margin2.top]); // outputs

  // TODO: What does each line of this code do? 
  let xScale2 = d3.scaleBand() // set scale of data
              .domain(d3.range(data2.length)) // inputs
              .range([margin2.left, width2 - margin2.right]) //outputs
              .padding(0.1);  //set badding for the bar chart

  // TODO: What does each line of this code do?  
  //add y axis
  svg2.append("g") // g is placeholder for svg
     .attr("transform", `translate(${margin2.left}, 0)`) // moves axes to screen left
     .call(d3.axisLeft(yScale2)) // set the scale of the axis
     .attr("font-size", '20px'); // set font style 

  // TODO: What does each line of this code do? 
  //add x axis
  svg2.append("g")
      .attr("transform", `translate(0,${height2 - margin2.bottom})`) // move axis to bottom
      .call(d3.axisBottom(xScale2) // set scale of axis
              .tickFormat(i => data2[i].name))  // set names of bars
      .attr("font-size", '20px'); //set font style

  /* 

    Tooltip Set-up  

  */

  // TODO: What does each line of this code do? 
  // create a tool tip
  const tooltip2 = d3.select("#csv-bar") //select hard coded bar div
                  .append("div") 
                  .attr('id', "tooltip2") // give attribute
                  .style("opacity", 0) // add style 
                  .attr("class", "tooltip"); // give attribute

  // TODO: What does each line of this code do?  
  // define mouse over event handler
  const mouseover2 = function(event, d) {
    //change the name and scroe of tool tip to selcted bar
    tooltip2.html("Name: " + d.name + "<br> Score: " + d.score + "<br>") 
            .style("opacity", 1);  
  }

  // TODO: What does each line of this code do? 
  // define mouse move event handler
  const mousemove2 = function(event, d) {
    //change the location data of the cursor
    tooltip2.style("left", (event.pageX)+"px") 
            .style("top", (event.pageY + yTooltipOffset2) +"px"); 
  }

  // TODO: What does this code do? 
  // define mouse over event handler
  const mouseleave2 = function(event, d) { 
    //make te tool tip temporarly disappear
    tooltip2.style("opacity", 0); 
  }

  /* 

    Bars 

  */

  // TODO: What does each line of this code do? 
  svg2.selectAll(".bar") 
     .data(data2) // add data
     .enter()  
     .append("rect") //add shape
       .attr("class", "bar") //add class
       .attr("x", (d,i) => xScale2(i)) // use x axis to tansform datum
       .attr("y", (d) => yScale2(d.score)) // use y axis to tansform datum
       .attr("height", (d) => (height2 - margin2.bottom) - yScale2(d.score)) // set height
       .attr("width", xScale2.bandwidth()) //set with
       .on("mouseover", mouseover2) //add event listener
       .on("mousemove", mousemove2) //add event listener
       .on("mouseleave", mouseleave2); //add event listener;
});








