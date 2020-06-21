// from data.js
var tableData = data;

// console.log(tableData);


// refference from table body
var tbody = d3.select("tbody");

//ufo sighting values for each column
 tableData.forEach((ufosighting) => 
 {
     console.log(ufosighting);

// append one table row from ufo sighting
     var row =tbody.append("tr");

// using object.entries to console log the ufo values
     Object.entries(ufosighting).forEach(([key, value]) =>
     
     {
         console.log(key, value);

        //  append cell to row the each value
         var cell = row.append("td");
         cell.text(value);
     });
 });


// select the submit button
 var button = d3.select("#filter-btn");
 button.on("click", function()
 {
    d3.select("tbody").html("");

    d3.event.preventDefault();


// select the input data get html node
    var dateTime = d3.select("#datetime").property("value");
    //  get the value of input data
    
    //  console the input value
    console.log(dateTime);
    //  filtered the data with datetime equal to input value
    var filteredData = tableData.filter(ufosighting=> ufosighting.datetime === dateTime);
    //  console the filter data
    console.log(filteredData);



    filteredData.forEach((ufosighting) => 
     {
    

    var row =tbody.append("tr");
        //  using object.entries to console log the ufo values
    Object.entries(ufosighting).forEach(([key, value]) => 
         {
             console.log(key,value);
             //  append cell to row the each value
             var cell = row.append("td");
             cell.text(value);
         });
     });
 });