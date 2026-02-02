# The Resume Test - Project Documentation

## About This Site

**The Resume Test** is a human-led resume coaching service that helps job seekers improve their resumes and interview skills. Unlike AI-based resume tools, this service emphasizes personalized, 1-on-1 human attention from experienced recruiters.

### Mission Statement
To empower job seekers by providing a "concierge" career service that replaces algorithmic guessing with human strategy. We exist to close the gap between a candidate's potential and a recruiter's perception.

### The Problem We Solve
1. **The "Black Box"** - Candidates apply to hundreds of jobs and hear nothing back ("Ghosting"), with no feedback on why they were rejected
2. **The AI Trap** - Candidates using ChatGPT to write resumes, resulting in generic, "fluffy" documents that recruiters ignore due to "AI Fatigue"
3. **The Narrative Gap** - Qualified professionals fail to translate soft skills and complex histories into the hard metrics hiring managers demand

### Business Model
- Human experts review resumes (not algorithms)
- Three pricing tiers: $69 / $129 / $229
- Services include video diagnostics, live workshops, and mock interviews
- Concierge, white-glove approach where clients feel supported, not processed

### Value Proposition
- **100% Human Review** - No bots, no automated scores, real recruiters reading real words
- Cuts average job search time (5 months) in half
- Explains the "why" behind resume changes
- Handles complex situations AI can't (employment gaps, career pivots, soft skills)
- "Anti-AI" positioning: "An Algorithm Can't Read Between the Lines"

### Target Audiences by Tier
- **Tier 1 ($69)**: The "Ghosted" Candidate - introverts or DIYers who need a professional sanity check
- **Tier 2 ($129)**: The Excellence Seeker - career pivoters, older workers, or those needing narrative strategy
- **Tier 3 ($229)**: The "All-In" Candidate - high-anxiety applicants, new grads, or non-native speakers

## Site Structure

### Pages
- `/` - **Landing Page** (LandingPage.js) - Main marketing page with hero, reviews carousel, 5-step process, pricing cards
- `/services` - **Services Page** (ServicesPage.js) - Detailed breakdown of all three service packages with decision helper
- `/about` - **About Page** (AboutPage.js) - Placeholder (Hello World)
- `/faq` - **FAQ Page** (FAQPage.js) - Placeholder (Hello World)

### Components
- `Header.js` - Navigation with logo, Services/About/FAQ links, and CTA button
- `Footer.js` - Site footer
- `HowItWorksInteractive.js` - Legacy component (no longer used)

### Tech Stack
- React (Create React App)
- React Router for navigation
- Bootstrap 5 for styling
- Lucide React for icons
- Google Fonts: Poppins (all text, weights 400-900 with italics)

### Design System
- **Colors:**
  - Primary: #0966ff (vivid blue)
  - Accent: #c1ff72 (lime green)
  - Dark: #222733 (dark blue)
  - White: #ffffff
- **Font:** Poppins (Google Fonts), weights 400 to 900, with italic
- **Style:** Bold, modern, energetic, matches social media posts
- **No emojis**, uses Lucide icons instead
- **No hyphens or dashes in user-facing text**, use commas instead (e.g., "$69, No Scheduling Required" not "$69 - No Scheduling Required")
- **Border radius:** 50px for buttons (pill shaped), 16 to 20px for cards
- **Headlines:** Bold italic (fontWeight: 900, fontStyle: italic)
- **Tags/badges:** Pill shaped with uppercase text

### Service Tiers
1. **"Redline" Audit** ($69) - Async email review, 72hr turnaround
   - Video Diagnostic: Screen recording of recruiter reviewing resume live
   - Resume Scorecard: Clear "Grade" on formatting, narrative, and metrics
   - Line-by-Line Markups: Specific comments on what to cut/keep

2. **"Deep Dive" Workshop** ($129) - Live Zoom session
   - Real-Time Co-Writing: New resume written with client on the call
   - Narrative Strategy: Addressing gaps, title changes, transferrable skills
   - Session Recording: Client keeps the video for future reference
   - Includes everything in the Redline Audit

3. **"Total Prep" Bundle** ($229) - Resume workshop + mock interview
   - Full Deep Dive Workshop included
   - Mock Interview: Tailored to their specific industry
   - Performance Critique: Feedback on body language, pacing, answers
   - Detailed Post Analysis Document: Written feedback guide

### Team Requirements
All reviewers must have:
- Verified experience in Talent Acquisition/Recruiting
- Minimum of a Bachelor's Degree
- Completion of "The Resume Test" efficiency training program

### Contact Information
- **Email:** team@theresumetest.com (this is the only email address for the business)
- **Location:** Denver, Colorado

### Key Messaging
- Core Hook: "An Algorithm Can't Read Between the Lines"
- Anti-AI positioning: "AI writes for the average; we write for the exception"
- The "Diagnostic Method": We identify specific "red flags" causing rejection

### Service Details

**Asynchronous Services (Video Delivered)**
The Resume Audit and Resume Rewrite are asynchronous, meaning clients submit and we deliver within 72 business hours. The advantage is flexibility - busy professionals don't need to squeeze into time slots.

**Resume Audit ($69):**
- Client submits resume
- We analyze and identify key issues (ATS keywords, formatting, dates, etc.)
- Record a video reviewing the resume as a recruiter would
- Provide detailed feedback on what's working and what needs fixing
- Client makes the changes themselves with our guidance

**Resume Rewrite ($109):**
- Client submits resume OR just background info (no resume required)
- We fully rewrite or create the resume from scratch
- Record a video comparing old vs new, explaining all changes
- Premium async option with higher ROI

**Synchronous Services (Live Call)**
The Workshop and Bundle are live Zoom sessions at scheduled times.

**Resume Workshop ($129):**
- Live 45-minute Zoom meeting
- Review resume and background together
- Make edits in real-time with the client
- Can create resume from scratch if needed
- Client can ask questions throughout
- Session recording provided

**Workshop + Interview Practice ($229):**
- Most comprehensive package
- Starts with a mock interview tailored to their industry/role
- Post-interview breakdown (body language, appearance, professionalism)
- Then full resume workshop with live rewrite
- Helps reduce interview anxiety and identify issues
