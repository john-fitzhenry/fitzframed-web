import { google } from 'googleapis';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, type, budget, message, location } = body;

        // 1. Auth
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS_JSON || '{}'),
            // Fallback: If using a file path, we'd use keyFile: 'path/to/credentials.json'
            // But for env var deployment, parsing the JSON string is best.
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        // 2. Client
        const sheets = google.sheets({ version: 'v4', auth });

        // 3. Append
        const spreadsheetId = process.env.SPREADSHEET_ID;

        if (!spreadsheetId) {
            throw new Error("Missing SPREADSHEET_ID env var");
        }

        const timestamp = new Date().toISOString();

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:G', // Adjust if your sheet name differs
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [timestamp, name, email, type, budget, location, message]
                ],
            },
        });

        return Response.json({ success: true });

    } catch (error) {
        console.error("Sheet Error:", error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
