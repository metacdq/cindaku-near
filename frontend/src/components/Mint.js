
export default function Mint({}){
    return (
        <div
            id="uni_minting"
            className="uni-minting uk-section uk-section-xlarge@m uk-panel"
            >
            <div className="uk-container uk-container-small">
                <header
                className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid"
                data-uk-grid=""
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
                >
                <div className="uk-panel uk-text-center">
                    <h2 className="uk-h3 uk-h1@m">How to mint</h2>
                </div>
                </header>
                <div
                className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m"
                data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
                >
                <img
                    className="uk-position-top-left uk-text-secondary"
                    width={16}
                    src="https://static.cindaku.com/images/objects/circle-01.png"
                    alt="Object"
                    style={{ top: "-16%", left: "8%" }}
                />
                <img
                    className="uk-position-bottom-right uk-text-primary"
                    width={24}
                    src="https://static.cindaku.com/images/objects/circle-02.png"
                    alt="Object"
                    style={{ bottom: "16%", right: "-8%" }}
                />
                <img
                    className="uk-position-bottom-left uk-text-muted"
                    width={28}
                    src="https://static.cindaku.com/images/objects/x.png"
                    alt="Object"
                    style={{ bottom: "16%", left: "-8%" }}
                />
                <div
                    className="uk-grid uk-child-width-1-2@s uk-grid-match"
                    data-uk-grid=""
                    data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);"
                >
                    <div>
                    <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                        <div className="uk-grid uk-grid-medium@m" data-uk-grid="">
                        <div className="uk-width-1-3 uk-width-1-4@m">
                            <img src="https://static.cindaku.com/images/icon-01.png" alt="Icon" />
                        </div>
                        <div className="uk-panel uk-width-expand">
                            <h3 className="uk-h5 uk-h4@m">Connect your wallet</h3>
                            <p>
                            Use My Near Wallet to login into NFT AR Web/App
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                        <div className="uk-grid uk-grid-medium@m" data-uk-grid="">
                        <div className="uk-width-1-3 uk-width-1-4@m">
                            <img src="https://static.cindaku.com/images/icon-02.png" alt="Icon" />
                            <div
                            hidden=""
                            className="uk-card uk-card-xsmall uk-radius-medium uk-background-gradient uk-flex-middle uk-flex-center uk-margin-medium-bottom@m"
                            >
                            <i className="uk-icon-medium uk-icon-medium@m unicon-select-window" />
                            </div>
                        </div>
                        <div className="uk-panel uk-width-expand">
                            <h3 className="uk-h5 uk-h4@m">Mint</h3>
                            <p>Click "Mint For Free" on minting section</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                        <div className="uk-grid uk-grid-medium@m" data-uk-grid="">
                        <div className="uk-width-1-3 uk-width-1-4@m">
                            <img src="https://static.cindaku.com/images/icon-03.png" alt="Icon" />
                            <div
                            hidden=""
                            className="uk-card uk-card-xsmall uk-radius-medium uk-background-gradient uk-flex-middle uk-flex-center uk-margin-medium-bottom@m"
                            >
                            <i className="uk-icon-medium uk-icon-medium@m unicon-select-window" />
                            </div>
                        </div>
                        <div className="uk-panel uk-width-expand">
                            <h3 className="uk-h5 uk-h4@m">Confirm transaction</h3>
                            <p>
                                Wait until the transaction finished
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                        <div className="uk-grid uk-grid-medium@m" data-uk-grid="">
                        <div className="uk-width-1-3 uk-width-1-4@m">
                            <img src="https://static.cindaku.com/images/icon-04.png" alt="Icon" />
                            <div
                            hidden=""
                            className="uk-card uk-card-xsmall uk-radius-medium uk-background-gradient uk-flex-middle uk-flex-center uk-margin-medium-bottom@m"
                            >
                            <i className="uk-icon-medium uk-icon-medium@m unicon-select-window" />
                            </div>
                        </div>
                        <div className="uk-panel uk-width-expand">
                            <h3 className="uk-h5 uk-h4@m">Receive your NFTs</h3>
                            <p>You received NFT and can be used on NFT AR Android</p>
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