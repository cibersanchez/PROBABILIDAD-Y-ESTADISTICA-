document.addEventListener('DOMContentLoaded', function() {
    const btnAB = document.getElementById('btn_ab');
  
    btnAB.addEventListener('click', function() {
      const probabilidadAInput = document.getElementById('probabilidad_a');
      const probabilidadBInput = document.getElementById('probabilidad_b');

      if (probabilidadAInput.value.trim() === '' || probabilidadBInput.value.trim() === '') {
        alert('Por favor, ingrese valores para ambos campos.');
        return; 
      }

      
      if (isNaN(probabilidadAInput.value) || isNaN(probabilidadBInput.value)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return; 
      }

      const probabilidadA = parseFloat(probabilidadAInput.value);
      const probabilidadB = parseFloat(probabilidadBInput.value);
  
      if (probabilidadB === 0) {
        alert('No se puede dividir por cero. Por favor, ingrese un valor válido para "Probabilidad B".');
      } else {
        const probabilidadCondicionalab = (probabilidadA / probabilidadB) * 100;
        const datos = [probabilidadA, probabilidadB];
        const media = datos.reduce((a, b) => a + b, 0) / datos.length;
        const mediana = datos.length % 2 === 0 ? (datos[datos.length / 2 - 1] + datos[datos.length / 2]) / 2 : datos[Math.floor(datos.length / 2)];
        const rango = Math.max(...datos) - Math.min(...datos);
        alert(`La probabilidad condicional es de A en B ${probabilidadCondicionalab.toFixed(2)}%.\nMedia: ${media.toFixed(2)}\nMediana: ${mediana.toFixed(2)}\nRango: ${rango.toFixed(2)}`);
      }
    });
});
