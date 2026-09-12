/**
 * Paste this into the Apps Script editor attached to your Google Sheet
 * (Extensions → Apps Script). It receives the landing page's form
 * submissions and appends each one as a new row.
 *
 * Setup:
 * 1. Create a Google Sheet. Add a header row: "Timestamp" in A1, "Email" in B1.
 * 2. Extensions → Apps Script. Delete any placeholder code, paste this in.
 * 3. Click Deploy → New deployment.
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Click Deploy, then authorize it (it's your own script, on your own
 *    sheet — the scary-looking warning is Google's standard one for any
 *    script you haven't published publicly).
 * 5. Copy the Web app URL it gives you (ends in /exec).
 * 6. Paste that URL into index.html's form "action" attribute, replacing
 *    https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var email = e.parameter.email;

  if (email) {
    sheet.appendRow([new Date(), email]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
