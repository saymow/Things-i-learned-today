document.querySelector("form").onsubmit = (event) => handleSubmit(event);

function handleSubmit(event) {
  event.preventDefault();
}

document.querySelectorAll("[required]").forEach((input) => {
  input.addEventListener("invalid", (event) => {
    event.preventDefault();
    customValidation(event);
  });
  input.addEventListener("blur", (event) => customValidation(event));
});

function validateField(field) {
  console.log(field);
  function verifyError() {
    for (error in field.validity) {
      if (field.validity[error] && !field.validity.valid) return error;
    }

    return false;
  }

  function customMessage(typeError) {
    const messages = {
      text: {
        valueMissing: "You must fill this field."
      },

      email: {
        valueMissing: "You must fill this field.",
        typeMismatch: "You must type a valid email."
      }
    }

    return messages[field.type][typeError];
  }

  function setCustomMessage(message) {
    const spanError = field.parentNode.querySelector("span.error");

    if (message) {
      spanError.classList.add("active");
      spanError.innerHTML = message;
    } else {
      spanError.classList.remove("active");
      spanError.innerHTML = "";
    }
  }

  return function () {
    const error = verifyError();

    if (error) {
      const message = customMessage(error);
      console.log(message)

      field.style.borderColor = "#f00";
      setCustomMessage(message);
    }
    else {
      setCustomMessage("");
      field.style.borderColor = "#0f0";
    }
  };
}

function customValidation(event) {
  const field = event.target;

  const Validation = validateField(field);

  Validation()
}
