import SliderPrices from './SliderPrices'
import { plansME, plansEPP } from './prices-types'

export function PlanCards() {
  return (
    <>
      <div className="card">
        <h3>MEI</h3>
        <label>R$ 99,90/ mês</label>
        <p className="discount">
          <s>R$ 599,90/ mês</s>
        </p>
        <div className="divider" />
        <div className="price-description">
          <p>1 Unidade de negócio</p>
          <p>1 Licença</p>
        </div>
        <div className="divider" />
        <div className="blue-btn">
          <a
            className="first-link"
            href="https://verbaliza-app-dev.vercel.app/admin/signin/register"
            target="_blank"
            rel="noreferrer"
          >
            Saiba Mais
          </a>
          <a
            href="https://verbaliza-app-dev.vercel.app/admin/signin/register"
            target="_blank"
            rel="noreferrer"
          >
            Teste Grátis
          </a>
        </div>
      </div>

      <div className="card">
        <h3>ME</h3>
        <label>R$ 299,90 / mês</label>
        <p className="discount">
          <s>R$ 599,90/ mês</s>
        </p>
        <hr className="divider" />
        <SliderPrices plans={plansME} />

        <hr className="divider" />
        <div className="blue-btn">
          <a
            className="first-link"
            href="https://verbaliza-app-dev.vercel.app/admin/signin/register"
            target="_blank"
            rel="noreferrer"
          >
            Saiba Mais
          </a>
          <a
            href="https://verbaliza-app-dev.vercel.app/admin/signin/register"
            target="_blank"
            rel="noreferrer"
          >
            Teste Grátis
          </a>
        </div>
      </div>

      <div className="card">
        <h3>EPP</h3>
        <label>R$ 399,90/ mês</label>
        <p className="discount">
          <s>R$ 599,90/ mês</s>
        </p>
        <div className="divider" />
        <SliderPrices plans={plansEPP} />
        <div className="divider" />
        <div className="blue-btn">
          <a
            className="first-link"
            href="https://verbaliza-app-dev.vercel.app/admin/signin/register"
            target="_blank"
            rel="noreferrer"
          >
            Saiba Mais
          </a>
          <a
            href="https://verbaliza-app-dev.vercel.app/admin/signin/register"
            target="_blank"
            rel="noreferrer"
          >
            Teste Grátis
          </a>
        </div>
      </div>
    </>
  )
}
