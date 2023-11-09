import { Carousel } from 'react-responsive-carousel'
import './styles.css'
import Image from 'next/image'
export function SectionClient() {
  return (
    <section id="client">
      <div className="wrapper">
        <header>
          <h2>
            Escutar e entender o cliente é fundamental para o sucesso e
            crescimento do seu negócio
          </h2>
        </header>
        <div className="content">
          <div className="cards">
            <Carousel
              emulateTouch={true}
              infiniteLoop={false}
              showThumbs={false}
              showArrows={false}
              showIndicators={true}
              showStatus={false}
            >
              <div className="flex flex-wrap gap-4">
                <div className="card">
                  <Image
                    className="icon-quotes"
                    src="/assets/quotes.svg"
                    height={64}
                    width={61}
                    alt="flow"
                  />
                  <h6>
                    “O seu cliente, hoje em dia, tem muito mais opções. Ele está
                    muito mais bem informado. Quer testar coisas diferentes e
                    todos devem se adaptar a isso, senão vão ficar para trás.”
                  </h6>
                  <p>Jorge Paulo Lemann (Fundador da Ambev)</p>
                </div>
                <div className="card">
                  <Image
                    className="icon-quotes"
                    src="/assets/quotes.svg"
                    height={64}
                    width={61}
                    alt="flow"
                  />
                  <h6>
                    “Existem duas coisas comuns às empresas que dão certo:
                    atendimento ao cliente e inovação. Você deve ter um
                    atendimento ao cliente de primeira, e também estar atento ao
                    que há de novo no mercado, para não ficar para trás.”
                  </h6>
                  <p>Luiza Trajano (Fundadora do Magazine Luiza)</p>
                </div>
                <div className="card">
                  <Image
                    className="icon-quotes"
                    src="/assets/quotes.svg"
                    height={64}
                    width={61}
                    alt="flow"
                  />
                  <h6>
                    “Se você criar uma ótima experiência, os clientes contam uns
                    aos outros sobre isso. O boca a boca é muito poderoso.“
                  </h6>
                  <p>Jeff Bezos (Fundador da Amazon)</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="card">
                  <Image
                    className="icon-quotes"
                    src="/assets/quotes.svg"
                    height={64}
                    width={61}
                    alt="flow"
                  />
                  <h6>
                    “Só há um chefe. O cliente. E ele pode demitir todos na
                    empresa, desde o presidente até os demais, simplesmente
                    gastando seu dinheiro em outro lugar.“
                  </h6>
                  <p>Sam Walton (Fundador do Walmart)</p>
                </div>
                <div className="card">
                  <Image
                    className="icon-quotes"
                    src="/assets/quotes.svg"
                    height={64}
                    width={61}
                    alt="flow"
                  />
                  <h6>
                    “Seus clientes mais insatisfeitos são sua maior fonte de
                    aprendizado.“
                  </h6>
                  <p>Bill Gates (Fundador da Microsoft)</p>
                </div>
                <div className="card">
                  <Image
                    className="icon-quotes"
                    src="/assets/quotes.svg"
                    height={64}
                    width={61}
                    alt="flow"
                  />
                  <h6>
                    “Os grandes vendedores são, antes de tudo, profundos
                    conhecedores dos seus produtos e serviços, bem como dos
                    desejos e necessidades dos seus clientes.”
                  </h6>
                  <p>Steve Jobs (Fundador da Apple)</p>
                </div>
              </div>
            </Carousel>
          </div>
          <div className="stats">
            <div className="stat">
              <h3>50%</h3>
              <p>
                dos consumidores mudarão para um concorrente após uma má
                experiência.
              </p>
              <span>(Fonte: Zendesk)</span>
            </div>
            <Image
              className="hidden md:block"
              src="/assets/divider.svg"
              height={83}
              width={1}
              alt="divider"
            />
            <div className="stat">
              <h3>91%</h3>
              <p>
                dos clientes não farão negócios novamente com sua empresa
                voluntariamente por má experiência.
              </p>
              <span>(Fonte: Glance)</span>
            </div>
            <Image
              className="hidden md:block"
              src="/assets/divider.svg"
              height={83}
              width={1}
              alt="divider"
            />
            <div className="stat">
              <h3>70%</h3>
              <p>
                dos clientes insatisfeitos com problemas resolvidos voltam a
                comprar naquela empresa.
              </p>
              <span>(Fonte: Glance)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
