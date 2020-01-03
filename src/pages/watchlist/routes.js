export default [
    {
        name: 'watchlist',
        path: '/watchlist',        
        component: () => import('./Watchlist'),
        meta: {
            showNavbar : true,
            title: 'Watchilist',
            icon: 'playlist_play',
            label: 'Quero Assistir'            

        }
    }
]