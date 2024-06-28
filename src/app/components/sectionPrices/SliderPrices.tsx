import { ChangeEvent, useState } from 'react'
import { SizeTenantEnum } from './prices-types'

interface PlanCardProps {
  plans: Array<{
    name: string
    price: string
    units: number
    size: SizeTenantEnum
  }>
}

const SliderPrices = (props: PlanCardProps) => {
  const [selectedPlan, setSelectedPlan] = useState(props.plans[0])
  let additionalValue = ''

  if (selectedPlan?.size === SizeTenantEnum.ME) additionalValue = '29,90'
  if (selectedPlan?.size === SizeTenantEnum.EPP) additionalValue = '79,90'

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPlan = props.plans.find((m) => m.units === Number(e.target.value))

    setSelectedPlan(newPlan!)
  }

  return (
    <div className="flex-1 rounded-[20px] ">
      <h2 className="font-open-sans text-black-400 mb-3.5 w-full text-center text-4xl font-bold">
        R$
        {parseFloat(Number(selectedPlan?.price).toFixed(2)).toLocaleString(
          'pt-BR',
          { minimumFractionDigits: 2, maximumFractionDigits: 2 },
        )}{' '}
        / Mês
      </h2>
      <p className="font-open-sans text-black-300 mb-5 w-full text-center text-lg font-medium">
        {selectedPlan?.units} unidade{selectedPlan?.units > 1 ? 's' : ''} de
        negócio.
      </p>

      <div className="mb-5 h-[24px] w-56">
        {selectedPlan?.size !== SizeTenantEnum.MEI && (
          <>
            <label htmlFor="default-range" className="sr-only">
              Quantidade de unidades:
            </label>
            <input
              id="default-range"
              type="range"
              value={selectedPlan?.units}
              min="1"
              max={props.plans.length}
              onChange={handleChange}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 disabled:cursor-not-allowed dark:bg-gray-700"
              style={{ maxWidth: '250px' }}
            />
          </>
        )}
      </div>

      <div className="mb-3.5 h-[28px]">
        <p
          className="text-black-300 w-full text-center font-medium"
          style={{ fontSize: '1.4rem' }}
        >
          {additionalValue !== ''
            ? `Adicional de ${additionalValue} / mês por unidade.`
            : ''}
        </p>
      </div>
    </div>
  )
}

export default SliderPrices
