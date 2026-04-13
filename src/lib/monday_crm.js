"use server";
export async function sendToMondayCRM(data) {
    try {
        const apiToken = process.env.MONDAY_API_KEY;

        const boardId = 5026985125;
        const groupId = "topics";
        const serviceMap = {
            web: "Web Development",
            app: "App Development",
            software: "Software Development"
        };

        const budgetMap = {
            "10k-25k": "AED 10000 - AED 25000",
            "25k-50k": "AED 25000 - AED 50000",
            "50k+": "AED 50000+"
        };

        const columnValues = {
            email_mm1491ef: {
                email: data.emailAddress,
                text: data.emailAddress,
            },
            phone_mm141pxr: {
                phone: data.phoneNumber,
                countryShortName: "AE" // Set a default or keep blank
            },
            text_mm14r7a8: data.companyName,

            // dropdown_mm14w9p6: data.serviceInterestedIn,
            dropdown_mm14wkvb: { labels: [serviceMap[data.serviceInterestedIn]] },
            long_text_mm14f104: data.projectDetails,
            // dropdown_mm1492bh: budgetMap[data.projectBudget] ,
            dropdown_mm1492bh: { labels: [data.projectBudget] },
        };

        const query = `
          mutation CreateEnquiryItem($boardId: ID!, $groupId: String!, $itemName: String!, $columnValues: JSON!) {
            create_item(
              board_id: $boardId,
              group_id: $groupId,
              item_name: $itemName,
              column_values: $columnValues
            ) {
              id
            }
          }
        `;

        const variables = {
            boardId: boardId,
            groupId: groupId,
            itemName: data.fullName,
            columnValues: JSON.stringify(columnValues)
        };

        const response = await fetch("https://api.monday.com/v2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: apiToken,
            },
            body: JSON.stringify({ query, variables }),
        });

        let result;
        const responseText = await response.text();
        try {
            result = JSON.parse(responseText);
        } catch (e) {
            console.error("Invalid response from Monday API:", responseText);
            return false;
        }

        console.log("Full push data: ", JSON.stringify(data, null, 2));
        console.log("Column Values sent to Monday: ", JSON.stringify(columnValues, null, 2));
        console.log(" Custom Monday  Response: " + JSON.stringify(result, null, 2));
        if (result.errors) {
            console.error(result.errors);
            return false;
        }

        return true;

    } catch (error) {
        console.error("Monday API error:", error);
        return false;
    }
}