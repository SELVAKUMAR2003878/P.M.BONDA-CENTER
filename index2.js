
function sendWhatsApp() {
  const phoneNumber = "+91 9444433661";
  let Name = document.getElementById("name").value;
  let Age = document.getElementById("age").value;
  let Email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let Address = document.getElementById("address").value;
  let quantity = document.getElementById("quantity").value;
  let type = document.getElementById("type").value;
  let Amount = document.getElementById("viewcon").textContent;
  let Gender;
  let Male = document.getElementById("Male").value;
  let Female = document.getElementById("Female").value;
  if(Male.checked) {
    Gender = "Male";
  } 
  else if(Female.checked) {
    Gender = "Female";
  }
  else{
    Gender = null;
  }

  var url = "https://wa.me/" + phoneNumber + "?text="
  + "Name :" + Name + "%0a"
  + "Age :" + Age + "%0a"
  + "number :" + number + "%0a"
  + "Email :" + Email + "%0a"
  + "Address :" + Address + "%0a"
  + "Quantity :" + quantity + "%0a"
  + "Type :" + type + "%0a"
  + "Amount :" + Amount + "%0a"
  + "Gender :" + Gender + "%0a%0a";

  window.open(url , "_blank").focus();
}




function amount() {

  const quantity = document.getElementById("quantity").value;
  const type = document.getElementById("type").value;
  const result = document.getElementById("viewcon");

  let redcoc = 35;
  let greencoc = 25;
  let petrol = 50;

  if (quantity == "") {
    result.textContent = `0`;
  } 

  else if (quantity < 100) {
    result.textContent = "Quantity is must be greater than 100";
  } 

  else {

    if (type == "red cocunut") {
      let price = quantity * redcoc + petrol;
      result.textContent = `your total Amount is:${price}`;
    } 
    else if (type == "green cocunut") {
      let price = quantity * greencoc + petrol;
      result.textContent = `your total Amount is:${price}`;
    }
  }
    console.log("Hi");
    setInterval(amount , 3000);
  
}
