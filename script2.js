
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  
  e.preventDefault();

  const formData = new FormData(form);

  if (validateFormData(formData)) {
   
    console.log('Form submitted successfully!');
  } else {
    console.log('Form validation failed!');
  }
});


function validateFormData(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const gender = formData.get('gender');
  const country = formData.get('country');
  const date = formData.get('date');


  if (!name || !email || !password || !gender || !country || !date) {
    return false;
  }


  return true;
}



async function sendDataToBackend(formData) {
    const response = await fetch('/api/form-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  
    if (response.ok) {
      console.log('Data sent successfully!');
    } else {
      console.error('Error sending data:', response.status);
    }
  }





  function sendDataToBackend(formData) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/form-data', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(formData));
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Data sent successfully!');
      } else {
        console.error('Error sending data:', xhr.status);
      }
    };
  }





  function sendDataToBackend(formData) {
    $.ajax({
      type: 'POST',
      url: '/api/form-data',
      data: JSON.stringify(formData),
      contentType: 'application/json',
      success: function() {
        console.log('Data sent successfully!');
      },
      error: function(xhr, status, error) {
        console.error('Error sending data:', xhr.status);
      }
    });
  }
  
//   In each example, the function takes the form data as an argument and sends it to a backend API endpoint using a different method (Fetch API, XMLHttpRequest, or jQuery). You'll need to update the URL and any authentication or authorization headers to match your specific backend setup.
  
//   Remember to call the appropriate function in your form submission event listener, like this:
  
  form.addEventListener('submit', (e) => {
    // ...
    sendDataToBackend(formData);
  });




  signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;
  
    const userData = {
      name,
      email,
      password,
      gender,
      country
    };
  
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log('User signed up successfully!');
        // Redirect to login page or dashboard
      } else {
        console.error('Error signing up:', data.error);
      }
    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });
  });
  