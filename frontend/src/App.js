import ConnectWallet from './components/ConnectWallet'
import Header from './components/Header'
import Hero from './components/HeroBanner'
import Brands from './components/Brands'
import Mint from './components/Mint'
import HowToStart from './components/HowToStart'
import About from './components/About'
import Collection from './components/Collection'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
export default function App({isSignedIn, cindakuContract, wallet}) {

  return (
    <>
      {/* <ConnectWallet/> */}
      <div className="wrap">
        <Header wallet={wallet} isSignedIn={isSignedIn}/>
        <Hero/>
        <Brands/>
         <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m"
          src="https://static.cindaku.com/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 100;"/>
         <HowToStart/>
         <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m"
          src="https://static.cindaku.com/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 100;"/>
         <About/>
         <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m"
          src="https://static.cindaku.com/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 100;"/>
         <Collection/>
         <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m"
          src="https://static.cindaku.com/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 100;"/>
         <Mint/>
         <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m"
          src="https://static.cindaku.com/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 100;"/>
          <FAQ/>
          <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m"
            src="https://static.cindaku.com/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 100;"/>
          <CTA wallet={wallet} isSignedIn={isSignedIn} cindakuContract={cindakuContract} />  
          <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m"
            src="https://static.cindaku.com/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 100;"/>
      </div>
      <Footer/>
    </>
  );
}
