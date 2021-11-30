const cupons = [
  {url: '../Imagens/Cupom20.png', codigo: '20OFFSNC'},
  {url: '../Imagens/Cupom30.png', codigo: '30OFFSNC'},
  {url: '../Imagens/Cupom50.png', codigo: '50OFFSNC'}
];

function pegarCupomAleatorio(){
  return cupons[Math.floor(Math.random() * cupons.length)];
}

function copiarCodigo(){
  var code = document.getElementById('codigo--raspadinha');

  code.select();

  document.execCommand("Copy");
}

var cupom = pegarCupomAleatorio();

$('#raspadinha').wScratchPad({
    size        : 50,          // The size of the brush/scratch.
    bg          : cupom.url,  // Background (image path or hex color).
    fg          : '../Imagens/CapaRaspadinha.png',  // Foreground (image path or hex color).
    scratchMove : function(e, percent){
      if(percent >= 80){
        document.getElementById('codigo--raspadinha').value = cupom.codigo;
        document.getElementById('codigo--raspadinha').style.display = "block";
        document.getElementById('copiar').style.display = "block";
        document.getElementById('pulso').style.display = "none";
      }
    },       // Set scratcMove callback.
    cursor      : 'crosshair' // Set cursor.
  });
