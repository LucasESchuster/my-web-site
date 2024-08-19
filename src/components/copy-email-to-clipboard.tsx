'use client'

import { Mail } from 'lucide-react'
import { Badge } from './ui/badge'
import { useToast } from './ui/use-toast'

export default function CopyEmailToClipboard() {
  const { toast } = useToast()

  function copyToClipboard() {
    navigator.clipboard.writeText('lucasschusterr@gmail.com')

    toast({
      title: '✅ Sucesso!',
      description: 'Email copiado para a área de transferência 💚',
    })
  }

  return (
    <Badge className=" flex items-start" onClick={copyToClipboard}>
      <Mail className="w-4 h-4" />
    </Badge>
  )
}
