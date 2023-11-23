'use client'
import Image from 'next/image'
import './styles.css'
import { Carousel } from 'react-responsive-carousel'
export function SectionJourney() {
  return (
    <section id="journey">
      <div className="wrapper client-journey">
        <div className="col-a">
          <header>
            <h2 className="">Visão do cliente</h2>
            <p>
              Os clientes têm uma experiência simples, rápida e espontânea ao
              responder à pesquisa
            </p>
          </header>
        </div>

        <div className="col-b">
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
            <div className="client-journey-img">
              <Image
                width={244}
                height={493}
                src="/assets/clientJourney/phone-1.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
            <div className="client-journey-img">
              <Image
                width={244}
                height={493}
                src="/assets/clientJourney/phone-2.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
            <div className="client-journey-img">
              <Image
                width={244}
                height={493}
                src="/assets/clientJourney/phone-3.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="wrapper company-journey">
        <div className="col-a">
          <header>
            <h2 className="">Visão da empresa</h2>
            <p>
              Sistema para criar pesquisas e acessar os resultados: visualize
              vídeos, áudios, fotos e comentários dos clientes e faça análises
              com gráficos interativos
            </p>
          </header>
        </div>

        <div className="col-b">
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
            <div className="company-journey-img">
              <Image
                width={700}
                height={479}
                src="/assets/companyJourney/1-screen.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
            <div className="company-journey-img">
              <Image
                width={700}
                height={479}
                src="/assets/companyJourney/2-screen.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
            <div className="company-journey-img">
              <Image
                width={700}
                height={479}
                src="/assets/companyJourney/screen.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
