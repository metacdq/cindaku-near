
export default function ConnectWallet({}){
    return (
    <div id="uni_connect_wallet" className="uk-modal-full" data-uk-modal>
        <div className="uk-modal-dialog">
            <div className="uk-position-top uk-position-z-index-negative" data-uk-height-viewport="">
                <div className="uk-position-cover uk-background-cover uk-opacity-10 dark:uk-hidden" data-src="https://static.cindaku.com/images/gradient-01.png" data-uk-img></div>
                <div className="uk-position-cover uk-background-cover uk-opacity-20 uk-hidden dark:uk-visible" data-src="https://static.cindaku.com/images/gradient-01.png" data-uk-img></div>
            </div>
            <button className="uk-modal-close-full uk-close-large uk-position-small" type="button" data-uk-close></button>
            <div className="uk-container">
                <div className="uk-grid uk-flex-center uk-flex-middle uk-child-width-1-2@m uk-section" data-uk-grid data-uk-height-viewport>
                    <div>
                        <div className="uk-panel uk-text-center">
                            <h2 className="uk-h5 uk-h3@s uk-h2@l uk-margin-remove">Connect your wallet</h2>
                            <div className="uk-grid uk-grid-xsmall uk-grid-small@m uk-child-width-1-2@m uk-margin-medium-top uk-margin-large-top@m" data-uk-grid="">
                                <div>
                                    <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-radius-medium uk-radius-large@m uk-box-shadow-hover-small hover:uk-border-primary">
                                        <a href="#metamask" className="uk-position-cover"></a>
                                        <img src="https://static.cindaku.com/images/icon-metamask.svg" alt="metamask"/>
                                        <h4 className="uk-text-bold uk-h5@m uk-margin-small-top uk-margin-medium-top@m">Metamask</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-radius-medium uk-radius-large@m uk-box-shadow-hover-small hover:uk-border-primary">
                                        <a href="#bitgo" className="uk-position-cover"></a>
                                        <img src="https://static.cindaku.com/images/icon-bitgo.svg" alt="bitgo"/>
                                        <h4 className="uk-text-bold uk-h5@m uk-margin-small-top uk-margin-medium-top@m">BitGo</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-radius-medium uk-radius-large@m uk-box-shadow-hover-small hover:uk-border-primary">
                                        <a href="#trustwallet" className="uk-position-cover"></a>
                                        <img src="https://static.cindaku.com/images/icon-trustwallet.svg" alt="trustwallet"/>
                                        <h4 className="uk-text-bold uk-h5@m uk-margin-small-top uk-margin-medium-top@m">Trust Wallet</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-radius-medium uk-radius-large@m uk-box-shadow-hover-small hover:uk-border-primary">
                                        <a href="#coinbase" className="uk-position-cover"></a>
                                        <img src="https://static.cindaku.com/images/icon-coinbase.svg" alt="coinbase"/>
                                        <h4 className="uk-text-bold uk-h5@m uk-margin-small-top uk-margin-medium-top@m">Coinbase</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}