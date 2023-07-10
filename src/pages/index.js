import { Inter } from 'next/font/google'
import NavBar from '../../Components/Components/NavBar/NavBar'
import Section2 from '../../Components/Components/Section2'
import Section3 from '../../Components/Components/Section3'
import Section4 from '../../Components/Components/Section4'
import Section5 from '../../Components/Components/Section5'
import Section6 from '../../Components/Components/Section6'
import VedioSection from '../../Components/Components/VedioSection7'
import Footer from '../../Components/Components/Footer'


export default function Home() {
  return (
    <>
      <NavBar />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <VedioSection />
      <Section6 />
      <Footer />
    </>
  )
}