/**
 * post controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  // Sobrescrever o método find para retornar a estrutura esperada pelo frontend
  async find(ctx) {
    // Chamar o método padrão do Strapi
    const { data, meta } = await super.find(ctx);
    
    // Retornar com a estrutura esperada pelo frontend (dados ao invés de data)
    return {
      dados: data,
      meta
    };
  },

  // Sobrescrever o método findOne para manter consistência
  async findOne(ctx) {
    const { data, meta } = await super.findOne(ctx);
    
    return {
      dados: data ? [data] : [], // Retornar como array para manter consistência
      meta
    };
  }
}));
