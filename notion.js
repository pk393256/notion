const {Client} = require('@notionhq/client')
// const { getDatabase } = require('@notionhq/client/build/src/api-endpoints')

const notion = new Client({
    auth:process.env.NOTION_API_KEY
})



async function getDatabase(){
    const data = await notion.databases.retrieve({
        database_id:process.env.NOTION_DATABASE_ID
    })
    console.log(data)

}

getDatabase()