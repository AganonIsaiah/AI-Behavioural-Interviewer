# AI-Behavioural-Interviewer

## Abstract
- This is an AI Behavioural Interviewer Bot

- The interface: consists of the users camera on the left, transcript on the right. timer at the bottom, start interview button, end interview button, and a download report button.

## Services Used (AWS (EC2, S3), Vercel, Supabase, OpenAI API)
1. `Vercel` - https://vercel.com
2. `Supabase` - https://supabase.com
3. `AWS EC2` \& `AWS S3` - https://aws.amazon.com
4. `OpenAI API` - https://platform.openai.com/settings/organization/usage

## Architecture Layout
### Database Schema

1. `user` - 

2. `resume` -

## Workflow
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

## Views
1. Main Dashboard Page for interviews, consists of cameras, transcripts, settings button on the top right (for changing/updating resume (ATS parsed) and email)
2. Login Page takes email, password and user resume pdf (ATS parses the resume)
3. Settings popup (on main dashboard page) - Opens setting side bar popup on the right allowing the user to change/update resume and email

