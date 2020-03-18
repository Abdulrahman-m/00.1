function Customer(name,mobile,price1,price2,priceB,theDate,DeliveryIn,Details1,Details2,Details3,Details4,Details5,Details6,Details7,Details8,Notes,status){
  
  var d = new Date(); ///
  var mm = d.getDay() +1 ;
  var dd = d.getDate();
  var yy = d.getFullYear();
  var ms = " - ";
  var ss = ":";
  var sm = " / ";
  var t = d.getHours() ;
  var mn = d.getMinutes() ;
  var theDate = dd + sm + mm + sm + yy ;
  //  console.log(theDate) ;
 

  this.name = name;
  this.mobile = mobile;
  this.price1 = price1;
  this.price2 = price2;
  this.priceB = priceB;
  this.theDate = theDate;
  this.DeliveryIn = DeliveryIn;
  this.Details1 = Details1;
  this.Details2 = Details2;
  this.Details3 = Details3;
  this.Details4 = Details4;
  this.Details5 = Details5;
  this.Details6 = Details6;
  this.Details7 = Details7;
  this.Details8 = Details8;
  this.Notes = Notes ; 
  this.status = "قيد التجهيز";


}
// const thmml = `الطول: ${Details2}  الكتف: ${Details3} طول الكم: ${Details4}  <br> 
// وسع الصدر: ${Details5}  الرقبة: ${Details6}  <br>
//  وسع اليدين: ${Details7} نوع القماش: ${Details8}`
function CustomerUI(){};

CustomerUI.prototype.addCustomerToList = function(theCustomer){
  const div = document.getElementById("targt");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div") ;
  const div4 = document.createElement("div");
  div1.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
  div2.className = "tile" ;
  div3.className = "wrapper" 
  
  div4.innerHTML = `<div class="header">${theCustomer.name}</div>
  <div class="dates">
      <div class="start"> <strong>تاريخ التسليم</strong> ${theCustomer.DeliveryIn}</div>
      <div class="ends"><strong>تاريخ الطلب</strong> ${theCustomer.theDate}</div>
  </div>
  <div class="stats">
      <div><strong>العدد</strong> ${theCustomer.Details1}</div>
      <div><strong>نوع القماش</strong> ${theCustomer.Details8}</div>
      <div><strong>الطول</strong> ${theCustomer.Details2}</div>
      <div><strong>الكتف</strong> ${theCustomer.Details3}</div>
      <div><strong>طول الكم</strong> ${theCustomer.Details4}</div>
      <div><strong>وسع الصدر</strong>${theCustomer.Details5}</div>
      <div><strong>الرقبة</strong>${theCustomer.Details6}</div>
      <div><strong>وسع اليدين</strong>${theCustomer.Details7}</div>
      <div><strong>حالة الطلب</strong> ${theCustomer.status}</div>
  </div>
  
  <div class="stats">
      <div><strong class="blllok" >الباقي</strong>${theCustomer.priceB}</div>
      <div><strong>العربون</strong> ${theCustomer.price2}</div>
      <div><strong>المبلغ</strong>${theCustomer.price1}</div>
  </div>
  <div class="header">${theCustomer.Notes}</div>
  <div class="header">${theCustomer.mobile}</div>
  
  <div class="footer">
      <a href="#" class="Cbtn Cbtn-primary">جاهز</a>
      <a href="#" class="Cbtn Cbtn-danger">تم التسليم</a>
  </div>`;
  
  
  div.appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(div4);
  
  

};

document.getElementById("priceB").addEventListener("mouseenter",NewV);
//document.getElementById("theDate").addEventListener("mouseenter",NewD);


document.getElementById("student-form").addEventListener("submit",function(e){
e.preventDefault();
const name = document.getElementById("name").value;
const mobile = document.getElementById("mobile").value;
const price1 = document.getElementById("price1").value; 
const price2 = document.getElementById("price2").value; 
const priceB = document.getElementById("priceB").value; 
//const theDate = document.getElementById("theDate").value;
const DeliveryIn = document.getElementById("DeliveryIn").value;
const Details1 = document.getElementById("Details1").value;
const Details2 = document.getElementById("Details2").value;
const Details3 = document.getElementById("Details3").value;
const Details4 = document.getElementById("Details4").value;
const Details5 = document.getElementById("Details5").value;
const Details6 = document.getElementById("Details6").value;
const Details7 = document.getElementById("Details7").value;
const Details8 = document.getElementById("Details8").value;
const Notes = document.getElementById("Notes").value;

const theCustomer = new Customer(name,mobile,price1,price2,priceB,theDate,DeliveryIn,Details1,Details2,Details3,Details4,Details5,Details6,Details7,Details8,Notes,status);

const customerUI = new CustomerUI() ;

customerUI.addCustomerToList(theCustomer)

console.log(theCustomer);

});



function NewV(){  /// حساب الباقي المبلغ بعد خصم العربون
  let i = document.getElementById("price1").value ;
  let l = document.getElementById("price2").value; 
  let o = document.getElementById("priceB") ; 
  o.value = i - l;
}; 



// function NewD(){  /// وضع التاريخ بشكل الي
//   var d = new Date();
//   var mm = d.getDay() +1 ;
//   var dd = d.getDate();
//   var yy = d.getFullYear();
//   var ms = "-";
//   var fddmmyy = dd + ms+mm+ms+yy;
//   //  console.log(fddmmyy) ;
//  // let nolla = document.getElementById("theDate"); 
//   nolla.value = fddmmyy  ;
// }; 




