import { Client } from "@notionhq/client";

export default defineEventHandler((event) => {
    const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

    const response = notion.databases.query({
        database_id: process.env.NOTION_POST_DATABASE,
        filter: {
            and: [
                {
                    property: "Visible",
                    checkbox: {
                        equals: true,
                    },
                },
            ],
        },
        sorts: [
            {
                property: "Date",
                direction: "ascending",
            },
        ],
    });

    return response;
});
