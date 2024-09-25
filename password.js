
function checkPasswordStrength(password) {
    let hasLowercase = password.match(/[a-z]/);
    let hasUppercase = password.match(/[A-Z]/);
    let hasNumber = password.match(/[0-9]/);
    let hasSpecialChar = password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);
  
    if (!hasLowercase) {
      throw new Error("Password must contain at least one lowercase letter.");
    }
    if (!hasUppercase) {
      throw new Error("Password must contain at least one uppercase letter.");
    }
    if (!hasNumber) {
      throw new Error("Password must contain at least one number.");
    }
    if (!hasSpecialChar) {
      throw new Error("Password must contain at least one special character.");
    }
  
    let strength = 0;
  
    if (password.length < 8) {
      strength = 0;
    } else {
      if (hasLowercase && hasUppercase && hasNumber && hasSpecialChar) {
        strength = 7;
      } else if (hasLowercase && hasUppercase && hasNumber) {
        strength = 6;
      } else if (hasLowercase && hasUppercase && hasSpecialChar) {
        strength = 6;
      } else if (hasLowercase && hasNumber && hasSpecialChar) {
        strength = 6;
      } else if (hasUppercase && hasNumber && hasSpecialChar) {
        strength = 6;
      } else if (hasLowercase && hasUppercase) {
        strength = 5;
      } else if (hasLowercase && hasNumber) {
        strength = 5;
      } else if (hasLowercase && hasSpecialChar) {
        strength = 5;
      } else if (hasUppercase && hasNumber) {
        strength = 5;
      } else if (hasUppercase && hasSpecialChar) {
        strength = 5;
      } else if (hasNumber && hasSpecialChar) {
        strength = 5;
      } else if (hasLowercase || hasUppercase || hasNumber || hasSpecialChar) {
        strength = 3;
      } else {
        strength = 2;
      }
    }
  
    return strength;
  }
  

  function displayPasswordStrength(strength) {
    let message;
  
    switch (strength) {
      case 0:
        message = 'Very weak';
        break;
      case 1:
        message = 'Weak';
        break;
      case 2:
        message = 'Medium';
        break;
      case 3:
        message = 'Strong';
        break;
      case 4:
        message = 'Very strong';
        break;
      case 5:
        message = 'Excellent';
        break;
      case 6:
        message = 'Excellent';
        break;
      case 7:
        message = 'Excellent';
        break;
      default:
        message = 'Unknown';
    }
  
    let strengthMeter = document.getElementById('strength-meter');
    strengthMeter.textContent = `Password strength: ${message}`;
    strengthMeter.style.color = getStrengthColor(strength);
  }
  
 
  function getStrengthColor(strength) {
    switch (strength) {
      case 0:
        return 'red';
      case 1:
        return 'orange';
      case 2:
        return 'yellow';
      case 3:
        return 'green';
      case 4:
        return 'limegreen';
      case 5:
        return 'green';
      case 6:
        return 'green';
      case 7:
        return 'green';
      default:
        return 'gray';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let password = document.getElementById('password').value;
      try {
        let strength = checkPasswordStrength(password);
        displayPasswordStrength(strength);
      } catch (error) {
        let strengthMeter = document.getElementById('strength-meter');
        strengthMeter.textContent = error.message;
        strengthMeter.style.color = 'red';
      }
    });
  });