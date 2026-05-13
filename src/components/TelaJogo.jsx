import { useEffect } from 'react'
import './TelaJogo.css'

const LABEL_NIVEL = {
  facil:   '⭐ Fácil',
  medio:   '⭐⭐ Médio',
  dificil: '⭐⭐⭐ Difícil',
}

export default function TelaJogo({ estado, onResponder, onProximaPergunta, onTocarAudio }) {
  const { nivel, perguntasJogo, indicePergunta, respostaSelecionada, respondeu, acertos } = estado
  const pergunta = perguntasJogo[indicePergunta]
  const total = perguntasJogo.length
  const progresso = (indicePergunta / total) * 100

  useEffect(() => {
    const timer = setTimeout(() => onTocarAudio(pergunta.audio), 500)
    return () => clearTimeout(timer)
  }, [indicePergunta])

  const getClasseOpcao = (i) => {
    if (!respondeu) return 'opcao-btn'
    if (pergunta.opcoes[i].correta) return 'opcao-btn opcao--correta'
    if (i === respostaSelecionada) return 'opcao-btn opcao--errada'
    return 'opcao-btn opcao--neutra'
  }

  const opcaoCorretaTexto = pergunta.opcoes.find((o) => o.correta)?.texto ?? ''
  const acertou = respondeu && pergunta.opcoes[respostaSelecionada]?.correta

  return (
    <main className="tela-jogo">
      <div className="jogo-container">

        {/* Barra de progresso + cabeçalho */}
        <header className="jogo-top">
          <div
            className="barra-progresso"
            role="progressbar"
            aria-label="Progresso do jogo"
            aria-valuenow={indicePergunta}
            aria-valuemin={0}
            aria-valuemax={total}
          >
            <div className="barra-fill" style={{ width: `${progresso}%` }} />
          </div>
          <div className="jogo-meta">
            <span className="jogo-contador">
              Pergunta <strong>{indicePergunta + 1}</strong> de {total}
            </span>
            <span className={`jogo-nivel jogo-nivel--${nivel}`}>
              {LABEL_NIVEL[nivel]}
            </span>
          </div>
          <p className="jogo-acertos" aria-live="polite">
            ✅ {acertos} acerto{acertos !== 1 ? 's' : ''}
          </p>
        </header>

        {/* Card da pergunta */}
        <article className="pergunta-card" key={indicePergunta}>
          <div className="pergunta-imagem-wrapper">
            {pergunta.imagem ? (
              <img src={pergunta.imagem} alt="" className="pergunta-imagem" />
            ) : (
              <div className="pergunta-imagem-fallback" aria-hidden="true">
                {pergunta.emoji}
              </div>
            )}
          </div>
          <div className="pergunta-corpo">
            <p className="pergunta-texto">{pergunta.texto}</p>
            <button
              type="button"
              className="btn-audio"
              onClick={() => onTocarAudio(pergunta.audio)}
              aria-label="Ouvir a pergunta novamente"
            >
              🎵 Ouvir novamente
            </button>
          </div>
        </article>

        {/* Opções */}
        <section className="opcoes-grid" aria-label="Opções de resposta">
          {pergunta.opcoes.map((opcao, i) => (
            <button
              key={i}
              type="button"
              className={getClasseOpcao(i)}
              onClick={() => !respondeu && onResponder(i, opcao.correta)}
              disabled={respondeu}
              aria-pressed={respostaSelecionada === i}
            >
              {opcao.texto}
            </button>
          ))}
        </section>

        {/* Feedback + próxima */}
        {respondeu && (
          <footer className="jogo-rodape" role="status" aria-live="assertive">
            <div className={`feedback-card ${acertou ? 'feedback--acerto' : 'feedback--erro'}`}>
              <span className="feedback-icone">{acertou ? '🎉' : '😕'}</span>
              <span className="feedback-texto">
                {acertou
                  ? 'Muito bem! Resposta certa!'
                  : `Resposta certa: ${opcaoCorretaTexto}`}
              </span>
            </div>
            <button type="button" className="btn-proxima" onClick={onProximaPergunta}>
              {indicePergunta < total - 1 ? 'PRÓXIMA!' : 'VER RESULTADO!'}
            </button>
          </footer>
        )}

      </div>
    </main>
  )
}
