# Video Sharing Platform

This is a video sharing platform where viewers can watch and like other videos, similar to Instagram and TikTok. The platform is built using Next.js and Appwrite services, and is deployed on Vercel.

## Features

- User authentication using Appwrite's authentication service
- Video upload functionality using Appwrite's storage service
- Video feed displaying videos from the Appwrite database
- Like button for each video with like count updated in the database

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/githubnext/workspace-blank.git
cd workspace-blank
```

2. Install dependencies:

```bash
npm install
```

3. Set up Appwrite:

- Create a new project in Appwrite
- Configure authentication, database, and storage services
- Update the `src/utils/appwrite.js` file with your Appwrite project details

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying on Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy the project:

```bash
vercel
```

Follow the instructions in the terminal to complete the deployment process.
