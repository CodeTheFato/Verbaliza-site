import Image from 'next/image'
import './SectionFooter.css'
import Link from 'next/link'

export function SectionFooter() {
  return (
    <section id="footer" className="sectionFooter">
      <div className="wrapper">
        <div className="footer">
          <div className="icons">
            <Image
              alt="Grupo de icones"
              src="/assets/groupIcons.svg"
              width={472}
              height={27}
            />
          </div>
          <div>
            <div className="contentNav">
              <div className="itemsNav">
                <a href="#">Home</a>
                <a href="#flow">O Sistema</a>
                <a href="#client">Encante seus Clientes</a>
                <a href="#questions">Saiba Mais</a>
              </div>
              <div className="navIcons">
                <Image
                  alt="logo"
                  src="/assets/logoVerbalizaSmall.svg"
                  width={137}
                  height={20}
                />
                <div>
                  <Link
                    href={'https://www.instagram.com/verbalizacx/'}
                    target="_blank"
                  >
                    <Image
                      alt="instagram icon"
                      src="/assets/instagramSmall.svg"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <hr className="divider" />
            <div className="policyContent">
              <div>
                <span>Política de privadidade</span>
                <span>Termos de uso</span>
              </div>
              <span>©2023. Todos os direitos reservados</span>
              <div className="navIconsMobile">
                <Image
                  alt="logo"
                  src="/assets/logoVerbalizaSmall.svg"
                  width={137}
                  height={20}
                />
                <div>
                  <Link
                    href={'https://www.instagram.com/verbalizacx/'}
                    target="_blank"
                  >
                    <Image
                      alt="instagram icon"
                      src="/assets/instagramSmall.svg"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
