

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  return document.querySelector(`#grand-node div div div div`)
}
// .ranked-list ${n}
function increaseRankBy(n) {
  var lists = document.querySelectorAll('.ranked-list li')
  lists.forEach ( function(element) {
    var old_number = Number(element.innerHTML)
    element.innerHTML = old_number + n
  })
  return lists
}
