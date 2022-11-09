

export default function MobileMenu({}){
    return (<div id="uni_mobile_menu" className="uni-mobile-menu uk-offcanvas" data-uk-offcanvas="mode: push; overlay: true; flip: true; selPanel: .uk-offcanvas-bar-panel;">
    <div className="uk-offcanvas-bar-panel uk-panel dark:uk-background-gray-100">
        <div className="uni-mobile-menu-wrap uk-flex-column uk-flex-between" data-uk-height-viewport="offset-bottom: true;">
            <div className="uni-mobile-menu-content">
                <header className="uk-card uk-card-2xsmall uk-flex-middle uk-flex-between">
                    <div className="uk-flex-1">
                        <button aria-label="Close Menu" className="uk-offcanvas-close uk-button uk-button-small uk-button-icon uk-button-default uk-button-outline uk-radius-circle" type="button">
                            <i className="uk-icon-small" data-feather="arrow-left"></i>
                        </button>
                    </div>
                    <div>
                        <h5 className="uk-h5 uk-margin-remove">Navigation</h5>
                    </div>
                    <div className="uk-flex-1"></div>
                </header>
                <hr className="uk-margin-remove"/>
                <div className="uk-card uk-card-small">
                    <div className="uk-panel">
                        <ul className="uk-nav uk-nav-default">
                            <li className="uk-nav-header">Homepage</li>
                            <li><a href="landing-01.html">Landing 01</a></li>
                            <li><a href="landing-02.html">Landing 02</a></li>
                            <li><a href="landing-03.html">Landing 03</a></li>
                            <li className="uk-nav-header">Inner pages</li>
                            <li><a href="base.html">Base components</a></li>
                            <li><a href="connect-wallet.html">Connect wallet</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="404.html">404 page</a></li>
                            <li><a href="coming-soon.html">Coming soon</a></li>
                            <li className="uk-nav-header">Content &amp; Privacy</li>
                            <li><a href="terms.html">Terms of use</a></li>
                            <li><a href="privact.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
}