
  //ingredients
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("li");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  


  //appliance 
  
  function FunctionApp() {
    document.getElementById("AppCards").classList.toggle("showApp");
  }
  
  function filterFunctionApp() {
    var inputApp, filterApp, ul, li, a, i;
    inputApp= document.getElementById("myInput");
    filterApp = inputApp.value.toUpperCase();
    div = document.getElementById("AppCards");
    a = div.getElementsByTagName("li");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filterApp) > -1) {
       
        a[i].style.display = "none";
      } else {
        a[i].style.display = "";
      }
    }
  }
  

  //Ustensils


  function FunctionUst() {
    document.getElementById("ustCards").classList.toggle("showApp");
  }
  
  function filterFunctionUst() {
    var inputApp, filterApp, ul, li, a, i;
    inputApp= document.getElementById("myInput");
    filterApp = inputApp.value.toUpperCase();
    div = document.getElementById("ustCards");
    a = div.getElementsByTagName("li");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filterApp) > -1) {
       
        a[i].style.display = "none";
      } else {
        a[i].style.display = "";
      }
    }
  }
  
