// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Configurar permissões públicas para a API de posts
    try {
      const publicRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });

      if (publicRole) {
        // Buscar e atualizar permissões para posts
        const postFindPermission = await strapi.query('plugin::users-permissions.permission').findOne({
          where: { role: publicRole.id, action: 'api::post.post.find' }
        });
        if (postFindPermission) {
          await strapi.query('plugin::users-permissions.permission').update({
            where: { id: postFindPermission.id },
            data: { enabled: true },
          });
        }

        const postFindOnePermission = await strapi.query('plugin::users-permissions.permission').findOne({
          where: { role: publicRole.id, action: 'api::post.post.findOne' }
        });
        if (postFindOnePermission) {
          await strapi.query('plugin::users-permissions.permission').update({
            where: { id: postFindOnePermission.id },
            data: { enabled: true },
          });
        }

        // Buscar e atualizar permissões para categorias
        const categoryFindPermission = await strapi.query('plugin::users-permissions.permission').findOne({
          where: { role: publicRole.id, action: 'api::category.category.find' }
        });
        if (categoryFindPermission) {
          await strapi.query('plugin::users-permissions.permission').update({
            where: { id: categoryFindPermission.id },
            data: { enabled: true },
          });
        }

        const categoryFindOnePermission = await strapi.query('plugin::users-permissions.permission').findOne({
          where: { role: publicRole.id, action: 'api::category.category.findOne' }
        });
        if (categoryFindOnePermission) {
          await strapi.query('plugin::users-permissions.permission').update({
            where: { id: categoryFindOnePermission.id },
            data: { enabled: true },
          });
        }

        // Buscar e atualizar permissões para tags
        const tagFindPermission = await strapi.query('plugin::users-permissions.permission').findOne({
          where: { role: publicRole.id, action: 'api::tag.tag.find' }
        });
        if (tagFindPermission) {
          await strapi.query('plugin::users-permissions.permission').update({
            where: { id: tagFindPermission.id },
            data: { enabled: true },
          });
        }

        const tagFindOnePermission = await strapi.query('plugin::users-permissions.permission').findOne({
          where: { role: publicRole.id, action: 'api::tag.tag.findOne' }
        });
        if (tagFindOnePermission) {
          await strapi.query('plugin::users-permissions.permission').update({
            where: { id: tagFindOnePermission.id },
            data: { enabled: true },
          });
        }

        console.log('✅ Permissões públicas configuradas com sucesso!');
      }
    } catch (error) {
      console.error('❌ Erro ao configurar permissões:', error);
    }
  },
};
