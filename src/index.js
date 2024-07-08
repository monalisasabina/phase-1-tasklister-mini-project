document.addEventListener("DOMContentLoaded", () => {
  // your code here

   let form =document.querySelector('form')
       form.addEventListener('submit',(event) => {
       event.preventDefault();
       puttingTheList(event.target.querySelector('#new-task-description').value)
       form.reset()
   }) 
});

function puttingTheList(newTask){
  let li =document.createElement('li')
  li.textContent= `${newTask}`
  document.querySelector('#tasks').appendChild(li)

  // adding button to the list
  let btn =document.createElement('button');
  btn.textContent='x'
  document.querySelector('#tasks').appendChild(btn)

  //delete the list when clicked using the button
  btn.addEventListener('click',deleteButton)
}

function deleteButton(event){
  event.target.parentNode.remove()
}