function showSimpleForm() {
  const formSimple = document.getElementById('form_simple');
  const formCompuesto = document.getElementById('form_compuesto');

  formSimple.style.display = 'block';
  formCompuesto.style.display = 'none';

  showButtons();
}

function showConditionalForm() {
  const formSimple = document.getElementById('form_simple');
  const formCompuesto = document.getElementById('form_compuesto');

  formSimple.style.display = 'none';
  formCompuesto.style.display = 'block';

  showButtons();
}

function showButtons() {
  const buttonContainer = document.querySelector('.button-container');
  buttonContainer.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function() {
  const formSimple = document.getElementById('form_simple');
  const formCompuesto = document.getElementById('form_compuesto');

  formSimple.addEventListener('submit', function(event) {
    event.preventDefault();

    const casosFavorables = parseFloat(document.getElementById('casos_fav').value);
    const casosTotales = parseFloat(document.getElementById('casos_tot').value);
    const descripcion = document.getElementById('descripcion').value;

    if (casosTotales === 0) {
      alert('No se puede dividir por cero. Por favor, ingrese un valor válido para "Casos Totales".');
    } else {
      const probabilidadSimple = (casosFavorables / casosTotales) * 100;
      const datos = [casosFavorables, casosTotales];
      const media = datos.reduce((a, b) => a + b, 0) / datos.length;
      const mediana = datos.length % 2 === 0 ? (datos[datos.length / 2 - 1] + datos[datos.length / 2]) / 2 : datos[Math.floor(datos.length / 2)];
      const rango = Math.max(...datos) - Math.min(...datos);

      alert(`La probabilidad de ${descripcion} es ${probabilidadSimple.toFixed(2)}%.\nMedia: ${media.toFixed(2)}\nMediana: ${mediana.toFixed(2)}\nRango: ${rango.toFixed(2)}`);
    }
    showButtons();
  });

  formCompuesto.addEventListener('submit', function(event) {
    event.preventDefault();
    Calcularab();
  });
});

function Calcularab(){ 
  const probabilidadA = parseFloat(document.getElementById('probabilidad_a').value);
  const probabilidadB = parseFloat(document.getElementById('probabilidad_b').value);

  if (isNaN(probabilidadA) || isNaN(probabilidadB)) {
    // alert('Por favor, ingrese valores numéricos válidos.');
    return;
  }

  const resultado_ab = probabilidadA + probabilidadB;
  document.getElementById("resultado_compuesto").innerText = `A + B = ${resultado_ab}`;
}
