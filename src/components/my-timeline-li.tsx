import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Children, ReactNode } from 'react'

interface MyTimelineLiProps {
  date: Date
  title: string
  children?: ReactNode
}

export default function MyTimelineLi({
  date,
  title,
  children,
}: MyTimelineLiProps) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border  " />
      <span>
        <time
          className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-zinc-400"
          dateTime="2008-02-14 20:00"
        >
          {format(date, "MMMM 'de' yyyy", { locale: ptBR })}
        </time>
      </span>
      <h3 className="text-lg font-semibold ">{title}</h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-100">
        {children}
      </p>
    </li>
  )
}
