# Introduction 
This repository contains source code for B2C app. 
# Getting Started
App is created using Ionic framework.

There are also Dockerfiles available for running the webapp in a containerized environment. If you prefer using Docker, ensure it is installed on your system.

Webapp is running on port 8100

CURRENT LIVE VERSION IS AVAILABLE AT http://20.76.171.185:8100/showroom

### Prerequisites

- [NodeJS/npm](https://nodejs.org/en/download) installed
- [Docker](https://www.docker.com/get-started) (optional, for containerized environment)

Clone the repository to your local machine:

```bash
git clone https://powerup-dev@dev.azure.com/powerup-dev/PowerUp/_git/PowerUp.Frontend.B2C
```

Install the ionic:

```bash
npm install -g @ionic/cli
```


Install the dependencies:

```bash
npm install
```


### Build and Test

After completing prerequisites you can run B2C webapp locally with following 
```bash
npm run stat
```
The B2C Webapp should now be running and accessible at address visible in the terminal.


You can also run services inside of Docker.
First navigate to desired folder.
For API run:
```bash
docker build -t b2c-ionic .
docker run -8100:8100 b2-ionic
```


Services will be available at http://localhost:{port_number}

# Development Workflow

Follow these guidelines for pushing code and managing branches in the development workflow:

1. **Development Branch:**
   - Developers should push code only to the 'dev' branch.
   - The 'dev' branch is designated for ongoing development and will be deployed to the development environment.

2. **Pull Requests to Test Branch:**
   - When a bugfix or feature is completed, create a pull request from 'dev' to the 'test' branch.
   - The 'test' branch serves as a staging area where QA (Quality Assurance) will ensure the proper functioning of bugfixes and features.

3. **QA Testing:**
   - QA will thoroughly test the changes in the 'test' branch to ensure they meet the required standards.
   - If issues are identified, developers should address them in the 'dev' branch and create a new pull request to 'test' once resolved.

4. **Pull Requests to Main Branch:**
   - After QA approval, create a pull request from 'test' to the 'main' branch.
   - The 'main' branch represents the stable version of the application.

5. **Final Approval and Deployment:**
   - If the pull request to 'main' is approved, the merge into the 'main' branch will not automatically deploy to production.
   - Instead, the Team Lead will need to manually run the deployment pipeline to promote the changes to the production environment.

By following this workflow, we ensure a controlled and systematic approach to development, testing, and deployment, promoting stability and reliability in our software releases.
