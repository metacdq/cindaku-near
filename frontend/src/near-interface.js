/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

export class CindakuContract {
  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;    
  }

  async nftForOwner(accountId, skip=0, limit=10) {
    return await this.wallet.viewMethod({ contractId: this.contractId, 
      method: 'nft_tokens_for_owner' , args: {
      account_id: accountId,
      skip: skip,
      limit: limit
    }});
  }

  async mint(receiverId) {
    return await this.wallet.callMethod({ contractId: this.contractId, 
      method: 'nft_mint', 
      args: { receiver_id: receiverId }, 
      deposit: '12000000000000000000000' });
  }
}