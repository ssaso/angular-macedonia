
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ssaso.github.io/angular-macedonia/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://ssaso.github.io/angular-macedonia"
  },
  {
    "renderMode": 2,
    "route": "/https://ssaso.github.io/angular-macedonia/teams"
  },
  {
    "renderMode": 2,
    "route": "/https://ssaso.github.io/angular-macedonia/players"
  }
],
  assets: {
    'index.csr.html': {size: 14431, hash: '66897307a1c297c596c3cfc32372950c530407d0033605146f863bc0855e5c28', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8005, hash: '7de1c35c495ff39ce04e468038816d0d24e93dc86b87276f9b20d7c594a269cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'teams/index.html': {size: 40447, hash: '0d6df2f21fbfebc8959bc851240826c7f24f9952a91223fbc6f6126c57be24cb', text: () => import('./assets-chunks/teams_index_html.mjs').then(m => m.default)},
    'index.html': {size: 40447, hash: '0d6df2f21fbfebc8959bc851240826c7f24f9952a91223fbc6f6126c57be24cb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'players/index.html': {size: 40447, hash: '0d6df2f21fbfebc8959bc851240826c7f24f9952a91223fbc6f6126c57be24cb', text: () => import('./assets-chunks/players_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
