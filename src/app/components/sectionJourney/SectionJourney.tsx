'use client'
import Image from 'next/image'
import './styles.css'
import { Carousel } from 'react-responsive-carousel'
export function SectionJourney() {
  return (
    <section id="journey">
      <div className="wrapper">
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
            <div>
              <Image
                width={244}
                height={493}
                src="/assets/clientJourney/phone2.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
            <div>
              <Image
                width={525}
                height={819}
                src="/assets/clientJourney/phone3.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
            {/* <div>
              <Image
                width={919}
                height={1416}
                src="/assets/clientJourney/phone3.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
            <div>
              <Image
                width={919}
                height={1416}
                src="/assets/clientJourney/phone4.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
            <div>
              <Image
                width={919}
                height={1416}
                src="/assets/clientJourney/phone5.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
            <div>
              <Image
                width={919}
                height={1416}
                src="/assets/clientJourney/phone6.png"
                alt="Aplicativo Verbaliza"
              />
            </div> */}
          </Carousel>
        </div>
      </div>

      <div className="wrapper">
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
            <div>
              <Image
                width={2668}
                height={6012}
                src="/assets/home.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
            <div>
              <Image
                width={2668}
                height={6012}
                src="/assets/home.png"
                alt="Aplicativo Verbaliza"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
