import MascotePersonagem from './MascotePersonagem'
import './TelaResultado.css'

const LABEL_NIVEL = {
  facil:   '⭐ Fácil',
  medio:   '⭐⭐ Médio',
  dificil: '⭐⭐⭐ Difícil',
}

function getDesempenho(acertos, total) {
  const pct = acertos / total
  if (pct >= 0.9) return {
    titulo: 'Uau! Você é incrível! 🌟',
    mensagem: 'Você conhece muito bem a nossa cidade de Brusque! Continue assim, você é uma criança maravilhosa!',
  }
  if (pct >= 0.6) return {
    titulo: 'Muito bem! Parabéns! 💛',
    mensagem: 'Você está aprendendo bastante sobre Brusque! Continue estudando e logo vai saber tudo!',
  }
  if (pct >= 0.4) return {
    titulo: 'Boa tentativa! 🌈',
    mensagem: 'Cada vez você aprende mais sobre Brusque. Tente de novo e veja sua melhora!',
  }
  return {
    titulo: 'Vamos aprender juntos! 💚',
    mensagem: 'Brusque tem muitas coisas legais para descobrir. Tente de novo e surpreenda-se!',
  }
}

export default function TelaResultado({ nivel, acertos, total, onReiniciar }) {
  const desempenho = getDesempenho(acertos, total)
  const pct = Math.round((acertos / total) * 100)

  return (
    <main className="tela-resultado">
      <div className="resultado-card">

        <div className="resultado-nivel-badge">
          <span className={`nivel-tag nivel-tag--${nivel}`}>
            {LABEL_NIVEL[nivel]}
          </span>
        </div>

        <div className="resultado-personagem">
          <MascotePersonagem largura={135} />
        </div>

        <h1 className="resultado-titulo">{desempenho.titulo}</h1>

        <div className="resultado-score-box" aria-label="Pontuação">
          <output className="resultado-score">
            {acertos} de {total} acertos ✓
          </output>
          <p className="resultado-pct">{pct}%</p>
        </div>

        <div className="resultado-mensagem-box" role="status">
          <p className="resultado-mensagem">{desempenho.mensagem}</p>
        </div>

        <div className="resultado-acoes">
          <button type="button" className="btn-reiniciar" onClick={onReiniciar}>
            🔄 JOGAR DE NOVO!
          </button>
        </div>

      </div>
    </main>
  )
}
