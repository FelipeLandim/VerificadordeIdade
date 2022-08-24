function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert(`[ERRO] Verifique os dados e tente novamente...`)
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if ( fsex[0].checked ) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10 ) {
                //criança
                img.setAttribute('src', 'bebeM.jpg')
            } else if (idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovemH.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'Homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'bebeF.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'Mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }   
}