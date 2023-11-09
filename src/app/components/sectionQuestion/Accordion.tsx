'use client'
import Image from 'next/image'
import './Accordion.css'
import { ReactNode, useState } from 'react'

interface AccordionProps {
  title: string
  content: string | ReactNode
}

export function Accordion({ title, content }: AccordionProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h4>{title}</h4>
        <Image
          width={30}
          height={30}
          alt="icone"
          src={`/assets/${isActive ? 'iconMinus.svg' : 'iconPlus.svg'}`}
        />
      </div>
      <div className={`accordion-content ${isActive ? 'active' : ''}`}>
        {content}
      </div>
    </div>
  )
}
