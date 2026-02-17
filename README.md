# AI-Behavioural-Interviewer

## Abstract

- This is an AI Behavioural Interviewer Bot

- The interface: consists of the users camera on the left, transcript on the right. timer at the bottom, start interview button, end interview button, and a download report button.

# Workflow

1. AI initiates the interview once the user selects start button
2. Use websockets (or something concurrent) to send user transcript to the AI (have AI continue flow of conversation when it sees that the user stops talking (also make it smart enough to acknowledge when it cuts a user off and allows them to continue))
3. Interview ends
4. User video + transcript is sent to backend for processing
5. Show loading page (update the user with pdf of analysis)

- pdf follows this structure
  1. Question
  2. Summary
  3. Criteria
  4. Score of 10 + analysis

# Views

1. Main Dashboard Page for interviews, consists of cameras, transcripts, settings button on the top right (for changing/updating resume (ATS parsed) and email)
2. Login Page takes email, password and user resume pdf (ATS parses the resume)
3. Settings popup (on main dashboard page) - Opens setting side bar popup on the right allowing the user to change/update resume and email

# Tech Stack
