import { Inter, Quantico } from 'next/font/google'
import Footer from './components/global/Footer'
import Navbar from './components/global/Navbar'
import Header from './components/home/Header'
import Prediction from './components/home/Prediction'
import Football from './components/api_files/Football'

const quantico = Quantico(
  { 
    subsets: ['latin'],
    weight:['400','700']
  })

export default function Home() {
  return (
    <main
      className={` ${quantico.className}`}
    >
      <Navbar />
      <Header />
      <Prediction />
      <Football />
      <Footer />

    </main>
  )
}
