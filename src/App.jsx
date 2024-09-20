import './App.css'
import Footer from './companeds/Footer'
import About from './companeds/About'
import Logoa from './companeds/Logoa'
import Logos from './companeds/Logos'
import Hero from './companeds/Hero'
import Over from './companeds/Over'
import Log from '../src/assets/aaa.png'
import Logs from '../src/assets/bg-image.png'
import Logo from '../src/assets/logo.png'
import Col from '../src/assets/col.png'
import Loq from '../src/assets/Logoq.png'
import gr from '../src/assets/Group.png'
import fill from '../src/assets/fill.png'
import fillm from '../src/assets/instagram.png'

function App() {

  return (
    <div>
      <header style={{ backgroundImage: `url(${Logs})`, height: `100vh`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center` }}>
        <nav>
          <a href='/'>
            <img src={Logo} alt="" />
          </a>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Activities</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className='flex'>
            <p className="like">
              Holla,
              Ales Nesetril
            </p>
            <div>
              <img className='asus' src={Log} alt="" />
            </div>
          </div>
        </nav>
        <div className="feel">
          <div>
            <p className="text-q">
              Discover the most engaging places
            </p>
            <p className="text-sd">
              <span>A</span><span>n</span>
              <span>d</span> <span>f</span><span>o</span><span>r</span><span>g</span><span>e</span><span>t</span>  <span>y</span><span>o</span><span>u</span><span>r</span> <span></span>
              <span> </span>
                <span>f</span><span>o</span><span>v</span><span>o</span><span>r</span><span>i</span><span>t</span><span>e</span> <span>w</span><span>a</span><span>l</span><span>l</span><span>p</span><span>a</span><span>p</span><span>e</span><span>r</span>
            </p>
            <div className='feed'>
              <a className='btn1' href="#">Discover on 3D Globe</a>
            </div>
          </div>
        </div>

      </header>
      <Over />
      <Hero />
      <Logos />
       <Logoa/>
       <About Col = {Col} />
       <Footer Loq = {Loq}  gr = {gr} fill = {fill}  fillm = {fillm} />
    </div>
  )
}

export default App
