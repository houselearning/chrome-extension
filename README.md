# HouseLearning — Chrome Extension

HouseLearning is a Chrome extension that brings curated home-improvement learning, quick tips and contextual help directly into your browser — ideal for research, shopping and content discovery while browsing.

## Quick overview
- Purpose: Surface relevant HouseLearning content and micro-lessons while users browse home improvement sites, product pages, or DIY blogs.
- Goal: Reduce friction between discovering how-to content and acting on it (buying supplies, saving tips, following steps).
- Experience: Lightweight popup, contextual side panel, and content-script overlays on supported sites.

## Key features
- Toolbar popup with quick-search and topic shortcuts (plumbing, electrical, painting, DIY).
- Contextual suggestions based on URL and page content (e.g., product pages -> relevant tips & checklists).
- Save favorites or "watch" projects to extension storage for follow-up.
- Offline-ready short lessons cached for quick reference.
- Notifications for saved project reminders and new lessons.
- Toggle overlays and side panels per-site via options.

## Installation (users)
- From Chrome Web Store: search "HouseLearning", click "Add to Chrome" and follow prompts.
- Developer/local install:
  1. Clone or download this repository.
  2. Open Chrome → chrome://extensions.
  3. Enable "Developer mode".
  4. Click "Load unpacked" and select the extension folder (build/ or the root when running unbundled).

## Permissions
- "activeTab" / "tabs" — inspect the current page to provide contextual suggestions.
- "storage" — save favorites, settings and cached lessons (chrome.storage.local).
- "notifications" — remind users about saved projects or updates.
- Optional host permissions (e.g., "https://*.example-site.com/*") — deeper page analysis only for supported sites; requested via optional permissions to follow least-privilege principles.

## Usage
- Click the toolbar icon to open the popup. Search topics, open saved projects, or jump to quick lessons.
- When on a supported product or blog page, view contextual tips via the side panel or unobtrusive overlay.
- Save lessons to review offline; set reminders for scheduled work via the popup.

## Developer setup
- Prerequisites: Node.js, npm (if build tooling is used).
- Typical workflow:
  - npm install
  - npm run dev (live reload for UI during development)
  - npm run build (produces a distribution folder ready for packaging)
- Recommended: Use the extension's manifest v3 service worker and follow Chrome extension best practices for performance and battery usage.

## Build & Publish
1. Build the extension into a distribution folder.
2. Ensure manifest.json, icons, popup.html, service worker, content scripts and assets are present.
3. Zip the distribution folder (root-level files like manifest.json).
4. Submit via the Chrome Web Store Developer Dashboard. Provide a clear privacy policy, screenshots, and a descriptive listing.
5. Address any review feedback and publish.

## Privacy & data
- Default: keep user data local (chrome.storage.local).
- If remote sync is offered, require explicit opt-in, document what is synced, and provide a clear privacy policy.
- Do not collect PII without transparent consent. Follow Chrome Web Store data and privacy requirements.

## Contributing
- Open issues for feature requests or bugs.
- Create focused PRs with clear descriptions and tests where applicable.
- Include UI mockups when proposing new UX flows.

## FAQ
Q: Does the extension modify pages?
A: Only on supported sites and when contextual suggestions are enabled; overlays are non-destructive and can be toggled off.

Q: Is there offline functionality?
A: Key micro-lessons are cached for quick offline reference.

## Credits & license
[Apache Licence 2.0](https://github.com/houselearning/chrome-extension/blob/main/LICENSE)


