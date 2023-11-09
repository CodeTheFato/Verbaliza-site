import './styles.css'
import Image from 'next/image'
export function SectionBusiness() {
  return (
    <section id="business">
      <div className="wrapper">
        <header>
          <h2>Transforme seu negócio</h2>
          <p>Coloque em prática as ações que mais encantam seus clientes</p>
        </header>
        <div className="content">
          <div className="cards">
            <div className="card">
              <Image
                src="/assets/verbaliza-icon.svg"
                height={64}
                width={64}
                alt="flow"
              />
              <h3>Escute seu cliente</h3>
              <p>
                Experiências valiosas são registradas quando os clientes
                verbalizam espontaneamente
              </p>
            </div>

            <div className="card">
              <Image
                src="/assets/hands.svg"
                height={64}
                width={64}
                alt="flow"
              />
              <h3>Conheça seu cliente</h3>
              <p>Entenda com precisão a satisfação dos seus clientes</p>
            </div>

            <div className="card">
              <Image
                src="/assets/reports.svg"
                height={64}
                width={64}
                alt="flow"
              />
              <h3>Aumente suas vendas</h3>
              <p>
                Coloque em prática as ações certas e construa relacionamentos
                duradouros com seus clientes. Esta é a chave para aumentar suas
                vendas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
