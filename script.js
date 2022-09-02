document.querySelector('ul').onclick = function(e) {
  const btn = e.target.closest('.delete');
  if (!btn) {
    return;
  }
  
  btn.parentElement.remove();
  // btn.closest('li').remove();
}