import MascotePato from './MascotePato'
import './TelaInicio.css'

const NIVEIS = [
  {
    id: 'facil',
    label: 'FÁCIL',
    estrelas: '⭐',
    desc: '5 perguntas — para começar bem!',
    classe: 'btn-facil',
  },
  {
    id: 'medio',
    label: 'MÉDIO',
    estrelas: '⭐⭐',
    desc: '4 perguntas — um pouco mais difícil',
    classe: 'btn-medio',
  },
  {
    id: 'dificil',
    label: 'DIFÍCIL',
    estrelas: '⭐⭐⭐',
    desc: '6 perguntas — para os experts!',
    classe: 'btn-dificil',
  },
]

export default function TelaInicio({ onIniciar }) {
  return (
    <main className="tela-inicio">
      <div className="inicio-card">

        <header className="inicio-header">
          <MascotePato largura={110} />
          <h1 className="inicio-titulo">
            <span className="titulo-conheca">Conheça </span>
            <span className="titulo-brusque">Brusque!</span>
          </h1>
          <p className="inicio-subtitulo">Um jogo sobre a nossa cidade especial</p>
        </header>

        <section className="inicio-niveis" aria-label="Escolha o nível de dificuldade">
          <p className="inicio-niveis-titulo">Escolha o nível:</p>
          {NIVEIS.map(({ id, label, estrelas, desc, classe }) => (
            <button
              key={id}
              type="button"
              className={`btn-nivel ${classe}`}
              onClick={() => onIniciar(id)}
            >
              <span className="nivel-estrelas" aria-hidden="true">{estrelas}</span>
              <span className="nivel-info">
                <span className="nivel-label">{label}</span>
                <span className="nivel-desc">{desc}</span>
              </span>
            </button>
          ))}
        </section>

      </div>
    </main>
  )
}
