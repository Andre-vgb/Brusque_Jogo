import { useReducer, useRef } from 'react'
import { perguntas } from './data/perguntas'
import TelaInicio from './components/TelaInicio'
import TelaJogo from './components/TelaJogo'
import TelaResultado from './components/TelaResultado'
import './App.css'

function embaralhar(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const initialState = {
  tela: 'inicio',
  nivel: null,
  perguntasJogo: [],
  indicePergunta: 0,
  acertos: 0,
  respostaSelecionada: null,
  respondeu: false,
}

function gameReducer(state, action) {
  switch (action.type) {
    case 'INICIAR_JOGO': {
      const selecionadas = embaralhar(
        perguntas.filter((p) => p.nivel === action.nivel)
      ).map((p) => ({ ...p, opcoes: embaralhar(p.opcoes) }))
      return { ...initialState, tela: 'jogo', nivel: action.nivel, perguntasJogo: selecionadas }
    }
    case 'RESPONDER':
      return {
        ...state,
        respostaSelecionada: action.indice,
        respondeu: true,
        acertos: action.correta ? state.acertos + 1 : state.acertos,
      }
    case 'PROXIMA_PERGUNTA': {
      const ultimaPergunta = state.indicePergunta >= state.perguntasJogo.length - 1
      if (ultimaPergunta) return { ...state, tela: 'resultado', respostaSelecionada: null, respondeu: false }
      return { ...state, indicePergunta: state.indicePergunta + 1, respostaSelecionada: null, respondeu: false }
    }
    case 'REINICIAR':
      return initialState
    default:
      return state
  }
}

export default function App() {
  const [estado, dispatch] = useReducer(gameReducer, initialState)
  const audioRef = useRef(null)

  const pararAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  const tocarAudio = (src) => {
    pararAudio()
    const audio = new Audio(src)
    audioRef.current = audio
    audio.play().catch(() => {})
  }

  const iniciarJogo = (nivel) => {
    pararAudio()
    dispatch({ type: 'INICIAR_JOGO', nivel })
  }

  const responder = (indice, correta) => {
    dispatch({ type: 'RESPONDER', indice, correta })
    const tipo = correta ? 'acerto' : 'erro'
    const num = Math.floor(Math.random() * 3) + 1
    tocarAudio(`/audio/${tipo}_${num}.mp3`)
  }

  const proximaPergunta = () => {
    pararAudio()
    dispatch({ type: 'PROXIMA_PERGUNTA' })
  }

  const reiniciar = () => {
    pararAudio()
    dispatch({ type: 'REINICIAR' })
  }

  return (
    <div className="app">
      {estado.tela === 'inicio' && (
        <TelaInicio onIniciar={iniciarJogo} />
      )}
      {estado.tela === 'jogo' && (
        <TelaJogo
          estado={estado}
          onResponder={responder}
          onProximaPergunta={proximaPergunta}
          onTocarAudio={tocarAudio}
        />
      )}
      {estado.tela === 'resultado' && (
        <TelaResultado
          nivel={estado.nivel}
          acertos={estado.acertos}
          total={estado.perguntasJogo.length}
          onReiniciar={reiniciar}
        />
      )}
    </div>
  )
}
