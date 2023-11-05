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
              interval={3000}
              swipeable={true}
              emulateTouch={true}
              infiniteLoop={true}
              autoPlay
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
                    “O seu cliente, hoje em dia, tem muito mais opções. Ele está
                    muito mais bem informado. Quer testar coisas diferentes e
                    todos devem se adaptar a isso, senão vão ficar para trás.”
                  </h6>
                  <p>Jorge Paulo Lemann (Fundador da Ambev)</p>
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
                    “O seu cliente, hoje em dia, tem muito mais opções. Ele está
                    muito mais bem informado. Quer testar coisas diferentes e
                    todos devem se adaptar a isso, senão vão ficar para trás.”
                  </h6>
                  <p>Jorge Paulo Lemann (Fundador da Ambev)</p>
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
