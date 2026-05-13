import personagemPng from '../assets/image 5.png'
import './MascotePersonagem.css'

export default function MascotePersonagem({ largura = 140 }) {
  return (
    <img
      className="mascote-personagem"
      src={personagemPng}
      alt="Personagem do jogo"
      width={largura}
      draggable={false}
    />
  )
}
