const openModalLogin = document.querySelector("#logAccount")
const openModalNewUser = document.querySelector("#createAccount")
const modalLogin = document.querySelector("main dialog.loginUser")
const modalNewUser = document.querySelector("main dialog.newUser")
const closeModal = document.querySelector(".closeModal")

openModalLogin.onclick = () => {
  modalLogin.showModal()
}
closeModal.onclick = () => {
  modalLogin.close()
}


openModalNewUser.onclick = () => {
  modalNewUser.showModal()
}
closeModal.onclick = () => {
  modalNewUser.close()
}