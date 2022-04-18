

let products = {
  price : [1000,500,5000],
  size : [100,250,2500]
}

function calculateCost(){
  var prod_price = products["price"];
  var size_price = products["size"]; 

  var cost = 0;
  var Price;

  var prod = document.getElementById("cmbPrd").value;
  var tickettype =document.getElementById("cmTick").value;

  if(prod == ""){
      alert("Please select the visitor type");
      document.getElementById("cmbPrd").focus();
      return;
  }
  var Price;
    if (prod == "0") {
      Price==size_price;
    }
    else{
      Price==prod_price;
  }

  tickettype=parseInt(tickettype);
  var Finalprice = Price[tickettype];

  
  var dur = document.getElementById("cmDur").value; 
  var units = document.getElementById("Tick").value; 

  if(units == "")
      units = 0;
  else
      units = parseInt(units); 
  
  prod = parseInt(prod);
  Price = prod_price[prod];
 

  if(size!=""){
      size = parseInt(size);
      Price = Price + size_price[size];
  }
  
  Finalprice = parseFloat(units * Price);
  document.getElementById("Tick").innerHTML = Finalprice.toFixed(2);
  
}


function addToOrder(){
  var cost = parseFloat(document.getElementById("Tick").innerHTML);
  if(cost == 0){
      alert("Please select your visitor type and no of tickets");
      return;
  }

  var price_list = products["price"];
  var size_list = products["size"];


  document.getElementById("divOrder").style = "display:block";
  var grand_total = parseFloat(document.getElementById("thGrandTot").innerHTML);

  var ctrl_prod = document.getElementById("cmbPrd");
  var prod_name = ctrl_prod.options[ctrl_prod.selectedIndex].text;

  var ctrl_size = document.getElementById("cmTick");
  var size_name = ctrl_size.options[ctrl_size.selectedIndex].text;

  var ctrl_dur = document.getElementById("cmDur");
  var dur_name = ctrl_dur.options[ctrl_dur.selectedIndex].text;

  

  var tbody = document.getElementById("tbody_order");
  var trow = tbody.insertRow(-1)

  td1 = trow.insertCell(0);
  td1.innerHTML = prod_name;

  td2 = trow.insertCell(1);
  td2.innerHTML = size_name;

  td3 = trow.insertCell(2);
  td3.innerHTML= dur_name;

  td4 = trow.insertCell(3);
  td4.innerHTML= document.getElementById("Tick").value;

  

  var Total =parseFloat(document.getElementById("Cost").innerHTML);
  var ftotal=ftotal+Total;

  td5 =trow.insertCell(4);
  td5.innerHTML = Total.toFixed(2);

  td6 = trow.insertCell(3);
  td6.innerHTML=document.getElementById("cmDur").value;

  var total = parseFloat(document.getElementById("Tick").innerHTML);
  grand_total = grand_total + total;

  td7 = trow.insertCell(4);
  td7.innerHTML=total.toFixed(2);
  td7.style = "text-align:right";

  td8 = trow.insertCell(5);
  td8.innerHTML = "<a href='javascript:void(0)' style='color:red;font-weight:bold' onclick='removeRecord(this.parentElement);'>Remove</a>";

  document.getElementById("thGrandTot").innerHTML = grand_total.toFixed(2);

  resetPurchaseForm();
}


function resetPurchaseForm(){
  document.getElementById("frmPurchase").reset();
  document.getElementById("spCost").innerHTML = "0.00";
}


function removeRecord(item){
  var result = confirm("Do you want to remove this record?");
  
  if(result == true){
      var table = document.getElementById("tbl_order");
      var grand_total = parseFloat(document.getElementById("thGrandTot").innerHTML);
      var total = parseFloat(item.parentElement.cells[4].innerHTML);
      grand_total = grand_total - total;
      document.getElementById("thGrandTot").innerHTML = grand_total.toFixed(2);
      table.deleteRow(item.parentElement.rowIndex);
  }
 

}  
    
    
    