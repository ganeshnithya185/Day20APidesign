
  fetch("https://api.escuelajs.co/api/v1/products").then((data)=>{
    return data.json()
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData ="";
    objectData.map((values)=>{
        tableData +=`<tr>
        <td>${values.title}</td>
        <td>${values.price}</td>
        <td>${values.description}</td>
        <td><img src="${values.images}"</td>
        </tr>`;
    })
    document.getElementById("table_body").innerHTML = tableData; 
 });

  
  
  
  