import Link from 'next/link'
import './styles.css'
import Image from 'next/image'
export function SectionContact() {
  return (
    <section id="contact">
      <div className="wrapper">
        <div className="content">
          <div className="verbalize-conosco">
            <h1>Verbalize Conosco</h1>
            <h4>Fale com um consultor!</h4>
          </div>
          <div className="verbalize-contact">
            <h1>Ligue para (11) 98778-9871</h1>
            <h1>ou</h1>
            <Link
              href="https://wa.me/5511987789871"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">
                <Image
                  src="/assets/whatsapp.svg"
                  height={24}
                  width={24}
                  alt="whatsapp"
                />
                <span>Converse no Whatsapp</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
