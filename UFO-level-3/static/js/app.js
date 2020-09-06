// from data.js
var tableData = data;

// YOUR CODE HERE!
var inputField = d3.selectAll("input");

function runFilter() {
    d3.event.preventDefault();

    var filteredTable = tableData;
    if (d3.select("input#date-input").property("value") !== "") {
        let inputDate = d3.select("input#date-input").property("value");
        var filteredTable = filteredTable.filter(sighting => sighting.datetime === inputDate);
    };
    if (d3.select("input#city-input").property("value") !== "") {
        let inputCity = d3.select("input#city-input").property("value");
        var filteredTable = filteredTable.filter(sighting => sighting.city === inputCity);
    };
    if (d3.select("input#state-input").property("value") !== "") {
        let inputState = d3.select("input#state-input").property("value");
        var filteredTable = filteredTable.filter(sighting => sighting.state === inputState);
    };
    if (d3.select("input#country-input").property("value") !== "") {
        let inputCountry = d3.select("input#country-input").property("value");
        var filteredTable = filteredTable.filter(sighting => sighting.country === inputCountry);
    };
    if (d3.select("input#shape-input").property("value") !== "") {
        let inputShape = d3.select("input#shape-input").property("value");
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