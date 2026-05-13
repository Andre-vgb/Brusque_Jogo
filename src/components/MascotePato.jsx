import patoPng from '../assets/pngtree-adorable-duck-clipart-for-nature-themed-designs-png-image_14165263 1.png'
import './MascotePato.css'

export default function MascotePato({ largura = 110 }) {
  return (
    <img
      className="mascote-pato"
      src={patoPng}
      alt="Mascote Marreco"
      width={largura}
      draggable={false}
    />
  )
}
