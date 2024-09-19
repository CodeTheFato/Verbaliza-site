'use client'
import { useState } from 'react'
import './styles.css'
import { PlanCards } from './PlanCards'
import { CustomPlanCards } from './CustomPlanCards'

export function SectionPrices() {
  const [activeTab, setActiveTab] = useState('Planos')
  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }
  return (
    <section id="prices">
      <div className="wrapper">
        <header className="mb-10">
          <h2>Preços dos Planos</h2>
          <p>
            VerbalizaCX oferece condições especiais para MEIs, MEs e EPPs,
            reforçando nosso compromisso em fortalecer uma gestão focada no
            cliente e apoiando empreendedores a crescer e prosperar no mercado.
          </p>
        </header>

        <div className="mb-6 flex flex-row justify-center border-gray-200 text-center text-lg font-medium text-gray-600 md:mb-2">
          <ul className="-mb-px flex flex-wrap">
            <li className="me-2">
              <label
                onClick={() => handleTabClick('Planos')}
                className={`inline-block cursor-pointer rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300  ${
                  activeTab === 'Planos'
                    ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500'
                    : 'border-transparent'
                }`}
              >
                MEI / ME / EPP
              </label>
            </li>
            <li className="me-2">
              <label
                onClick={() => handleTabClick('SobConsulta')}
                className={`inline-block  cursor-pointer rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300 ${
                  activeTab === 'SobConsulta'
                    ? 'border-b-2 border-red-800'
                    : 'border-transparent'
                }`}
              >
                Média e Grande
              </label>
            </li>
          </ul>
        </div>

        <div className="content">
          <div className="cards">
            {activeTab === 'Planos' ? (
              <>
                <PlanCards />
              </>
            ) : (
              <CustomPlanCards />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
