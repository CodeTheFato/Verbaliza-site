import './styles.css'
import { ThumbsDown, ThumbsUp } from 'lucide-react'
export function SectionStatistics() {
  return (
    <section id="statistics">
      <div className="wrapper">
        <header className="mb-10">
          <h2>Assuntos em Destaque</h2>
          <p>
            Descubra o que encanta seus clientes e onde melhorias são
            necessárias
          </p>
        </header>
        <div className="content">
          <div
            id="group"
            className="w-full items-center justify-center rounded-lg border bg-white p-6 shadow-lg"
          >
            <div className="bg-white-50 w-full max-w-[450px] rounded-lg border border-gray-300 p-6">
              <div className="flex items-center gap-2">
                <ThumbsUp color="green" size={20} />
                <label className="title">Top 3 Motivos de Encantamento</label>
              </div>
              <div className="max-w-[270px]">
                <div
                  className="mt-6 flex flex-row justify-between"
                  style={{ maxWidth: '400px' }}
                >
                  <label>1- Atendimento do colaborador</label>
                  <label className="font-bold">20.00%</label>
                </div>
                <div
                  className="mt-1 flex flex-row justify-between"
                  style={{ maxWidth: '400px' }}
                >
                  <label>2- Tempo de entrega</label>
                  <label className="font-bold">20.00%</label>
                </div>
                <div
                  className="mt-1 flex flex-row justify-between"
                  style={{ maxWidth: '400px' }}
                >
                  <label>3- Qualidade do produto</label>
                  <label className="font-bold">15.00%</label>
                </div>
              </div>
            </div>
            <div className="bg-white-50 h-[180px] w-full max-w-[450px] rounded-lg border border-gray-300 p-6">
              <div className="flex items-center gap-2">
                <ThumbsDown color="red" size={20} />
                <label className="title">Top 3 Motivos de Melhoria</label>
              </div>
              <div className="max-w-[270px]">
                <div
                  className="mt-6 flex flex-row justify-between "
                  style={{ maxWidth: '400px' }}
                >
                  <label>1- Tempo no caixa</label>
                  <label className="font-bold">30.00%</label>
                </div>
                <div
                  className="mt-1 flex flex-row justify-between "
                  style={{ maxWidth: '400px' }}
                >
                  <label>2- Preço</label>
                  <label className="font-bold">27.00%</label>
                </div>
                <div
                  className="mt-1 flex flex-row justify-between "
                  style={{ maxWidth: '400px' }}
                >
                  <label>3- Horário de atendimento</label>
                  <label className="font-bold">22.00%</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
