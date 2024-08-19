import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function BlogHome() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center">
        <h1>Opss, isso ainda está sendo construído. 🛠️</h1>
        <Link href="/" className="text-center">
          <Button variant="ghost">
            <ArrowLeft className="w-5 h-5 inline" /> Voltar
          </Button>
        </Link>
      </div>
    </div>
  )
}
