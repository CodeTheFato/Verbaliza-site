'use client'
import Image from 'next/image'
import './styles.css'
export function SectionHome() {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="col-a">
          <header>
            <h2>
              Um sistema de pesquisa com clientes para micro e pequenas
              empresas.
            </h2>
          </header>

          <div className="content">
            <p>Médias e grandes também são bem-vindas.</p>
          </div>
        </div>

        <div className="col-b">
          <Image
            width={414}
            height={480}
            src="/happy-doctor-holding-a-clipboard-with-patients.png"
            alt="Doutor feliz segurando prancheta com pacientes"
          />
        </div>
      </div>
    </section>
  )
}
