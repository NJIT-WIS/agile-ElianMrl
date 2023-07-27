## **Technical Feature: GitHub Actions for Automated Testing, Deployment, and Verification**

## 📌 **Overview**

GitHub Actions allow us to automate, customize, and execute software development workflows within the GitHub repository. With the combination of Playwright tests, we can ensure a seamless CI/CD pipeline that not only automates testing but also deployment and post-deployment verifications, ensuring robust and consistent software releases.

## 🎯 **Objective**

Leverage GitHub Actions to:

1. Ensure Playwright tests pass before merging pull requests.
2. Deploy to GitHub Pages or Vercel when tests are successful, and the master branch is updated.
3. Validate the live site's functionality post-deployment using Playwright tests.

### 1️⃣ **Automated Testing before Merging**

📋 **Task:**
   - Create a technical user story emphasizing the necessity for Playwright tests to pass before merging pull requests.

📋 **Task:**
   - Define acceptance criteria that delineate how to verify the successful completion of the user story.

📋 **Task:**
   - Implement the GitHub Action to automate tests pre-merge and validate its behavior.

### 2️⃣ **Automated Deployment with Testing**

📋 **Task:**
   - Draft a technical user story detailing automated deployments post successful deployment to either GitHub Pages or Vercel.  
📋 **Task:**
   - Specify acceptance criteria to ensure both successful test execution and deployment to GitHub Pages or Vercel.

📋 **Task:**
   - Configure the GitHub Action for deployment post successful testing.

📚 **Resources:**

- 🎥 [Agile and Devops](https://www.youtube.com/watch?v=kBKuXEBP7ho)
- 🎥 [CI/CD & Test Driven Development Explained](https://www.youtube.com/watch?v=llaUBH5oayw)
- 🎥 [Setting Up GitHub Actions Basics](https://www.youtube.com/watch?v=mFFXuXjVgkU&t=67s)
- 🎥 [Learn GitHub Actions: 90 MInutes to DevOps](https://www.youtube.com/watch?v=TLB5MY9BBa4)
- 📖 [GitHub Actions Configuration](https://playwright.dev/docs/test-configuration)
- 📖 [7 Things to Know about GitHub Actions](https://yonatankra.com/7-github-actions-tricks-i-wish-i-knew-before-i-started/)
