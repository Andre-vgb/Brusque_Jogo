import imgPergunta1  from '../assets/pergunta1.png'
import imgPergunta2  from '../assets/pergunta2.png'
import imgPergunta3  from '../assets/pergunta3.png'
import imgPergunta4  from '../assets/pergunta4.png'
import imgPergunta5  from '../assets/pergunta5.png'
import imgPergunta6  from '../assets/pergunta6.png'
import imgPergunta7  from '../assets/pergunta7.png'
import imgPergunta8  from '../assets/pergunta8.png'
import imgPergunta9  from '../assets/pergunta9.png'
import imgPergunta10 from '../assets/pergunta10.png'
import imgPergunta11 from '../assets/pergunta11.png'
import imgPergunta12 from '../assets/pergunta12.png'
import imgPergunta13 from '../assets/pergunta13.png'
import imgPergunta14 from '../assets/pergunta14.png'
import imgPergunta15 from '../assets/pergunta15.png'

export const perguntas = [
  {
    id: 1, nivel: 'facil',
    emoji: '🏙️', imagem: imgPergunta1,
    texto: 'Qual é o nome da nossa cidade?',
    opcoes: [
      { texto: 'Florianópolis', correta: false },
      { texto: 'Brusque',       correta: true  },
      { texto: 'Blumenau',      correta: false },
      { texto: 'Itajaí',        correta: false },
    ],
    audio: '/audio/pergunta_1.mp3',
  },
  {
    id: 2, nivel: 'medio',
    emoji: '🌊', imagem: imgPergunta2,
    texto: 'Qual rio passa pelo centro de Brusque?',
    opcoes: [
      { texto: 'Rio Tietê',        correta: false },
      { texto: 'Rio Amazonas',     correta: false },
      { texto: 'Rio Paraná',       correta: false },
      { texto: 'Rio Itajaí-Mirim', correta: true  },
    ],
    audio: '/audio/pergunta_2.mp3',
  },
  {
    id: 3, nivel: 'medio',
    emoji: '🗺️', imagem: imgPergunta3,
    texto: 'Em qual estado fica Brusque?',
    opcoes: [
      { texto: 'Paraná',         correta: false },
      { texto: 'São Paulo',      correta: false },
      { texto: 'Santa Catarina', correta: true  },
      { texto: 'Rio de Janeiro', correta: false },
    ],
    audio: '/audio/pergunta_3.mp3',
  },
  {
    id: 4, nivel: 'dificil',
    emoji: '🏛️', imagem: imgPergunta4,
    texto: 'Como se chama a praça principal do centro de Brusque?',
    opcoes: [
      { texto: 'Praça Barão do Rio Branco', correta: true  },
      { texto: 'Praça da Sé',              correta: false },
      { texto: 'Praça da Liberdade',       correta: false },
      { texto: 'Praça Tiradentes',         correta: false },
    ],
    audio: '/audio/pergunta_4.mp3',
  },
  {
    id: 5, nivel: 'dificil',
    emoji: '🎉', imagem: imgPergunta5,
    texto: 'Qual é a grande festa de Brusque, com comida típica e muita animação?',
    opcoes: [
      { texto: 'Oktoberfest',  correta: false },
      { texto: 'Festa Junina', correta: false },
      { texto: 'Carnaval',     correta: false },
      { texto: 'Fenarreco',    correta: true  },
    ],
    audio: '/audio/pergunta_5.mp3',
  },
  {
    id: 6, nivel: 'dificil',
    emoji: '🌍', imagem: imgPergunta6,
    texto: 'De que país vieram os primeiros moradores de Brusque?',
    opcoes: [
      { texto: 'Alemanha',       correta: true  },
      { texto: 'França',         correta: false },
      { texto: 'Japão',          correta: false },
      { texto: 'Estados Unidos', correta: false },
    ],
    audio: '/audio/pergunta_6.mp3',
  },
  {
    id: 7, nivel: 'facil',
    emoji: '🎨', imagem: imgPergunta7,
    texto: 'Qual cor aparece na bandeira de Brusque?',
    opcoes: [
      { texto: 'Amarelo e Azul',   correta: false },
      { texto: 'Verde e Branco',   correta: true  },
      { texto: 'Vermelho e Preto', correta: false },
      { texto: 'Rosa e Laranja',   correta: false },
    ],
    audio: '/audio/pergunta_7.mp3',
  },
  {
    id: 8, nivel: 'dificil',
    emoji: '🍽️', imagem: imgPergunta8,
    texto: 'Qual prato típico, feito com repolho fermentado, é muito apreciado em Brusque?',
    opcoes: [
      { texto: 'Tapioca',          correta: false },
      { texto: 'Pizza',            correta: false },
      { texto: 'Acarajé',          correta: false },
      { texto: 'Marreco Recheado', correta: true  },
    ],
    audio: '/audio/pergunta_8.mp3',
  },
  {
    id: 9, nivel: 'medio',
    emoji: '🏭', imagem: imgPergunta9,
    texto: 'O que Brusque fabrica e pelo que é famosa no Brasil inteiro?',
    opcoes: [
      { texto: 'Aviões',           correta: false },
      { texto: 'Carros',           correta: false },
      { texto: 'Tecidos e Roupas', correta: true  },
      { texto: 'Barcos',           correta: false },
    ],
    audio: '/audio/pergunta_9.mp3',
  },
  {
    id: 10, nivel: 'medio',
    emoji: '👔', imagem: imgPergunta10,
    texto: 'Como Brusque é conhecida popularmente?',
    opcoes: [
      { texto: 'Cidade do Chocolate', correta: false },
      { texto: 'Cidade dos Tecidos',  correta: true  },
      { texto: 'Cidade das Flores',   correta: false },
      { texto: 'Cidade do Sol',       correta: false },
    ],
    audio: '/audio/pergunta_10.mp3',
  },
  {
    id: 11, nivel: 'facil',
    emoji: '🍰', imagem: imgPergunta11,
    texto: 'Qual o doce que as pessoas de Brusque amam?',
    opcoes: [
      { texto: 'Melado',      correta: false },
      { texto: 'Cuca',        correta: true  },
      { texto: 'Nega Maluca', correta: false },
      { texto: 'Sonho',       correta: false },
    ],
    audio: '/audio/pergunta_11.mp3',
  },
  {
    id: 12, nivel: 'dificil',
    emoji: '🌳', imagem: imgPergunta12,
    texto: 'Como se chama o parque de Brusque onde as crianças podem brincar e ter contato com a natureza?',
    opcoes: [
      { texto: 'Parque da Tijuca',      correta: false },
      { texto: 'Parque do Ibirapuera',  correta: false },
      { texto: 'Parque das Esculturas', correta: true  },
      { texto: 'Parque do Rio Doce',    correta: false },
    ],
    audio: '/audio/pergunta_12.mp3',
  },
  {
    id: 13, nivel: 'dificil',
    emoji: '🏠', imagem: imgPergunta13,
    texto: 'Qual tipo de construção antiga, trazida pelos alemães, que ainda existe em Brusque?',
    opcoes: [
      { texto: 'Casa de Enxaimel', correta: true  },
      { texto: 'Iglu',             correta: false },
      { texto: 'Palafita',         correta: false },
      { texto: 'Tenda',            correta: false },
    ],
    audio: '/audio/pergunta_13.mp3',
  },
  {
    id: 14, nivel: 'facil',
    emoji: '🐦', imagem: imgPergunta14,
    texto: 'Qual passarinho cantor vive nos parques e matas de Brusque?',
    opcoes: [
      { texto: 'Tubarão',  correta: false },
      { texto: 'Leão',     correta: false },
      { texto: 'Elefante', correta: false },
      { texto: 'Sabiá',    correta: true  },
    ],
    audio: '/audio/pergunta_14.mp3',
  },
  {
    id: 15, nivel: 'facil',
    emoji: '🎂', imagem: imgPergunta15,
    texto: 'Quando Brusque comemora o seu aniversário?',
    opcoes: [
      { texto: '25 de Dezembro', correta: false },
      { texto: '7 de Setembro',  correta: false },
      { texto: '4 de Agosto',    correta: true  },
      { texto: '1º de Janeiro',  correta: false },
    ],
    audio: '/audio/pergunta_15.mp3',
  },
]
