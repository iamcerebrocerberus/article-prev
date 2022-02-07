const shareBtn = document.querySelector('.js-share-btn');
const iconCtn = document.querySelector('.js-icon-container');
const shareIcn = document.querySelector('.js-share-icon')

shareBtn.onclick = function() {
    iconCtn.classList.toggle('is-hidden');
    shareBtn.classList.toggle('share-btn-updt')
    shareIcn.classList.toggle('has-chng');
}
