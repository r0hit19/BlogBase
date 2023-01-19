const path=require('path')
exports.createPages=async({graphql,actions})=>{
    const {data}=await graphql(
        `
        query mydataquery {
            allAirtable {
              nodes {
                data {
                  Description
                  SID
                  Title
                  image
                }
              }
            }
          }
        `
    )

    data.allAirtable.nodes.forEach(node => {
        actions.createPage({
            path: '/'+node.data.Title,
            component:path.resolve('./src/templates/BlogDetails-template.js'),
            context:{Sid:node.data.SID}
        })
    });
}