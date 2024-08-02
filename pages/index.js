import Image from 'next/image'
import { Inter, Quantico } from 'next/font/google'
import Header from './components/global/Header'
import Footer from './components/global/Footer'

const quantico = Quantico(
  { 
    subsets: ['latin'],
    weight:['400','700']
  })

export default function Home() {
  return (
    <main
      className={`h-screen ${quantico.className}`}
    >
      <Header />
      <Footer />

    </main>
  )
}
