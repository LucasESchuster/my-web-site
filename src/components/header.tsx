import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <header className="p-4 fixed w-full px-10">
      <div className="flex items-center justify-end gap-16">
        <nav className="">
          <Link href="/blog">Meu blog</Link>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}
