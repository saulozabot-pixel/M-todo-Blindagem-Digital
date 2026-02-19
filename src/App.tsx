

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero animate" style={{ textAlign: 'center', paddingTop: '150px' }}>
        <div className="container">
          <h4 style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Privacidade & Reputação Digital
          </h4>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
            Seu nome aparece no Google e você não sabe o que fazer?
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', color: 'var(--light-slate)' }}>
            Descubra o que realmente é possível solicitar legalmente para proteger sua imagem, sem promessas irreais ou atalhos duvidosos.
          </p>
          <a href="#oferta" className="btn-primary">👉 Quero Entender Meus Direitos Digitais</a>

          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--slate)' }}>
            Baseado na <strong>LGPD (Lei 13.709/2018)</strong> e diretrizes oficiais do Google.
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="dores">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>O Mercado da "Limpeza de Nome" está quebrado</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div className="glass-card">
              <h3 style={{ color: 'var(--accent)' }}>01. Cobranças Abusivas</h3>
              <p>Agências cobram valores astronômicos por algo que você mesmo pode solicitar se souber o caminho legal correto.</p>
            </div>
            <div className="glass-card">
              <h3 style={{ color: 'var(--accent)' }}>02. Promessas Milagrosas</h3>
              <p>"Apagamos seu passado em 48 horas". Cuidado: processos públicos seguem regras constitucionais e não somem num estalar de dedos.</p>
            </div>
            <div className="glass-card">
              <h3 style={{ color: 'var(--accent)' }}>03. Falta de Clareza</h3>
              <p>Você fica no escuro, sem saber o que é desindexação, o que é desidentificação e o que é remoção de conteúdo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Truth Section */}
      <section id="verdade" style={{ background: 'var(--secondary)', borderRadius: '32px', margin: '50px auto' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="text-gradient">A Verdade Transparente</h2>
              <p style={{ marginBottom: '1.5rem' }}>Diferente do que muitos "gurus" vendem, a internet não é uma folha em branco. Mas você tem direitos fundamentais.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span>
                  <span><strong>Nem tudo pode ser removido:</strong> Processos públicos e editais seguem ritos próprios.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span>
                  <span><strong>Desindexação vs. Remoção:</strong> Muitas vezes o segredo é tirar do Google, não do site original.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span>
                  <span><strong>Direitos Legais:</strong> A LGPD e o Marco Civil da Internet são suas maiores armas.</span>
                </li>
              </ul>
            </div>
            <div className="glass-card" style={{ borderLeft: '4px solid var(--accent)' }}>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                "Este guia foi criado para educar. Não vendemos mágica, vendemos o conhecimento técnico e jurídico para você exercer seus direitos de forma ética."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="conteudo">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>O que você vai aprender</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--tertiary)' }}>
              <h4>Diagnóstico Completo</h4>
              <p>Aprenda a mapear cada menção ao seu nome que atenta contra sua reputação.</p>
            </div>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--tertiary)' }}>
              <h4>Desidentificação</h4>
              <span>Como solicitar que seu nome seja substituído por iniciais em Diários Oficiais.</span>
            </div>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--tertiary)' }}>
              <h4>Desindexação Legal</h4>
              <p>O passo a passo para preencher os formulários oficiais do Google com fundamentação.</p>
            </div>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--tertiary)' }}>
              <h4>Modelos Prontos</h4>
              <p>Modelos de solicitações fundamentadas na LGPD para você copiar e adaptar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" style={{ textAlign: 'center' }}>
        <div className="container glass-card" style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)' }}>
          <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>Proteja sua Reputação Hoje</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Guia Completo de Blindagem Digital e Desindexação Legal</p>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '1.5rem', textDecoration: 'line-through', color: 'var(--slate)', marginRight: '10px' }}>R$ 197</span>
            <span style={{ fontSize: '3.5rem', color: 'var(--accent)', fontWeight: 'bold' }}>R$ 67</span>
          </div>

          {/* Order Bump Placeholder */}
          <div style={{
            background: 'rgba(212, 175, 55, 0.1)',
            border: '2px dashed var(--accent)',
            padding: '1.5rem',
            borderRadius: '12px',
            maxWidth: '600px',
            margin: '0 auto 2.5rem auto',
            textAlign: 'left'
          }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <input type="checkbox" style={{ width: '25px', height: '25px', marginTop: '5px' }} />
              <div>
                <strong style={{ color: 'var(--white)' }}>SIM! Quero levar também o Guia de Auditoria OSINT (+ R$ 47)</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>Aprenda técnicas de busca pública para monitorar sua presença digital como um profissional.</p>
              </div>
            </div>
          </div>

          <a href="https://pay.kiwify.com.br/TnHlSuk" className="btn-primary" style={{ width: '100%', maxWidth: '400px', display: 'inline-block' }}>
            👉 Baixar Guia por R$67 Agora
          </a>

          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
            🔒 Pagamento 100% Seguro | 7 Dias de Garantia
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '50px 20px', borderTop: '1px solid var(--tertiary)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--slate)', fontSize: '0.85rem', maxWidth: '700px', margin: '0 auto' }}>
            <strong>AVISO LEGAL:</strong> Este material possui caráter estritamente informativo e educativo. O conteúdo aqui exposto não substitui, em hipótese alguma, a consultoria jurídica individualizada de um advogado. Os resultados podem variar de acordo com o caso concreto.
          </p>
          <p style={{ marginTop: '2rem', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Privacy Shield Brasil. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
