"use server";

export async function sendToMondayCRM(data) {
    try {
        const apiToken = process.env.MONDAY_API_KEY;

        // Board and Group IDs
        const boardId = "5026985125";
        const groupId = "topics";

        const serviceMap = {
            web: "Web Development",
            app: "App Development",
            software: "Software Development"
        };

        // Monday CRM requires specific object structures for different column types
        const columnValues = {
            // Email column
            email_mm1491ef: {
                email: data.emailAddress,
                text: data.emailAddress,
            },
            // Phone column
            phone_mm141pxr: {
                phone: data.phoneNumber || "",
            },
            // Text column (Company Name / SPOC)
            text_mm14r7a8: data.companyName || "",

            // Dropdown column: Service
            dropdown_mm14wkvb: {
                labels: [serviceMap[data.serviceInterestedIn] || "Web Development"]
            },
            
            // Long Text column: Message
            long_text_mm14f104: {
                text: data.projectDetails || ""
            },
            
            // Dropdown column: Budget Range
            dropdown_mm1492bh: {
                labels: [data.projectBudget || ""]
            },
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
            itemName: data.fullName || "New Enquiry",
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

        const responseText = await response.text();
        let result;
        try {
            result = JSON.parse(responseText);
        } catch (e) {
            console.error("Invalid response from Monday API:", responseText);
            return false;
        }

        // Logging for debugging (visible in server logs)
        console.log("Monday CRM Push - Data:", JSON.stringify(columnValues, null, 2));
        console.log("Monday CRM Push - Response:", JSON.stringify(result, null, 2));

        if (result.errors) {
            console.error("Monday CRM API Errors:", JSON.stringify(result.errors, null, 2));
            return false;
        }

        return result.data && result.data.create_item ? true : false;

    } catch (error) {
        console.error("Monday API Catch Error:", error);
        return false;
    }
}