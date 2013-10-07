function tipCalculate(slider, bill){
  var tip, slideval, prcnt;
   tip = document.getElementById('tip');
   slideval = document.getElementById('slideVal');
   bill = document.getElementById(bill).value;
   if(isNaN(bill)){
    tip.innerHTML = "enter your bill amount";
   }else{
    prcnt = slider * .01;
    tip.innerHTML = "$" + (bill * prcnt).toFixed(2);
    slideval.innerHTML = slider + "%";
  }
}
