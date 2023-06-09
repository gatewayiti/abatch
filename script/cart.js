function increment(){
  let element = document.getElementById('count').innerHTML
document.getElementById('count').innerHTML = Number(element) + 1
}
function decrement(){
    let element = document.getElementById('count').innerHTML
 if (element > 1) {
    document.getElementById('count').innerHTML = Number(element) - 1
 }else{
    removecard() 
 }
  }

  function removecard(){
   const element = document.getElementById('card')
   element.remove()
  }