import {useState, useEffect} from 'react'

export default function CollectionModal({ wallet,  cindakuContract }){
    const [collections, setCollections] = useState()
    const getData = async ()=>{
        const accountId=await wallet.getAccountId()
        const data=await cindakuContract.nftForOwner(accountId, 0,10)
        console.log(data)
    }
    useEffect(()=>{
        getData()
    },[])
    return (
    <div id="collection_modal" className="uk-modal-full" data-uk-modal>
        <div className="uk-modal-dialog">
            <div className="uk-position-top uk-position-z-index-negative" data-uk-height-viewport="">
                <div className="uk-position-cover uk-background-cover uk-opacity-10 dark:uk-hidden" data-src="https://static.cindaku.com/images/gradient-01.png" data-uk-img></div>
                <div className="uk-position-cover uk-background-cover uk-opacity-20 uk-hidden dark:uk-visible" data-src="https://static.cindaku.com/images/gradient-01.png" data-uk-img></div>
            </div>
            <button className="uk-modal-close-full uk-close-large uk-position-small" type="button" data-uk-close></button>
            <div className="uk-container">
                <div className="uk-grid uk-flex-center uk-flex-middleuk-section" data-uk-grid data-uk-height-viewport>
                    <div className="uk-flex uk-flex-column">
                       <h3>My Collections</h3>
                       { collections && (
                                <>
                                    {collections.map(function(nft, index){
                                        return (
                                        <div className="uk-card uk-card-default">
                                            <div className="uk-card-media-top uk-flex-center uk-background-primary">
                                                <img src="https://static.cindaku.com/nft/mask.png"/>
                                            </div>
                                            <div>
                                                <div className="uk-card-body">
                                                    <h3 className="uk-card-title">Media Left</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                </>
                            ) }
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}