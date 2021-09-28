export const menu = [
    {
        title: 'Dashboard',
        link: '/admin/dashboard'
    },
    {
        title: 'Cocktails',
        children: [
            {
                title: 'Liste',
                link: '/admin/cocktails/index'
            },
            {
                title: 'Editer',
                link: '/admin/cocktails/edit'
            }
        ]
    },
    {
        title: 'Public',
        link: '/home'
    }
]