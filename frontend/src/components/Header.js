import Logo from '../img/logo.png'

export default function Header({ wallet, isSignedIn }){
    return (
    <header className="uni-header uk-position-top">
    <div className="uni-header-navbar" data-uk-sticky="top: 70; show-on-up: false; animation: uk-animation-slide-top" data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 0;">
        <div className="uk-container">
            <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                <div className="uk-navbar-top">
                    <div className="uk-navbar-left">
                        <a className="uk-logo uk-navbar-item uk-h4 uk-h3@m uk-margin-remove" href="/"> 
                            NFTAR
                        </a>
                    </div>

                    <div className="uk-navbar-right uk-flex-1 uk-flex-right">
                        <ul className="uk-navbar-nav dark:uk-text-gray-10 uk-visible@m" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80" data-uk-navbar-bound>
                            <li><a href="#uni_about">About</a></li>
                            <li><a href="#uni_minting">How To Mint</a></li>
                            <li><a href="#mint-here">Minting</a></li>
                        </ul>
                        <div className="uk-navbar-item">
                            <ul className="uk-subnav uk-subnav-small uk-visible@m">
                                <li>
                                    <a href="https://twitter.com/metacdq"><i className="uk-icon unicon-logo-twitter"></i></a>
                                </li>
                            </ul>
                            <a href="#" onClick={()=>{
                                if(isSignedIn){
                                    wallet.signOut()
                                }else{
                                    wallet.signIn()
                                }
                            }} className="uk-button uk-button-medium@m uk-button-default uk-button-outline uk-margin-left uk-visible@m" data-uk-toggle="">
                                {!isSignedIn? (<span>Connect wallet</span>) : <span>{wallet.accountId}</span>}
                            </a>
                        </div>

                        <div className="uk-navbar-item uk-hidden@m">
                            <a href="#" onClick={()=>{
                                if(isSignedIn){
                                    wallet.signOut()
                                }else{
                                    wallet.signIn()
                                }
                            }} className="uk-button uk-button-medium@m uk-button-icon uk-hidden@m uk-margin-small-right" data-uk-toggle="">
                                <i className="uk-icon unicon-wallet"></i> {!isSignedIn? (<span>Connect wallet</span>) : <span>{wallet.accountId}</span>}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</header>
)
}