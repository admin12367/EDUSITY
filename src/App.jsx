import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



const App = () => {


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title subTitle= 'Our Program' title= 'What We offer'/>
      <Programs />
      <About />
      <Title subTitle= 'Gallery' title= 'Campus Photos'/>
      <Campus />
      <Title subTitle= 'testimonials' title= 'What Student Says'/>
      <Testimonials />
      <Title subTitle= 'Contact us' title= 'Get in Touch'/>
      <Contact />
      <Footer />
      </div>
      
      
    </div>
  )
}

export default App

