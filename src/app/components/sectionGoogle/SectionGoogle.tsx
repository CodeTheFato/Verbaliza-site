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
            compartilhar suas experiências no Google Reviews, elevando sua
            visibilidade e credibilidade online. Como funciona?
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
                  <h3>Clientes avaliam a experiência</h3>
                  <p style={{ width: '160px' }}>
                    Experiências valiosas são registradas quando os clientes
                    verbalizam espontaneamente
                  </p>
                </div>
                <Image
                  style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '15rem',
                  }}
                  width={400}
                  height={479}
                  src="/assets/banner/smart-phone-verbaliza.png"
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
                    src="/assets/verbaliza-icon.svg"
                    height={64}
                    width={64}
                    alt="flow"
                  />
                  <h3>Google Reviews</h3>
                  <p style={{ width: '160px' }}>
                    Experiências valiosas são registradas quando os clientes
                    verbalizam espontaneamente
                  </p>
                </div>
                <Image
                  style={{
                    position: 'absolute',
                    bottom: '-10rem',
                    left: '15rem',
                  }}
                  width={400}
                  height={479}
                  src="/assets/google/review1.png"
                  // src="/assets/banner/smart-phone-verbaliza.png"
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
