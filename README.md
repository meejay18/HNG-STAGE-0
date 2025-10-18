Profile + Cat Fact API
Overview
Simple REST API: GET /me returns profile info and a dynamic cat fact.

Requirements
- Node.js >= 16
- npm

Setup
1. Clone repo
2. Copy `.env.example` to `.env` and fill values
3. Install dependencies:

npm run dev 

Endpoint
GET `/me`  
Returns JSON with fields: status, user { email, name, stack }, timestamp, fact

Example:
{
"status":"success",
"user":{"email":"you@example.com
","name":"Your Name","stack":"Node.js/Express"},
"timestamp":"2025-10-15T12:34:56.789Z",
"fact":"Cat fact here..."
}
check env.example for env layout


Deployment was on railway
Notes
- The external Cat Facts API is used: https://catfact.ninja/fact
- In case of external API failure an error is logged or a  fallback fact is returned.



