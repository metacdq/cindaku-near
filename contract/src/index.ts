
import { NearBindgen, near, call, view, LookupMap, UnorderedMap, initialize } from 'near-sdk-js'
import { NFTContractMetadata, Token, TokenMetadata, internalNftMetadata } from './metadata';
import { internalMint } from './mint';
import { internalNftTokens, internalSupplyForOwner, internalTokensForOwner, internalTotalSupply } from './enumeration';
import { internalNftToken, internalNftTransfer, internalNftTransferCall, internalResolveTransfer } from './nft_core';
import { internalNftApprove, internalNftIsApproved, internalNftRevoke, internalNftRevokeAll } from './approval';
import { internalNftPayout, internalNftTransferPayout } from './royalty';
import { predecessorAccountId } from 'near-sdk-js/lib/api';


/// This spec can be treated like a version of the standard.
export const NFT_METADATA_SPEC = "nft-1.0.0";

/// This is the name of the NFT standard we're using
export const NFT_STANDARD_NAME = "nep171";

export const BASE_NAME = "NFT AR Gen.0 "

export const BASE_DESC = "Unique NFT AR can be accessed on NFT AR App. Collect, Play And Share !"

@NearBindgen({})
export class Contract{
    owner_id="crlf.testnet";
    tokensPerOwner: LookupMap<Token>=new LookupMap("tokensPerOwner");
    tokensById: LookupMap<Token>=new LookupMap("tokensById");
    tokenMetadataById: UnorderedMap<TokenMetadata>=new UnorderedMap("tokenMetadataById");
    metadata: NFTContractMetadata={
        spec: "nft-1.0.0",
        name: "NFT AR",
        symbol: "NFTAR",
        icon: null,
        base_uri: "https://static.cindaku.com/nft/",
        reference: null,
        reference_hash: null
    };

    deserialize() {
        this.tokensPerOwner = Object.assign(new LookupMap("tokensPerOwner"), this.tokensPerOwner);
        this.tokensById = Object.assign(new LookupMap("tokensById"), this.tokensById);
        this.tokenMetadataById = Object.assign(new UnorderedMap("tokenMetadataById"), this.tokenMetadataById);
    }

    @call({ payableFunction: true})
    nft_mint({ receiver_id }){
        internalMint({ contract: this, receiverId: receiver_id});
    }

    @view({})
    nft_token({ token_id }) {
        return internalNftToken({ contract: this, tokenId: token_id });
    }

    @call({})
    nft_transfer({ receiver_id, token_id, approval_id, memo }) {
        internalNftTransfer({ contract: this, receiverId: receiver_id, tokenId: token_id, approvalId: approval_id, memo: memo });
    }

    @call({})
    nft_transfer_call({ receiver_id, token_id, approval_id, memo, msg }) {
        internalNftTransferCall({ contract: this, receiverId: receiver_id, tokenId: token_id, approvalId: approval_id, memo: memo, msg: msg });
    }

    @call({})
    nft_resolve_transfer({ authorized_id, owner_id, receiver_id, token_id, approved_account_ids, memo }) {
        internalResolveTransfer({ contract: this, authorizedId: authorized_id, ownerId: owner_id, receiverId: receiver_id, tokenId: token_id, approvedAccountIds: approved_account_ids, memo: memo });
    }

   
    @view({})
    nft_is_approved({ token_id, approved_account_id, approval_id }) {
        return internalNftIsApproved({ contract: this, tokenId: token_id, approvedAccountId: approved_account_id, approvalId: approval_id });
    }

    @call({})
    nft_approve({ token_id, account_id, msg }) {
        internalNftApprove({ contract: this, tokenId: token_id, accountId: account_id, msg: msg });
    }


    @view({})
    nft_payout({ token_id, balance, max_len_payout }) {
        return internalNftPayout({ contract: this, tokenId: token_id, balance: balance, maxLenPayout: max_len_payout });
    }

    @call({})
    nft_transfer_payout({ receiver_id, token_id, approval_id, memo, balance, max_len_payout }) {
        internalNftTransferPayout({ contract: this, receiverId: receiver_id, tokenId: token_id, approvalId: approval_id, memo: memo, balance: balance, maxLenPayout: max_len_payout });
    }

    @call({})
    nft_revoke({ token_id, account_id }) {
        internalNftRevoke({ contract: this, tokenId: token_id, accountId: account_id });
    }

    @call({})
    nft_revoke_all({ token_id }) {
        internalNftRevokeAll({ contract: this, tokenId: token_id });
    }

    @view({})
    nft_total_supply() {
        return internalTotalSupply({ contract: this });
    }

    @view({})
    nft_tokens({ from_index, limit }) {
        return internalNftTokens({ contract: this, fromIndex: from_index, limit: limit });
    }

    @view({})
    nft_tokens_for_owner({ account_id, from_index, limit }) {
        return internalTokensForOwner({ contract: this, accountId: account_id, fromIndex: from_index, limit: limit });
    }

    @view({})
    nft_supply_for_owner({ account_id }) {
        return internalSupplyForOwner({ contract: this, accountId: account_id });
    }

    @view({})
    nft_metadata() {
        return internalNftMetadata({ contract: this });
    }
}