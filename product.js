const d = new Date();
document.getElementById("demo").innerHTML = d;

const $btnPrint = document.querySelector("#btnPrint");
$btnPrint.addEventListener("click",() =>{
//window.print();
var Content = document.getElementById("topic");
var prtContent = document.getElementById("container");
var prtCont = document.getElementById("totalContainer");
var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
WinPrint.document.write(Content.innerHTML);
WinPrint.document.write(prtContent.innerHTML);
WinPrint.document.write(prtCont.innerHTML);
WinPrint.document.close();
WinPrint.focus();
WinPrint.print();
WinPrint.close();
});

var total = 0;
        function test(x) {
          if (x.rowIndex) {
            var price = x.lastChild.innerHTML;
            price.slice(4);
            price.slice(-5);
            var table = document.getElementById("table");
            table.deleteRow(x.rowIndex);
            total = total - Number(price);
            totalPrice();
          } else {
            return;
          }
        }
  
  function food1(){
    var s  = "Oxtail & Curried Goat";  
    var p  = 24.95;
    var row = table.insertRow();
    row.setAttribute("onclick", "test(this)");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = s;
    cell2.innerHTML = p;
    total = total + p;
    totalPrice();   
  }
    function food2(){
      var food = "Jerk Chicken & Jerk BBQ Wings";
      var x = 20.95; 
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = food;
      cell2.innerHTML = x;
      total = total + x;
      totalPrice();
    }
    function food3(){
      var s1 = "Brown Stew & Curried Chicken";
      var p1 = 21.95;
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s1;
      cell2.innerHTML = p1;
      total = total + p1;
      totalPrice();
    }
    function food4(){
      var s2 = "Curried Red Snapper";
      var p2 = 18.95;
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s2;
      cell2.innerHTML = p2;
      total = total + p2;
      totalPrice(); 
    }
    function food5(){
      var s3 = "Brown  Stew Red Snapper";
      var p3 = 18.95;
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s3;
      cell2.innerHTML = p3;
      total = total + p3;
      totalPrice();
    }
    function food6(){
      var s4 = "Ackee & Saltfish";
      var p4 = 13.45;
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s4;
      cell2.innerHTML = p4;
      total = total + p4;
      totalPrice();
    } 
    function food7(){
      var s5 = "Callaloo & Saltfish";
      var p5 = 11.75;
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s5;
      cell2.innerHTML = p5;
      total = total + p5;
      totalPrice();  
    } 
    function food8(){
      var s6 = "king fish";
      var p6 = 13.75;
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s6;
      cell2.innerHTML = p6;
      total = total + p6;
      totalPrice();
    } 
    function food9(){
      var s7 = "Curried Chicken";
      var p7 = 15.75;
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s7;
      cell2.innerHTML = p7;
      total = total + p7;
      totalPrice();
    } 
    function food10(){
      var s8 = "Jerk Chicken";
      var p8 = 15.75;
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s8;
      cell2.innerHTML = p8;
      total = total + p8;
      totalPrice();
    } 
    function food11(){
      var s8 = "Brown Stew Chicken";
      var p8 = 22.75;
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s8;
      cell2.innerHTML = p8;
      total = total + p8;
      totalPrice();
    }  
    function food12(){
      var s9 = "jerk BBQ Wings";
      var p9 = 21.50;
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s9;
      cell2.innerHTML = p9;
      total = total + p9;
      totalPrice();
    } 
    function food13(){
      var s10 = "Curried Shrimp";
      var p10 = 18.50;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s10;
      cell2.innerHTML = p10;
      total = total + p10;
      totalPrice();
    }  
    function food14(){
      var s11 = "Steamed Red Snapper";
      var p11 = 18.50;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 
    
    function drink1(){
      var s11 = "Coffee";
      var p11 = 5.00;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    }
    
    function drink2(){
      var s11 = "Tea";
      var p11 = 4.50;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink3(){
      var s11 = "lemonade";
      var p11 = 6.25;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink4(){
      var s11 = "Orange Juice";
      var p11 = 10.00;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink5(){
      var s11 = "Soda";
      var p11 = 5.50;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink6(){
      var s11 = "Water";
      var p11 = 2.50;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink7(){
      var s11 = "Iced TEa";
      var p11 = 3.50;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink8(){
      var s11 = " Iced Coffee";
      var p11 = 5.25;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink9(){
      var s11 = "Smoothie";
      var p11 = 7.50;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink10(){
      var s11 = "Mike Shake";
      var p11 = 10.00;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink11(){
      var s11 = "Mojito";
      var p11 = 15.00;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink12(){
      var s11 = "Majarita";
      var p11 = 15.50;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink13(){
      var s11 = "Martini";
      var p11 = 20.00;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink14(){
      var s11 = "Old FAshioned";
      var p11 = 15.00;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink15(){
      var s11 = "Pina Colada";
      var p11 = 20.50;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink16(){
      var s11 = "Cosmopolitan";
      var p11 = 25.00;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink17(){
      var s11 = "Hot Chocolate";
      var p11 = 10.25;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink18(){
      var s11 = "Green Tea";
      var p11 = 5.20;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 

    function drink19(){
      var s11 = "WIne";
      var p11 = 25.00;
      //document.getElementById("item");
      //document.getElementById("tab");
      var row = table.insertRow();
      row.setAttribute("onclick", "test(this)");
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = s11;
      cell2.innerHTML = p11;
      total = total + p11;
      totalPrice();
    } 


   function totalPrice(){
          if (total < 0) {
            total = 0;
          }
          document.getElementById("totalContainer").innerHTML =
            "Total:" + total;
        }
        


function beverage1(){
  document.getElementById("movement").style.display = "none";
  document.getElementById("thedrinks").style.display = "block";
}

function foodmenu(){
  document.getElementById("movement").style.display = "block";
  document.getElementById("thedrinks").style.display = "none";
}
