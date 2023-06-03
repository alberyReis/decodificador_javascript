const btnCriptografar = document.querySelector('.button_crip')
const btnDescriptografar = document.querySelector('.button_desc')
const btnCopiar = document.querySelector('.copiar')
const input = document.querySelector('#input_text')
const containerResultado = document.querySelector('#container_resultado')

const criptografar = () => {
    const inputCriptografar = input.value
    const textCriptografado = inputCriptografar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
    containerResultado.innerHTML = ''
    containerResultado.innerHTML = '<textarea name="" id="texto_resultado" readonly cols="15" rows="10">' + textCriptografado + '</textarea>'
}

const descriptografar = () => {
    const inputDescriptografar = input.value;
    const textDescriptografado = inputDescriptografar.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")
    containerResultado.innerHTML = ''
    containerResultado.innerHTML = '<textarea name="" id="texto_resultado" readonly cols="15" rows="10">' + textDescriptografado + '</textarea>'
}

const copiar = () => {
    let textoCopiado = document.getElementById('texto_resultado')
    textoCopiado.select()
    document.execCommand('copy')
    textoCopiado.innerHTML = ''
}

btnCriptografar.addEventListener('click', (event) => {
    criptografar()
})

btnDescriptografar.addEventListener('click', (event) => {
    descriptografar()
})

btnCopiar.addEventListener('click', (event) => {
    copiar()
})



