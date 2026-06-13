'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Home() {
  const heroNotaRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = heroNotaRef.current
    if (!el) return
    const target = 9.4
    let cur = 0
    const t = setInterval(() => {
      cur += 0.25
      if (cur >= target) { cur = target; clearInterval(t) }
      el.textContent = cur.toFixed(1)
    }, 20)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.lp-reveal').forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transitionDelay = `${(i % 4) * 0.07}s`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="lp-body">

      {/* NAV */}
      <nav className="lp-nav">
        <div className="lp-wrap lp-nav-in">
          <div className="lp-brand"><span className="dez">UCL</span>Draft</div>
          <div className="lp-nav-links">
            <a href="#como">Como funciona</a>
            <a href="#regras">Regras</a>
            <a href="#pontua">Pontuação</a>
            <Link href="/login" className="lp-btn lp-btn-ghost">Entrar</Link>
            <Link href="/login" className="lp-btn lp-btn-primary">Criar meu grupo</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="lp-wrap lp-hero">
        <div>
          <span className="lp-kicker">
            <span className="dot"></span>UEFA Champions League · Fantasy Draft All-Time
          </span>
          <h1 className="lp-h1">
            O fantasy da Champions,{' '}
            <span className="accent">decidido</span>{' '}
            na <span className="gold">nota</span>.
          </h1>
          <p className="lp-lead">
            Monte um time de <b>16 lendas da UCL</b> — um de cada clube. A cada rodada,
            a <b>nota histórica</b> de cada jogador em campo vira seus pontos.
            Ganhe a rodada. Ganhe a Champions.
          </p>
          <div className="lp-cta-row">
            <Link href="/login" className="lp-btn lp-btn-primary">Criar meu grupo</Link>
            <Link href="/login" className="lp-btn lp-btn-ghost">Já tenho convite →</Link>
          </div>
        </div>

        {/* Card de rating */}
        <div className="lp-card-stage">
          <div className="lp-rating-card">
            <div className="lp-rc-pos">
              <span>ATK · CAMISA 7</span>
              <span>RODADA 3</span>
            </div>
            <div className="lp-big-nota">
              <span ref={heroNotaRef}>0.0</span>
            </div>
            <div className="lp-pname">Cristiano Ronaldo</div>
            <div className="lp-pteam">
              dominou a partida — hat-trick na Champions, impossível de parar
            </div>
            <div className="lp-chips">
              <span className="lp-chip">3 gols</span>
              <span className="lp-chip">1 assistência</span>
              <span className="lp-chip">8 remates</span>
              <span className="lp-chip">craque da partida</span>
            </div>
          </div>
          <div className="lp-float lp-f1">GK · <span className="n">8.1</span></div>
          <div className="lp-float lp-f2">MEI · <span className="n">8.7</span></div>
        </div>
      </header>

      <div className="lp-divider"></div>

      {/* COMO FUNCIONA */}
      <section id="como" className="lp-wrap lp-steps-section">
        <div className="lp-sec-head">
          <span className="lp-sec-tag">// como funciona</span>
          <h2 className="lp-sec-title">Quatro passos até o título</h2>
        </div>
        <div className="lp-steps-grid">
          <div className="lp-step lp-reveal">
            <div className="num">01</div>
            <h3>Crie o grupo</h3>
            <p>Você cria o bolão e convida a galera. Cada um entra com o seu próprio acesso.</p>
          </div>
          <div className="lp-step lp-reveal">
            <div className="num">02</div>
            <h3>Faça o draft</h3>
            <p>O admin atribui 16 lendas da UCL a cada membro: 11 titulares + 5 reservas, um por clube.</p>
          </div>
          <div className="lp-step lp-reveal">
            <div className="num">03</div>
            <h3>Acompanhe a competição</h3>
            <p>A nota de cada jogador na sua melhor época UCL vira pontos a cada rodada. Faça substituições quando precisar.</p>
          </div>
          <div className="lp-step lp-reveal">
            <div className="num">04</div>
            <h3>Vença</h3>
            <p>Quem somar mais pontos na rodada ganha a rodada. Quem somar mais no total ergue a taça.</p>
          </div>
        </div>
      </section>

      <div className="lp-divider"></div>

      {/* REGRAS */}
      <section id="regras" className="lp-wrap lp-rules-section">
        <div className="lp-sec-head">
          <span className="lp-sec-tag">// as regras do jogo</span>
          <h2 className="lp-sec-title">Estratégia em cada escolha</h2>
        </div>
        <div className="lp-rules-grid">
          <div className="lp-rule lp-reveal">
            <div className="ic">[ 01 ]</div>
            <h3>Um por clube</h3>
            <p>Seu time tem 16 lendas de 16 clubes diferentes. Não dá pra empilhar craques do mesmo clube.</p>
          </div>
          <div className="lp-rule lp-reveal">
            <div className="ic">[ 02 ]</div>
            <h3>11 titulares + 5 reservas</h3>
            <p>Os 11 titulares pontuam a cada rodada. Os 5 reservas ficam no banco, prontos pra entrar.</p>
          </div>
          <div className="lp-rule lp-reveal">
            <div className="ic">[ 03 ]</div>
            <h3>Substituições por posição</h3>
            <p>Pode trocar reserva por titular, mas só da mesma posição: MEI no lugar de MEI, ATK por ATK.</p>
          </div>
          <div className="lp-rule lp-reveal">
            <div className="ic">[ 04 ]</div>
            <h3>Pontua pelo rating histórico</h3>
            <p>O rating UCL all-time de cada titular na rodada vira os teus pontos. Some os 11 e sai o total.</p>
          </div>
          <div className="lp-rule bonus lp-reveal">
            <span className="lp-badge-bonus">BÔNUS</span>
            <div className="ic">[ 05 ]</div>
            <h3>Seleção da Rodada</h3>
            <p>O sistema monta o XI da rodada pelos maiores ratings por posição. Tem lenda tua nela? Pontos extras.</p>
          </div>
          <div className="lp-rule bonus lp-reveal">
            <span className="lp-badge-bonus">BÔNUS</span>
            <div className="ic">[ 06 ]</div>
            <h3>Craque da partida</h3>
            <p>O melhor de cada jogo pelo rating rende um bônus. Achar a lenda certa pode virar o jogo.</p>
          </div>
        </div>
      </section>

      <div className="lp-divider"></div>

      {/* COMO PONTUA */}
      <section id="pontua" className="lp-wrap lp-scoring-section">
        <div className="lp-scoring-text lp-reveal">
          <span className="lp-sec-tag">// a matemática</span>
          <h2 className="lp-sec-title" style={{ marginBottom: '22px' }}>
            A tua rodada,<br />somada
          </h2>
          <p>
            No fim da rodada, pegamos o <b>rating UCL de cada titular</b> e somamos.
            Sem sistema complicado: é o mesmo rating histórico, objetivo e
            igualzinho pra todo mundo do grupo.
          </p>
          <p>
            Os <b>bônus</b> (Seleção da Rodada e craque da partida) são aditivos —
            opcionais e configuráveis por grupo. Podem virar o jogo na última rodada.
          </p>
        </div>
        <div className="lp-scoreboard lp-reveal">
          <div className="lp-sb-head"><span>O teu time · Rodada 3</span><span>Rating</span></div>
          <div className="lp-sb-row">
            <div className="lp-sb-left">
              <span className="lp-sb-pos">GK</span>
              <div>
                <div className="lp-sb-name">Iker Casillas</div>
                <div className="lp-sb-sub">Real Madrid · rating 93</div>
              </div>
            </div>
            <span className="lp-sb-nota">9.3</span>
          </div>
          <div className="lp-sb-row">
            <div className="lp-sb-left">
              <span className="lp-sb-pos">ZAG</span>
              <div>
                <div className="lp-sb-name">Virgil van Dijk</div>
                <div className="lp-sb-sub">Liverpool · rating 92</div>
              </div>
            </div>
            <span className="lp-sb-nota">9.2</span>
          </div>
          <div className="lp-sb-row">
            <div className="lp-sb-left">
              <span className="lp-sb-pos">MEI</span>
              <div>
                <div className="lp-sb-name">Zinedine Zidane</div>
                <div className="lp-sb-sub">Real Madrid · rating 96</div>
              </div>
            </div>
            <span className="lp-sb-nota lp-hi">9.6</span>
          </div>
          <div className="lp-sb-row">
            <div className="lp-sb-left">
              <span className="lp-sb-pos">ATK</span>
              <div>
                <div className="lp-sb-name">Ronaldo Nazário</div>
                <div className="lp-sb-sub">Barcelona · rating 97 · craque da partida</div>
              </div>
            </div>
            <span className="lp-sb-nota lp-hi">9.7</span>
          </div>
          <div className="lp-sb-row">
            <div className="lp-sb-left">
              <span className="lp-sb-pos">+ 7</span>
              <div>
                <div className="lp-sb-name">restante do time</div>
                <div className="lp-sb-sub">titulares em campo</div>
              </div>
            </div>
            <span className="lp-sb-nota">…</span>
          </div>
          <div className="lp-sb-total">
            <span className="lbl">Total da rodada</span>
            <span className="val">94.8</span>
          </div>
        </div>
      </section>

      <div className="lp-divider"></div>

      {/* DESTAQUES DA RODADA */}
      <section className="lp-wrap lp-reveal" style={{ padding: '80px 0' }}>
        <div style={{ marginBottom: '28px' }}>
          <span className="lp-sec-tag">// lendas em destaque</span>
          <h2 className="lp-sec-title" style={{ marginTop: '10px' }}>Quem pontuou alto</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
          {[
            { pos: 'GK', name: 'Iker Casillas', club: 'Real Madrid', nota: '9.3', desc: 'O melhor da história na UCL', color: 'var(--lime)' },
            { pos: 'ZAG', name: 'Paolo Maldini', club: 'AC Milan', nota: '9.6', desc: 'Limpeza total, 0 dribles sofridos', color: 'var(--lime)' },
            { pos: 'MEI', name: 'Zinedine Zidane', club: 'Real Madrid', nota: '9.6', desc: '94 passes · 2 assistências', color: 'var(--gold)' },
            { pos: 'ATK', name: 'Ronaldo Nazário', club: 'Barcelona', nota: '9.7', desc: '2 gols · 10 dribles · craque', color: 'var(--gold)' },
          ].map((p, i) => (
            <div
              key={i}
              className="lp-reveal"
              style={{
                background: 'linear-gradient(160deg, #111b16, #0c1410)',
                border: '1px solid var(--line-soft)',
                borderRadius: '16px',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color .25s, transform .25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(197,242,74,.3)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line-soft)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '80px', height: '80px', borderRadius: '50%',
                background: p.color === 'var(--gold)' ? 'rgba(246,201,69,.07)' : 'rgba(197,242,74,.07)',
                filter: 'blur(20px)',
                pointerEvents: 'none',
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <span style={{
                  fontFamily: 'Space Mono, monospace', fontSize: '10px',
                  letterSpacing: '2px', color: p.color, textTransform: 'uppercase',
                  background: p.color === 'var(--gold)' ? 'rgba(246,201,69,.1)' : 'rgba(197,242,74,.1)',
                  padding: '3px 8px', borderRadius: '6px',
                }}>
                  {p.pos}
                </span>
                <span style={{
                  fontFamily: 'Anton, sans-serif', fontSize: '36px',
                  color: p.color, lineHeight: '1',
                }}>
                  {p.nota}
                </span>
              </div>
              <div style={{ fontFamily: 'Anton, sans-serif', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                {p.name}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '10px' }}>
                {p.club}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(243,244,239,.5)', lineHeight: '1.4' }}>
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="lp-divider"></div>

      {/* CTA FINAL */}
      <section id="entrar" className="lp-wrap lp-cta-section">
        <h2>Bora montar o teu <span className="accent">dream team</span> UCL?</h2>
        <p className="sub">
          A Champions começa agora. Cria o teu grupo ou entra no convite da galera.
        </p>
        <div className="lp-cta-btns">
          <Link href="/login" className="lp-btn lp-btn-primary" style={{ fontSize: '17px', padding: '14px 32px' }}>
            ⭐ Criar meu grupo
          </Link>
          <Link href="/login" className="lp-btn lp-btn-ghost" style={{ fontSize: '17px', padding: '14px 32px' }}>
            Já tenho convite →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        <div className="lp-wrap">
          <div className="lp-foot-in">
            <div className="lp-brand"><span className="dez">UCL</span>Draft</div>
            <p>Fantasy Draft · UEFA Champions League All-Time</p>
          </div>
          <p className="lp-disclaim">
            Projeto de bolão entre amigos, sem fins de aposta. Não é afiliado nem endossado
            pela UEFA ou qualquer clube. Nomes de jogadores são usados de forma ilustrativa.
          </p>
        </div>
      </footer>

    </div>
  )
}
