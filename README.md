# HobbyPace — landing page

**Live at:** https://aceluke24.github.io/HobbyPace/
**Business name:** HobbyPace · **Proposed domain:** hobbypace.com (checked, available)

Three files:
- `index.html` — the landing page
- `thanks.html` — the thank-you page
- `google-apps-script.gs` — the small free script that sends signups to a Google Sheet

No hosting cost — this is pushed to the `main` branch of this repo and served
free via GitHub Pages. Keep `index.html` and `thanks.html` together in the
same folder if you ever move them; the site works whether that folder sits
on your desktop, in Google Drive, or on a live URL.

## Signup form status

The form is already wired up and tested end-to-end: it posts to a live
Apps Script deployment, which appends each signup as a new row (timestamp +
email) in a connected Google Sheet. Nothing left to configure — submitting
the form on the live page really does collect the email.

## Try it

Open the live URL (or `index.html` locally) and submit the form with a real
email. You should land on the thank-you page in under a second, and a new
row should show up in the connected Google Sheet almost immediately.

## Pointing this at your own Google Sheet instead

If you want signups to land in a different sheet you own (e.g. before
handing this project off, or for your own copy):

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
7. Open `index.html`, find the `<form class="capture" id="signup-form" ...>`
   tag, and replace its `action` URL with your new one from step 6.
8. Save, commit, and push.

## How it actually works

The form submits into a hidden, invisible iframe on the page instead of
navigating the browser away — that's what lets your own thank-you page stay
in control of what the visitor sees, instead of showing Google's own
response. Right after submitting, a small script sends the visitor to
`thanks.html`. Since we can't peek into that hidden iframe's response, this
is an "assume it worked" pattern rather than a guaranteed confirmation — for
a class landing page that's a reasonable tradeoff, but worth knowing if
you build on this later.

## Submitting the assignment

- **Live URL** (recommended): share
  https://aceluke24.github.io/HobbyPace/ — it's already live, mobile-responsive,
  and the signup form actually works.
- **Or a file link**: upload `index.html` and `thanks.html` to Google Drive
  (as a folder, or zipped) and share that link instead.
