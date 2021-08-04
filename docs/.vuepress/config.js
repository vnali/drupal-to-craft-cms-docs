module.exports = {
 plugins: ['@vuepress/medium-zoom'],
 base: process.env.NODE_ENV === 'production'? '/drupal-to-craft-cms-docs/': '/',
 title: 'Drupal to Craft CMS plugin documentation',
 head: [
  ['link', { rel: 'icon', type: "image/png", sizes: "32x32", href: '/assets/img/icon.png' }]
 ],
 themeConfig: {
	repo: 'https://github.com/vnali/drupal-to-craft-cms-docs',
	repoLabel: 'Github',
	search: true,
	searchPlaceholder: 'Search',
	logo: '/assets/img/logo.svg',
	sidebar: [
        ['/', 'Documentation']
    ],
	nav: [
	  { text: 'Home', link: '/', target:'_self' }
    ],
 }
}