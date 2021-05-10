let loading = document.querySelector('.loading');

function loaded(state = false){
  if(state){
    loading.remove();
  }
}