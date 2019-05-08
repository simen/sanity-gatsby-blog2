export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd32c745f43bf1968eb3fc3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-rg1tqdgf',
                  apiId: '3700e467-07b5-450e-9816-6386045a01ff'
                },
                {
                  buildHookId: '5cd32c753068b224f726fd03',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-zd6tyrtg',
                  apiId: '4b53b376-6d5b-4721-a25d-8d12cbcfb9bd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-gatsby-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-zd6tyrtg.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
