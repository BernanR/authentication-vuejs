export default [
    {
        name: 'series',
        path: '/series',        
        component: () => import('./Series'),
        meta: {
            showNavbar : true,
            title: 'séries',
            icon: 'playlist_play',
            label: 'Todas as séries' 
        }
    }
]