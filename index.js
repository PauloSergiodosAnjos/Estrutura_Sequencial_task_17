//17
const question = Number(prompt('Informe o tamanho da área a ser pintada em metros quadrados:'));
const litros_necessários = question / 6
const litros_necessários_com_folga = Math.ceil(litros_necessários * 1.1);
const latas_necessarias = Math.ceil(litros_necessários_com_folga / 18);
const galoes_necessarios = Math.ceil(litros_necessários_com_folga / 3.6);
const preco_latas = latas_necessarias * 80;
const preco_galoes = galoes_necessarios * 25;  
const latas_misturadas = Math.floor(litros_necessários_com_folga / 18);
const galoes_misturados = Math.ceil((litros_necessários_com_folga % 18) / 3.6);
const preco_misturado = latas_misturadas * 80 + galoes_misturados * 25;

console.log('Quantidade de tinta necessária:', litros_necessários_com_folga.toFixed(2), 'litros');
console.log('Comprar apenas latas de 18 litros:', latas_necessarias, 'latas, custando R$', preco_latas.toFixed(2));
console.log('Comprar apenas galões de 3,6 litros:', galoes_necessarios, 'galões, custando R$', preco_galoes.toFixed(2));

console.log('Misturar latas e galões:', latas_misturadas, 'latas e', galoes_misturados, 'galões, custando R$', preco_misturado.toFixed(2));