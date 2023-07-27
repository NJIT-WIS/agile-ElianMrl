# Unit Overview

For a software product to be valuable, it must both function flawlessly and meet the genuine needs of its users. If not done correctly, a faulty software can lead to various challenges, including financial losses, public embarrassment, potential lawsuits, security breaches, and more. Historically, many software projects fail to reach successful completion, both technically and financially.

Drawing from my three-decade-long experience in this domain, one key insight I can share is the importance of minimalism. In designing software, one should strive to determine the most streamlined solution that addresses the specific business need in question. While the concept of minimalism seems simple, executing it can be challenging. The objective of this unit is to offer you insights and knowledge from my experience, helping you grasp various technologies and ideas. While these concepts are often explored in isolation, we'll study them from a comprehensive, practical perspective. This unit will guide you through the creation of a basic product using Next.JS, Playwright, and GitHub actions.

Remember, when devising a new product, it's crucial to focus on a "pull" approach in product development. This involves prioritizing what users truly want rather than pushing a product or feature upon them. While introducing novel products sometimes requires this "push" strategy, it's inherently riskier. Every decision made without direct user feedback can lead to wasted resources, misalignment with user needs, or even a decline in customer base. To mitigate such risks, product developers should heavily rely on direct user feedback and meticulous product research.  

## Assignment Instructions

In this assignment, your customer is requesting a web page that that says "Hellow Professor" in a heading tag on the homepage and that the web page title it set to "Hello Professor". 

**You will need to do the following:**

1.  Write a user story for the "Hello Professor" web page title.
2.  Write acceptance criteria for the "Hello Professor" web page title that are automated e2e Playwright tests.
3.  Write a user story for the "Hello Professor" using the h1 tag 
4.  Write acceptance criteria for the "Hello Professor" web page heading tag that are automated e2e Playwright tests.
5.  Write a technical user story for a GitHub action to run playwright automated tests before allowing the code to be merged to the master branch
6.  Write acceptance tests that include manual testing of the GitHub action for testing the code before a merge is allowed to the master branch.
7.  Write a technical user story for a GitHub action to deploy the site to GitHub pages after a merge.
8.  Write acceptance criteria for manually testing the deployment of the site.

Note: You might want to challeenge yourself to figure out a method for testing step #8 by automaticly running playwright tests, after deploymnet but having a specific test to go to the site's deployed URL.



Your task is to implement this with the NextJS project provided, write Playwright tests to check that both requirements are met, and 

**Topics**
- Agile Documentation
- Acceptance Testing Documentation
- AAA Testing Pattern
- Devops (GitHub Workflows)
- Playwright end-to-end (e2e) testing

## Workflow 


