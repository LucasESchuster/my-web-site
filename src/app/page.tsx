import CopyEmailToClipboard from '@/components/copy-email-to-clipboard'
import Header from '@/components/header'
import TimeSince from '@/components/my-summary'
import MyTimeline from '@/components/my-timeline'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { Separator } from '@/components/ui/separator'

import { Github, Linkedin } from 'lucide-react'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className=" min-h-screen container mx-auto">
          <section className="mb-10">
            <h1 className="text-4xl font-semibold text-center">
              Lucas Eduardo Schuster
            </h1>
            <nav className="space-x-2 flex items-start  justify-center ">
              <Link
                href="https://www.linkedin.com/in/lucas-eduardo-schuster-945535231/"
                target="_blank"
              >
                <Badge>
                  <Linkedin className="w-4 h-4" />
                </Badge>
              </Link>
              <Link href="https://github.com/LucasESchuster" target="_blank">
                <Badge>
                  <Github className="w-4 h-4" />
                </Badge>
              </Link>
              <Button
                variant="link"
                className="p-0 m-0 rounded-none  border-0 h-auto w-auto"
              >
                <CopyEmailToClipboard />
              </Button>
            </nav>
          </section>
          <Separator className="w-full" />
          <div className="grid lg:grid-cols-2 pt-8 lg:gap-32 gap-8">
            <section className="space-y-8">
              <div>
                <h2 className=" text-2xl  font-semibold">Meu começo</h2>
                <p className="">
                  Comecei minha jornada aos 13 anos, momento no qual devo
                  agradecimentos ao meu professor de robótica, este me inspirou
                  a aprender a programar. Desde então me aventuro em diversas
                  áreas da tecnologia, nas quais me ajudaram a me tornar um
                  desenvolvedor full stack.
                </p>
              </div>

              <div>
                <h2 className=" text-2xl  font-semibold">
                  Tempo trabalhando na área
                </h2>
                <TimeSince date="2022-08-04T00:00:00Z" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">
                  Tecnologias mais utilizadas
                </h2>
                <div className="space-y-4">
                  <div>
                    <h5 className=" text-left text-1xl">Front-End</h5>
                    <div className="space-x-2">
                      <Badge>React</Badge>
                      <Badge>Next</Badge>
                      <Badge>Tailwind</Badge>
                      <Badge>Bootstrap</Badge>
                    </div>
                  </div>
                  <div>
                    <h5 className=" text-left text-1xl">Back-End</h5>
                    <div className="space-x-2">
                      <Badge>PHP</Badge>
                      <Badge>SQL</Badge>
                      <Badge>Python</Badge>
                    </div>
                  </div>
                  <div>
                    <h5 className=" text-left text-1xl ">Banco de dados</h5>
                    <div className="space-x-2">
                      <Badge>Oracle</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>MySQL</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex justify-center">
              <MyTimeline />
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
