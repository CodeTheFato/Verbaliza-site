import './styles.css'
import Image from 'next/image'
export function SectionFlow() {
  return (
    <section id="flow">
      <div className="wrapper">
        <header>
          <h2>Pesquisas descomplicadas</h2>
          <div className="content">
            <p className="flow-description mb-10">
              VerbalizaCX permite que você crie suas próprias pesquisas de
              maneira simples, rápida e prática sem a necessidade de
              programações complexas e integrações{' '}
            </p>
            <Image
              className="flow-image hidden md:block"
              src="/assets/flow.svg"
              height={128}
              width={933}
              alt="flow"
            />
            <Image
              className="block md:hidden"
              src="/assets/flow-mobile.svg"
              height={128}
              width={933}
              alt="flow"
            />
          </div>
        </header>
        <div className="flow-details hidden md:block">
          <div>
            <h6>Cliente faz a compra</h6>
            <p>No estabelecimento ou no site</p>
          </div>
          <div>
            <h6>Scaneia QR Code</h6>
            <p>
              Loja física: numa comunicação impressa
              <br />
              Loja virtual: ao concluir a compra ou junto do produto
            </p>
          </div>
          <div>
            <h6>Comenta experiência</h6>
            <p>Por vídeo, foto, áudio ou texto</p>
          </div>
          <div>
            <h6>Avaliação dos comentários</h6>
            <p>VerbalizaCX registra e processa os resultados em tempo real</p>
          </div>
        </div>
      </div>
    </section>
  )
}
