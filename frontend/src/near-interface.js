/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

export class CindakuContract {
  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;    
  }

  // async getGreeting() {
  //   return await this.wallet.viewMethod({ contractId: this.contractId, method: 'get_greeting' });
  // }

  async mint(receiverId) {
    return await this.wallet.callMethod({ contractId: this.contractId, method: 'nft_mint', args: { receiver_id: receiverId }, deposit: '9370000000000000000000' });
  }
}