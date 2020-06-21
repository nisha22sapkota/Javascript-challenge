// from data.js
var tableData = data;
// console.log(tableData);


// referencing table body
var tbody =d3.select("tbody");


// ufo sighting value for each column

tableData.forEach((ufosighting) => 
{

    console.log(ufosighting);
    var row = tbody.append("tr");

//  using object.entries console ufo values
    Object.entries(ufosighting).forEach(([key, value]) => 
    {
        console.log(key, value);

        //  append cell to row the each value
        var cell = row.append("td");
        cell.text(value);
    });

});



//selecing butoon on html
var button =d3.select("#filter-btn");

// handle event
button.on("click", function()
{
//    remove exixting table
    d3.select("tbody").html("");

    // prevent page from refreshing
    d3.event.preventDefault();


 //   Get the value property of the input elements 
     var dateTime = d3.select("#datetime").node().value;

     var selectedCountry = d3.select("#country").node().value;
    
     var selectedState = d3.select("#state").node().value;
     
     var selectedCity = d3.select("#city").node().value;
     
     var selectedShape = d3.select("#shape").node().value;




     
     // initialize tableData as filteredData
     filteredData = tableData;
     
     if (dateTime) {
         filteredData = filteredData.filter(ufosighting => ufosighting.datetime === dateTime);
     }
     if (selectedCountry) {
         filteredData = filteredData.filter(ufosighting => ufosighting.country === selectedCountry);
     }
     if (selectedState) {
         filteredData = filteredData.filter(ufosighting=> ufosighting.state === selectedState);
     }
     if (selectedCity) {
         filteredData = filteredData.filter(ufosighting=> ufosighting.city === selectedCity);
     }
     
     if (selectedShape) {
         filteredData = filteredData.filter(ufosighting => ufosighting.shape === selectedShape);
     }






    //  display filter data set
     filteredData.forEach((ufosighting) => 
     {

        //  console.log(selections);
         var row = tbody.append("tr");

         //  using object.entries to console log the ufo values
         Object.entries(ufosighting).forEach(([key, value]) =>

         {

            //  console the values
             console.log(key, value);

             //  append cell to row the each value
              var cell = row.append("td");

              cell.text(value);

         });

     });

});