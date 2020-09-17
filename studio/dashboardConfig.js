export default {
  widgets: [
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
                  buildHookId: '5f63e9a204d1647d480b7caf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6vwd5ha9',
                  apiId: '84db6183-1e35-4105-83c8-f838f15ed38e'
                },
                {
                  buildHookId: '5f63e9a285b3737e2e91003b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zcknjxzw',
                  apiId: '7d406f34-f36a-45d1-a3ea-a8ed08e978af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lindsive/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zcknjxzw.netlify.app', category: 'apps'}
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
