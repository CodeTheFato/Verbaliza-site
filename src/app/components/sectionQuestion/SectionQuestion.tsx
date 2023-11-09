import { ReactNode } from 'react'
import { Accordion } from './Accordion'
import './SectionQuestion.css'

interface questionType {
  title: string
  content: ReactNode | string
}

const questions: questionType[] = [
  {
    title: 'O que é o VerbalizaCX?',
    content: (
      <ul className="contentQuestions">
        <li>
          É um sistema de pesquisa com clientes do tipo “faça você mesmo” onde é
          possível:
        </li>
        <li>- Capturar as experiências dos clientes utilizando QR codes;</li>
        <li>- Fazer análises com: Vídeos, fotos, áudios e textos;</li>
        <li>- Gráficos interativos.</li>
      </ul>
    ),
  },
  {
    title: 'Como utilizar o VerbalizaCX para realizar pesquisas?',
    content: (
      <ul className="contentQuestions">
        <li>
          - Crie um QR Code para que os clientes escaneiem e participem da
          pesquisa;
        </li>
        <li>
          - Compartilhe o QR Code em suas comunicações e incentive os clientes a
          avaliarem suas experiências;
        </li>
        <li>
          - Acesse os vídeos, fotos, áudios, textos feitos pelos seus clientes
          além de gráficos interativos.
        </li>
      </ul>
    ),
  },
  {
    title: 'Por que assinar o VerbalizaCX?',
    content: (
      <ul className="contentQuestions">
        <li>
          A cada dia, os clientes estão mais exigentes e com muito muitas opções
          de escolha. Sua concorrência é acirrada e bem preparada.
        </li>
        <li>
          Clientes encantados e fiéis tendem a comprar mais, frequentar mais e
          recomendar mais a sua empresa para amigos e familiares.
        </li>
        <li>Com VerbalizaCX você:</li>
        <li>
          - Escuta e entende seus clientes de forma simples, prática e
          eficiente;
        </li>
        <li>
          - Realiza análises precisas para tomar decisões assertivas em seu
          negócio.
        </li>
      </ul>
    ),
  },
  {
    title: 'Quais as vantagens do VerbalizaCX em comparação outros sistemas?',
    content: (
      <ul className="contentQuestions">
        <li>
          - Utiliza QR code personalizado, eliminando a necessidade de ter um
          email ou número de telefone para enviar pesquisas aos clientes;
        </li>
        <li>
          - Captura a experiência dos clientes de forma espontânea por meio de
          vídeos, fotos, áudios e textos. Os clientes verbalizam livremente suas
          opiniões com VerbalizaCX;
        </li>
        <li>
          - Feito para micro e pequenas empresas. É simples, prático e eficiente
          com excelente custo-benefício;
        </li>
        <li>
          - É um sistema “faça você mesmo”, sem necessidade de programações e
          integrações de sistemas complexas. Em caso de dúvidas, temos suporte
          disponível pelo Whats App 11 98778 9871.
        </li>
      </ul>
    ),
  },
  {
    title: 'Qual a vantagem do VerbalizaCX em comparação ao Google Reviews?',
    content: (
      <ul className="contentQuestions">
        <li>
          O VerbalizaCX oferece a oportunidade de aprimorar seu negócio antes
          que reclamações se tornem públicas, permitindo a coleta privada das
          experiências, resolução antecipada de problemas e construção de
          relacionamentos sólidos com os clientes. Evite avaliações negativas e
          mantenha uma reputação online positiva.
        </li>
      </ul>
    ),
  },
  {
    title: 'Como funciona a assinatura do VerbalizaCX?',
    content: (
      <ul className="contentQuestions">
        <li>
          A assinatura é mensal e pode ser contratada ou cancelada a qualquer
          momento, sem burocracia. Saiba mais.
        </li>
      </ul>
    ),
  },
  {
    title: 'Quais tipos de empresas podem utilizar VerbalizaCX?',
    content: (
      <ul className="contentQuestions">
        <li>
          - O sistema foi criado para atender uma ampla variedade de empresas,
          sejam elas lojas físicas, que tenham um fluxo de clientes, ou
          virtuais, que ofereçam diferentes tipos de produtos ou serviços;
        </li>
        <li>
          - Em lojas físicas, os clientes pode scanear o QR Code da pesquisa por
          meio de comunicações impressas no balcão de atendimento, no caixa ,
          mesas, em prateleiras, entre outros locais;
        </li>
        <li>
          - Para lojas virtuais, os clientes têm a opção de responder à pesquisa
          ao finalizar a compra no site (acessando um link ou QR Code) e ao
          receberem o produto em casa (QR Code na comunicação impressa);
        </li>
      </ul>
    ),
  },
  {
    title:
      'Como usar o VerbalizaCX na sua empresa? Por exemplo, em uma padaria:',
    content: (
      <ul className="contentQuestions">
        <li>- Avalie a agilidade de pagamento no caixa;</li>
        <li>- Avalie a simpatia dos atendentes no balcão;</li>
        <li>- Avalie o atendimento no 1º ou 2º andar do estabelecimento;</li>
        <li>- Avalie a limpeza do banheiro;</li>
        <li>
          - Com VerbalizaCX, você tem flexibilidade para criar diferentes
          pesquisas e coletar a experiência dos clientes de diversas formas.
        </li>
      </ul>
    ),
  },
]

export function SectionQuestion() {
  return (
    <section id="questions">
      <div className="wrapper mt-24">
        <h1 className="titleQuestion">Saiba Mais</h1>
        <div className="accordionList">
          {questions.map((question, index) => (
            <Accordion
              key={index}
              title={question.title}
              content={question.content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
