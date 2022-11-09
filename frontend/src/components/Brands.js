import NearLogo from '../img/near-logo.png'

export default function Brands({}){
    return (
    <div className="uni-brands uk-padding-3xlarge-top uk-padding-medium-bottom uk-padding-remove-top@m uk-padding-xlarge-bottom@m uk-panel uk-overflow-hidden" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;">
        <div className="uk-container uk-container-small">
            <div className="uk-panel uk-text-center dark:uk-text-white">
                <header className="uk-panel uk-flex-center uk-flex-middle uk-text-center">
                    <span className="uk-text-overline uk-text-bold uk-text-muted">Powered by :</span>
                </header>
                <div className="uk-grid uk-grid-xlarge@m uk-child-width-1-2 uk-child-width-expand@m uk-flex-middle uk-flex-center uk-grid uk-margin-medium-top" data-uk-grid>
                    <div><img className="uk-width-xsmall" src={NearLogo} alt="Near"/></div>
                </div>
            </div>
        </div>
    </div>
)
}