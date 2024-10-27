import './styles.css'
import Image from 'next/image'
export function SectionGoogle() {
  return (
    <section id="google">
      <div className="wrapper">
        <header>
          <h2>Aproveite o poder do feedback positivo!</h2>
          <p>
            Com VerbalizaCX, clientes satisfeitos são direcionados para
            compartilhar suas experiências no Google Reviews,
          </p>
          <p>
            elevando sua visibilidade e credibilidade online. Como funciona?
          </p>
        </header>
        <div className="content">
          <div className="cards">
            <div
              className="card"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div className="flex">
                <div>
                  <Image
                    src="/assets/verbaliza-icon.svg"
                    height={64}
                    width={64}
                    alt="flow"
                  />
                  <div></div>
                  <h3>Clientes respondem à pesquisa</h3>
                  <p>
                    Somente aqueles com experiências positivas são direcionados
                    para deixar uma avaliação no Google Reviews
                  </p>
                </div>
                <Image
                  className="hidden md:block"
                  style={{
                    position: 'absolute',
                    top: '-1.5rem',
                    left: '15rem',
                  }}
                  width={400}
                  height={479}
                  src="/assets/google/phone-verbaliza-step1.png"
                  alt="Aplicativo Verbaliza"
                />
              </div>
            </div>

            <div
              className="card"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div className="flex">
                <div>
                  <Image
                    src="/assets/google-verbaliza-icon.svg"
                    height={64}
                    width={64}
                    alt="flow"
                  />
                  <h3>Clientes avaliam no Google Reviews</h3>
                  <p>
                    Após a pesquisa, um link direto para o Google Reviews é
                    ativado automaticamente
                  </p>
                </div>
                <Image
                  className="hidden md:block"
                  style={{
                    position: 'absolute',
                    bottom: '-5rem',
                    left: '15rem',
                  }}
                  width={400}
                  height={479}
                  src="/assets/google/celular-reviews.png"
                  alt="Aplicativo Verbaliza"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
