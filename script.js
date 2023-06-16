
document.getElementById("load-data-btn").addEventListener("click", ClickHere);
function ClickHere(){
fetch("https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=3EJItxDkNxXIUkM4khxRFERlBZP8Fya5qUkCb3FO")
  .then(response => response.json())
  .then(data => {
    // Process the received data
    createTable(data.data); // Display the data in the console
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
}
  

 function createTable(data) {
const table = document.createElement("table");
const tableHead=  document.createElement("thead");
const tableBody = document.createElement("tbody");

const headerRow = document.createElement("tr");
const headers = ["Ticker", "Name", "Price", "Market Cap"];
 headers.forEach(headerText=>{
const headerCell = document.createElement("th");
headerCell.textContent = headerText;
headerRow.appendChild(headerCell);

});
tableHead.appendChild(headerRow);

data.forEach(stock=>{
    const row = document.createElement("tr");
    const TickerCell = document.createElement("td");
    TickerCell.textContent= stock.ticker;
    row.appendChild(TickerCell);
    
    const NameCell = document.createElement("td");
    NameCell.textContent= stock.name;
    row.appendChild(NameCell);

    const PriceCell = document.createElement("td");
    PriceCell.textContent= stock.price;
    row.appendChild(PriceCell);

    const MarketCapCell = document.createElement("td");
    MarketCapCell.textContent= stock.market_cap;
    row.appendChild(MarketCapCell);
    tableBody.appendChild(row);
})
table.appendChild(tableHead);
table.appendChild(tableBody);
const tableContainer = document.getElementById("table-container");
tableContainer.innerHTML = "";
tableContainer.appendChild(table);

 }
 




