# HobbyPace — landing page

Three files:
- `index.html` — the landing page
- `thanks.html` — the thank-you page
- `google-apps-script.gs` — a small free script that sends signups to a Google Sheet

No hosting, no server of your own, no cost. Keep `index.html` and
`thanks.html` together in the same folder — the site works whether that
folder sits on your desktop, in Google Drive, or on a live URL later.

## Set up the Google Sheet (~5 minutes, free)

1. Create a new Google Sheet. In row 1, add headers: `Timestamp` in A1,
   `Email` in B1.
2. In the Sheet, go to **Extensions → Apps Script**.
3. Delete whatever placeholder code is there, and paste in the contents of
   `google-apps-script.gs` from this project.
4. Click **Deploy → New deployment**.
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**. Google will ask you to authorize it — this warning
   shows up for any script you haven't published publicly; it's still your
   own script running on your own sheet.
6. Copy the **Web app URL** it gives you — it ends in `/exec`.
7. Open `index.html`, find this line:
   ```html
   <form class="capture" id="signup-form" action="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec" method="POST" target="hidden_iframe">
   ```
   and replace the URL with your real one from step 6.
8. Save.

## Try it

Open `index.html` in your browser and submit the form with a real email.
You should land on the thank-you page after under a second. Check your
Google Sheet — a new row with the timestamp and email should already be
there.

## How it actually works

The form submits into a hidden, invisible iframe on the page instead of
navigating the browser away — that's what lets your own thank-you page stay
in control of what the visitor sees, instead of showing Google's own
response. Right after submitting, a small script sends the visitor to
`thanks.html`. Since we can't peek into that hidden iframe's response, this
is a "assume it worked" pattern rather than a guaranteed confirmation — for
a class landing page that's a reasonable tradeoff, but worth knowing if
you build on this later.

## Submitting the assignment

- If it just needs a **link**: upload `index.html` and `thanks.html` to
  Google Drive (as a folder, or zipped) and share that link.
- If you want a **live URL** instead: this also works fine hosted on GitHub
  Pages or anywhere else — nothing here requires local files specifically.
