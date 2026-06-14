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
import imgPergunta16 from '../assets/pergunta16.png'
import imgPergunta17 from '../assets/pergunta17.png'
import imgPergunta18 from '../assets/pergunta18.png'
import imgPergunta19 from '../assets/pergunta19.png'
import imgPergunta20 from '../assets/pergunta20.png'
import imgPergunta21 from '../assets/pergunta21.png'
import imgPergunta22 from '../assets/pergunta22.png'
import imgPergunta23 from '../assets/pergunta23.png'
import imgPergunta24 from '../assets/pergunta24.png'
import imgPergunta25 from '../assets/pergunta25.png'
import imgPergunta26 from '../assets/pergunta26.png'
import imgPergunta27 from '../assets/pergunta27.png'
import imgPergunta28 from '../assets/pergunta28.png'
import imgPergunta29 from '../assets/pergunta29.png'

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
    audio: 'audio/pergunta_1.mp3',
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
    audio: 'audio/pergunta_2.mp3',
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
    audio: 'audio/pergunta_3.mp3',
  },
  {
    id: 4, nivel: 'dificil',
    emoji: '🏛️', imagem: imgPergunta4,
    texto: 'Como se chama a praça principal do centro de Brusque?',
    opcoes: [
      { texto: 'Praça Barão de Schneeburg', correta: true  },
      { texto: 'Praça da Sé',              correta: false },
      { texto: 'Praça da Liberdade',       correta: false },
      { texto: 'Praça Tiradentes',         correta: false },
    ],
    audio: 'audio/pergunta_4.mp3',
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
    audio: 'audio/pergunta_5.mp3',
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
    audio: 'audio/pergunta_6.mp3',
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
    audio: 'audio/pergunta_7.mp3',
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
    audio: 'audio/pergunta_8.mp3',
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
    audio: 'audio/pergunta_9.mp3',
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
    audio: 'audio/pergunta_10.mp3',
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
    audio: 'audio/pergunta_11.mp3',
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
    audio: 'audio/pergunta_12.mp3',
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
    audio: 'audio/pergunta_13.mp3',
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
    audio: 'audio/pergunta_14.mp3',
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
    audio: 'audio/pergunta_15.mp3',
  },
  {
    id: 16, nivel: 'facil',
    emoji: '⚽', imagem: imgPergunta16,
    texto: 'Qual é o nome do time de futebol profissional de Brusque?',
    opcoes: [
      { texto: 'Avaí',               correta: false },
      { texto: 'Figueirense',        correta: false },
      { texto: 'Brusque Futebol Clube', correta: true  },
      { texto: 'Chapecoense',        correta: false },
    ],
    audio: 'audio/pergunta_16.mp3',
  },
  {
    id: 17, nivel: 'facil',
    emoji: '🏝️', imagem: imgPergunta17,
    texto: 'Qual é a capital de Santa Catarina, estado onde fica Brusque?',
    opcoes: [
      { texto: 'Curitiba',       correta: false },
      { texto: 'Porto Alegre',   correta: false },
      { texto: 'Florianópolis',  correta: true  },
      { texto: 'São Paulo',      correta: false },
    ],
    audio: 'audio/pergunta_17.mp3',
  },
  {
    id: 18, nivel: 'facil',
    emoji: '🏘️', imagem: imgPergunta18,
    texto: 'Qual cidade vizinha de Brusque também tem forte colonização alemã?',
    opcoes: [
      { texto: 'Guabiruba',  correta: true  },
      { texto: 'Lages',      correta: false },
      { texto: 'Joinville',  correta: false },
      { texto: 'Criciúma',   correta: false },
    ],
    audio: 'audio/pergunta_18.mp3',
  },
  {
    id: 19, nivel: 'facil',
    emoji: '📍', imagem: imgPergunta19,
    texto: 'Em que região de Santa Catarina Brusque está localizada?',
    opcoes: [
      { texto: 'Vale do Itajaí',        correta: true  },
      { texto: 'Grande Florianópolis',  correta: false },
      { texto: 'Planalto Serrano',      correta: false },
      { texto: 'Extremo Oeste',         correta: false },
    ],
    audio: 'audio/pergunta_19.mp3',
  },
  {
    id: 20, nivel: 'facil',
    emoji: '⛰️', imagem: imgPergunta20,
    texto: 'Brusque fica num lugar bem verde, cercado por:',
    opcoes: [
      { texto: 'Desertos de areia', correta: false },
      { texto: 'Morros e matas',    correta: true  },
      { texto: 'Geleiras',          correta: false },
      { texto: 'Vulcões',           correta: false },
    ],
    audio: 'audio/pergunta_20.mp3',
  },
  {
    id: 21, nivel: 'medio',
    emoji: '🗣️', imagem: imgPergunta21,
    texto: 'Além do português, qual idioma os primeiros moradores de Brusque falavam?',
    opcoes: [
      { texto: 'Italiano', correta: false },
      { texto: 'Alemão',   correta: true  },
      { texto: 'Espanhol', correta: false },
      { texto: 'Francês',  correta: false },
    ],
    audio: 'audio/pergunta_21.mp3',
  },
  {
    id: 22, nivel: 'medio',
    emoji: '📅', imagem: imgPergunta22,
    texto: 'Em que ano Brusque foi fundada pelos colonizadores?',
    opcoes: [
      { texto: '1850', correta: false },
      { texto: '1860', correta: true  },
      { texto: '1888', correta: false },
      { texto: '1900', correta: false },
    ],
    audio: 'audio/pergunta_22.mp3',
  },
  {
    id: 23, nivel: 'medio',
    emoji: '🧭', imagem: imgPergunta23,
    texto: 'O Brasil é dividido em regiões. Em qual região do país está Brusque?',
    opcoes: [
      { texto: 'Região Norte',        correta: false },
      { texto: 'Região Nordeste',     correta: false },
      { texto: 'Região Sul',          correta: true  },
      { texto: 'Região Centro-Oeste', correta: false },
    ],
    audio: 'audio/pergunta_23.mp3',
  },
  {
    id: 24, nivel: 'medio',
    emoji: '🎓', imagem: imgPergunta24,
    texto: 'Qual é o nome da universidade de Brusque que ajudou a criar este jogo?',
    opcoes: [
      { texto: 'UFSC',    correta: false },
      { texto: 'UNIFEBE', correta: true  },
      { texto: 'UDESC',   correta: false },
      { texto: 'USP',     correta: false },
    ],
    audio: 'audio/pergunta_24.mp3',
  },
  {
    id: 25, nivel: 'medio',
    emoji: '🌳', imagem: imgPergunta25,
    texto: 'Que tipo de vegetação natural cobre boa parte de Brusque e da região?',
    opcoes: [
      { texto: 'Cerrado',       correta: false },
      { texto: 'Caatinga',      correta: false },
      { texto: 'Mata Atlântica', correta: true  },
      { texto: 'Pantanal',      correta: false },
    ],
    audio: 'audio/pergunta_25.mp3',
  },
  {
    id: 26, nivel: 'dificil',
    emoji: '🎗️', imagem: imgPergunta26,
    texto: 'A cidade de Brusque recebeu esse nome em homenagem a quem?',
    opcoes: [
      { texto: 'Dom Pedro II',                     correta: false },
      { texto: 'Francisco Carlos de Araújo Brusque', correta: true  },
      { texto: 'Barão do Rio Branco',              correta: false },
      { texto: 'Getúlio Vargas',                   correta: false },
    ],
    audio: 'audio/pergunta_26.mp3',
  },
  {
    id: 27, nivel: 'dificil',
    emoji: '👥', imagem: imgPergunta27,
    texto: 'Aproximadamente, quantos habitantes Brusque tem hoje?',
    opcoes: [
      { texto: '15 mil',  correta: false },
      { texto: '50 mil',  correta: false },
      { texto: '135 mil', correta: true  },
      { texto: '1 milhão', correta: false },
    ],
    audio: 'audio/pergunta_27.mp3',
  },
  {
    id: 28, nivel: 'dificil',
    emoji: '🌤️', imagem: imgPergunta28,
    texto: 'Qual é o clima principal em Brusque?',
    opcoes: [
      { texto: 'Tropical seco',     correta: false },
      { texto: 'Desértico',         correta: false },
      { texto: 'Subtropical úmido', correta: true  },
      { texto: 'Polar',             correta: false },
    ],
    audio: 'audio/pergunta_28.mp3',
  },
  {
    id: 29, nivel: 'dificil',
    emoji: '🪗', imagem: imgPergunta29,
    texto: 'Nas festas de tradição alemã em Brusque, como a Fenarreco, é comum ouvir música tocada com:',
    opcoes: [
      { texto: 'Violão elétrico',   correta: false },
      { texto: 'Acordeon (sanfona)', correta: true  },
      { texto: 'Tambor africano',   correta: false },
      { texto: 'Flauta indígena',   correta: false },
    ],
    audio: 'audio/pergunta_29.mp3',
  },
]
