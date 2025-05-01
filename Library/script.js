/*function copiarCodigo() {
    const codigo = document.querySelector('.code__block');
    const btnCopiar = document.querySelector('.copy__clipboard');
    codigo.forEach(codigos => {
        const codigoText = codigos.innerText.trim();
        const codeNoSpaces = codigoText.replace(/\n/g).trim()
        navigator.clipboard.writeText(codeNoSpaces)
        .then(() => {alert('Texto Copiado')
        })
        
        .catch(err =>alert("Error al copiar:", err));
 });
}*/
function copiarCodigo(boton) {
    const contenedor = boton.closest('.code__copy');
    const bloqueCodigo = contenedor.querySelector('.code__block');
  
    if (bloqueCodigo) {
      const texto = bloqueCodigo.innerText.trim().replace(/\n/g, '');
      navigator.clipboard.writeText(texto)
        .then(() => {
          boton.innerHTML = "<i class='bx bx-check' style='color:#000000'></i> Copiado";
          setTimeout(() => {
            boton.innerHTML = "<i class='bx bx-clipboard' style='color:#000000'></i> Copiar";
          }, 1500);
        })
        .catch(err => {
          alert('Error al copiar: ' + err);
        });
    } else {
      alert('No se encontró el bloque de código');
    }
  }
