export const setDefaultLocale = async ({strapi}) => {
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
};
