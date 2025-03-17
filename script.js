function gostei(){
    let like = window.document.querySelector('span#like');

        like.innerHTML = `👍🏻 <span>Gostei</span>`
        like.style.color = 'blue' 
    }


function amei(){
    let coracao = window.document.querySelector('span#amei');
    coracao.innerHTML = `❤️ <span>Amei</span>`
    coracao.style.color = 'red'
}