import Link from 'next/link'
import './styles.css'
import Image from 'next/image'
export function SectionContact() {
  return (
    <section id="contact">
      <div className="wrapper">
        <div className="content">
          <div className="verbalize-conosco">
            <div className="link-btn">
              <a
                className="first-link"
                href="https://verbaliza-app-dev.vercel.app/admin/signin/register"
                target="_blank"
                rel="noreferrer"
              >
                Experimente Grátis
              </a>
              <a
                href="https://verbaliza-app-dev.vercel.app/admin/signin/register"
                target="_blank"
                rel="noreferrer"
              >
                Experimente Grátis
              </a>
            </div>
          </div>
          <div className="verbalize-contact">
            <h1 className="font-bold">Verbalize Conosco</h1>
            <h1>Ligue para (11) 97291-8757</h1>
            <h1>ou</h1>
            <Link
              href="https://wa.me/5511972918757"
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
