import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-gradient-to-r from-darkBlue to-navyBlue w-full h-full'>
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
