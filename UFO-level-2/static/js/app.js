// from data.js
var tableData = data;

// YOUR CODE HERE!
var inputField = d3.selectAll("input.form-control");
var button = d3.select("button#filter-btn");
var form = d3.select("form");


function runFilter() {
    d3.event.preventDefault();

    var filteredTable = tableData;
    if (d3.select("input#datetime").property("value") !== "") {
        let inputDate = d3.select("input#datetime").property("value");
        console.log(`So you wanna find out about ${inputDate}?`);
        var filteredTable = filteredTable.filter(sighting => sighting.datetime === inputDate);
    };
    if (d3.select("input#city").property("value") !== "") {
        let inputCity = d3.select("input#city").property("value");
        var filteredTable = filteredTable.filter(sighting => sighting.city === inputCity);
    };
    if (d3.select("input#state").property("value") !== "") {
        let inputState = d3.select("input#state").property("value");
        var filteredTable = filteredTable.filter(sighting => sighting.state === inputState);
    };
    if (d3.select("input#country").property("value") !== "") {
        let inputCountry = d3.select("input#country").property("value");
        var filteredTable = filteredTable.filter(sighting => sighting.country === inputCountry);
    };
    if (d3.select("input#shape").property("value") !== "") {
        let inputShape = d3.select("input#shape").property("value");
        var filteredTable = filteredTable.filter(sighting => sighting.shape === inputShape);
    };
    const tableBody = d3.select("tbody");

    tableBody.html("");

    for (var i = 0; i < filteredTable.length; i++) {
        var row = tableBody.append("tr");
        row.append("td").text(filteredTable[i].datetime);
        row.append("td").text(filteredTable[i].city);
        row.append("td").text(filteredTable[i].state);
        row.append("td").text(filteredTable[i].country);
        row.append("td").text(filteredTable[i].shape);
        row.append("td").text(filteredTable[i].durationMinutes);
        row.append("td").text(filteredTable[i].comments);
    };
};

inputField.on("change", runFilter);
button.on("click", runFilter);
form.on("submit", runFilter);