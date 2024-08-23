document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let foods = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(checkbox => checkbox.value);
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;
  
    
    let tableBody = document.getElementById('tablebody');
    let newRow = document.createElement('tr');
  
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foods.join(', ')}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;
    
    
    tableBody.appendChild(newRow);
  
    
    document.getElementById('form').reset();
  });