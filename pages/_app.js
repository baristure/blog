// setup global css files in there
import '../styles/global.css'

export default function App({ Component, pageProps}){
    return <Component { ...pageProps }/>
}