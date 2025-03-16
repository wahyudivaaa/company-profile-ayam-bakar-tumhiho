
document.addEventListener("DOMContentLoaded", () => {
  const email = document.querySelector("#email");
  const name = document.querySelector("#name");
  const textarea = document.querySelector("#textarea");
  const submit = document.querySelector("#submit");

  const checkInput = () => {
    if (email.value !== "" && name.value !== "" && textarea.value !== ""){
        submit.disabled = ""
        submitHelp.innerText = ""
    }else {
      submitHelp.innerText = "Please, fill all the information"
      submit.disabled = "disabled"
    }
  }

email.addEventListener("change", checkInput)
name.addEventListener("change", checkInput)
textarea.addEventListener("change", checkInput)

})
