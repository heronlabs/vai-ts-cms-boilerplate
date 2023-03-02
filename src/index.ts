export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  async register(/*{strapi}*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({strapi}) {
    const ptBrCode = 'pt-BR';

    const ptBrLocale = await strapi
      .service('plugin::i18n.locales')
      .findByCode(ptBrCode);

    if (!ptBrLocale) {
      await strapi.query('plugin::i18n.locale').createMany({
        data: [
          {
            name: 'Portuguese (Brazil) (pt-BR)',
            code: ptBrCode,
          },
        ],
      });
    }

    await strapi
      .store({
        type: 'plugin',
        name: 'i18n',
      })
      .set({
        key: 'default_locale',
        value: ptBrCode,
      });
  },
};
