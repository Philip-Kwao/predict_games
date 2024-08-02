import '@/styles/globals.css'
import { Roboto, Poppins, Noto_Sans, Quantico } from 'next/font/google'

const quantico=Quantico({
  subsets:["latin"],
  weight:['400','700']
})
export default function App({ Component, pageProps }) {


  return (
    <main className={quantico.className} >
      <Component {...pageProps} />
    </main>
  )
}
