import MyTimelineLi from './my-timeline-li'

export default function MyTimeline() {
  return (
    <>
      <ol className="relative border-s border-foreground ">
        <MyTimelineLi
          date={new Date(2022, 1, 1)}
          title="Aplicações utilizando Arduino"
        >
          Aprendizado sobre componentes básicos da robótica, como servo motor,
          potenciômetro, LEDs e o controle destes por meio de código.
        </MyTimelineLi>
        <MyTimelineLi date={new Date(2022, 7, 4)} title="Primeiro emprego">
          Primeiro emprego em meio turno, envolvendo pequenos desenvolvimentos
          de aplicações desktop em java.
        </MyTimelineLi>
        <MyTimelineLi date={new Date(2023, 7, 4)} title="Trabalho integral">
          Efetivação do emprego anterior, desenvolvimento de softwares web
          envolvendo linguagens como PhP e React, juntamente com banco de dados
          Oracle.
        </MyTimelineLi>
        <MyTimelineLi
          date={new Date(2024, 7, 18)}
          title="Publicação deste portfólio"
        >
          Desenvolvimento e lançamento deste portfólio
        </MyTimelineLi>
      </ol>
    </>
  )
}
