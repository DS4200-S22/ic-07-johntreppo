/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your scatterplot in this file


const width3 = 900; 
const height3 = 450; 
const margin3 = {left:50, right:50, bottom:50, top:50}; 
const yTooltipOffset3 = 15; 


// add an svg built in the dimensions we set above
const svg3 = d3
  .select("#csv-scatter")
  .append("svg")
  .attr("width", width3-margin3.left-margin3.right)
  .attr("height", height3 - margin3.top - margin3.bottom)
  .attr("viewBox", [0, 0, width3, height3]);

// scv barchart data
d3.csv("data/scatter.csv").then((data3) => { 
	console.log(data3)	
  /*

    Axes

  */ 

  // TODO: What does this code do? 
  // find max Y
  let maxY3 = d3.max(data3, function(d) { return d.score; });

  // find max x
  let maxX3 = d3.max(data3, function(d) { return d.day; });

  // TODO: What does each line of this code do?  
  // map data values to pixel values 
  let yScale3 = d3.scaleLinear() //have linear data
              .domain([0,maxY3])  //  inputs
              .range([height3-margin3.bottom,margin3.top]); // outputs

  // TODO: What does each line of this code do? 
  let xScale3 = d3.scaleLinear() // set scale of data
              .domain([0,maxX3]) // inputs
              .range([margin3.left, width3 - margin3.right]) //outputs
              
  // TODO: What does each line of this code do?  
  //add y axis
  svg3.append("g") // g is placeholder for svg
     .attr("transform", `translate(${margin3.left}, 0)`) // moves axes to screen left
     .call(d3.axisLeft(yScale3)) // set the scale of the axis
     .attr("font-size", '20px'); // set font style 

  // TODO: What does each line of this code do? 
  //add x axis
  svg3.append("g")
      .attr("transform", `translate(0,${height3 - margin3.bottom})`) // move axis to bottom
      .call(d3.axisBottom(xScale3)) // set scale of axis
      .attr("font-size", '20px'); //set font style

  /* 

    Tooltip Set-up  

  */

  // TODO: What does each line of this code do? 
  // create a tool tip
  const tooltip3 = d3.select("#csv-scatter") //select hard coded bar div
                  .append("div") 
                  .attr('id', "tooltip3") // give attribute
                  .style("opacity", 0) // add style 
                  .attr("class", "tooltip"); // give attribute

  // TODO: What does each line of this code do?  
  // define mouse over event handler
  const mouseover3 = function(event, d) {
    //change the name and scroe of tool tip to selcted bar
    tooltip3.html("Day: " + d.day + "<br> Score: " + d.score + "<br>") 
            .style("opacity", 1);  
  }

  // TODO: What does each line of this code do? 
  // define mouse move event handler
  const mousemove3 = function(event, d) {
    //change the location data of the cursor
    tooltip3.style("left", (event.pageX)+"px") 
            .style("top", (event.pageY + yTooltipOffset3) +"px"); 
  }

  // TODO: What does this code do? 
  // define mouse over event handler
  const mouseleave3 = function(event, d) { 
    //make te tool tip temporarly disappear
    tooltip3.style("opacity", 0); 
  }

  /* 
	scatterplot
  */

  // TODO: What does each line of this code do? 
  svg3.selectAll("circle") 
     .data(data3) // add data
     .enter()  
     .append("circle") //add shape
       .attr("cx", (d) => xScale3(d.day)) // use x axis to tansform datum
       .attr("cy", (d) => yScale3(d.score)) // use y axis to tansform datum
       .attr("r", 10) // set radius
       .attr('fill', 'orange')
       .on("mouseover", mouseover3) //add event listener
       .on("mousemove", mousemove3) //add event listener
       .on("mouseleave", mouseleave3); //add event listener;
}); 








