/* eslint-disable prettier/prettier */
'use client'
import Image from 'next/image'
import './styles.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
export default function HomePage() {
  return (
    <>
      <section id="home">
        <div className="wrapper">
          <div className="col-a">
            <header>
              <h1>O sistema para escutar e entender seus clientes</h1>
            </header>

            <div className="content">
              <p>
                VerbalizaCX permite escutar e entender seus clientes por meio de vídeos, fotos, áudios  e textos
              </p>
            </div>
          </div>
          <Carousel interval={3000} swipeable={true} emulateTouch={true} infiniteLoop={true} autoPlay showThumbs={false} showArrows={false} showIndicators={false} showStatus={false}>
            <div>
              <Image width={689} height={1062} src="/assets/smart-phone-verbaliza.png" alt="Aplicativo Verbaliza" />
            </div>
            <div>
              <Image width={689} height={1062} src="/assets/smart-phone-verbaliza.png" alt="Aplicativo Verbaliza" />
            </div>
            <div>
              <Image width={689} height={1062} src="/assets/smart-phone-verbaliza.png" alt="Aplicativo Verbaliza" />
            </div>
            <div>
              <Image width={689} height={1062} src="/assets/smart-phone-verbaliza.png" alt="Aplicativo Verbaliza" />
            </div>
            <div>
              <Image width={689} height={1062} src="/assets/smart-phone-verbaliza.png" alt="Aplicativo Verbaliza" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  )
}
