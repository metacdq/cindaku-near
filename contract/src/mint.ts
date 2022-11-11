// @ts-nocheck
import { assert, near } from "near-sdk-js";
import { BASE_DESC, BASE_NAME, Contract, NFT_METADATA_SPEC, NFT_STANDARD_NAME } from ".";
import { internalAddTokenToOwner, refundDeposit } from "./internal";
import { Token, TokenMetadata } from "./metadata";

export function internalMint({
    contract,
    receiverId,
}:{ 
    contract: Contract, 
    receiverId: string 
}): void {

    assert(contract.tokenMetadataById.length < 500, "All suply already minted");
    //measure the initial storage being used on the contract TODO
    let initialStorageUsage = near.storageUsage();
    
    let royalty: { [accountId: string]: number } = {}

    let tokenId: String = (contract.tokenMetadataById.length+1).toString()

    let issuedAt: String = new Date().getTime().toString


    let metadata: TokenMetadata= {
        title: `${BASE_NAME} #${tokenId}`,
        description: BASE_DESC,
        media: `mask.png`,
        media_hash: null,
        copies:  null,
        issued_at:  issuedAt,
        expires_at:  null,
        starts_at:  null,
        updated_at:  null,
        extra:  null,
        reference:  `mask.json`,
        reference_hash: null,
    }
    //specify the token struct that contains the owner ID 
    let token = new Token ({
        //set the owner ID equal to the receiver ID passed into the function
        ownerId: receiverId,
        //we set the approved account IDs to the default value (an empty map)
        approvedAccountIds: {},
        //the next approval ID is set to 0
        nextApprovalId: 0,
        //the map of perpetual royalties for the token (The owner will get 100% - total perpetual royalties)
        royalty,
    });

    //insert the token ID and token struct and make sure that the token doesn't exist
    assert(!contract.tokensById.containsKey(tokenId), "Token already exists");
    contract.tokensById.set(tokenId, token)

    //insert the token ID and metadata
    contract.tokenMetadataById.set(tokenId, metadata);

    //call the internal method for adding the token to the owner
    internalAddTokenToOwner(contract, token.owner_id, tokenId)

    // Construct the mint log as per the events standard.
    let nftMintLog = {
        // Standard name ("nep171").
        standard: NFT_STANDARD_NAME,
        // Version of the standard ("nft-1.0.0").
        version: NFT_METADATA_SPEC,
        // The data related with the event stored in a vector.
        event: "nft_mint",
        data: [
            {
                // Owner of the token.
                owner_id: token.owner_id,
                // Vector of token IDs that were minted.
                token_ids: [tokenId],
            }
        ]
    }
    
    // Log the json.
    near.log(`EVENT_JSON:${JSON.stringify(nftMintLog)}`);

    //calculate the required storage which was the used - initial TODO
    let requiredStorageInBytes = near.storageUsage().valueOf() - initialStorageUsage.valueOf();

    //refund any excess storage if the user attached too much. Panic if they didn't attach enough to cover the required.
    refundDeposit(requiredStorageInBytes);
}