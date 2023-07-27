---

## User Story Template

**Title**: *Brief title for the user story.*

**As a** [type of user],  
**I want** [an action or feature],  
**So that** [benefit/value].

**Context**: *(Optional)* Detailed context or background information.

### Acceptance Criteria:

1. **Given** [a certain context or initial state],  
   **When** [a specific action is taken],  
   **Then** [a set of observable outcomes should occur].
   
2. **Given** [another context or initial state],  
   **When** [a different action is taken],  
   **Then** [a different set of observable outcomes should occur].

---

## Sample User Story

**Title**: User Registration

**As a** new website visitor,  
**I want** to be able to register for an account,  
**So that** I can access member-only content and features.

**Context**: Visitors should be able to register by providing their name, email, and a password. An email confirmation should be sent after registration to verify their email address.

### Acceptance Criteria:

1. **Given** I am a new website visitor,  
   **When** I navigate to the registration page,  
   **Then** I should see fields to input my name, email, and password.
   
2. **Given** I have entered a valid email, name, and password,  
   **When** I click the 'Register' button,  
   **Then** I should receive a confirmation email to verify my email address.

3. **Given** I have entered an invalid email format,  
   **When** I attempt to submit the registration form,  
   **Then** I should see an error message indicating the email format is incorrect.

---

## Example for assignment

## **Technical Feature 1: NextJS Setup** 
**Objective**: Set up a NextJS website with an initial page.

1. **User Story**:  
   - As a developer, I want to initialize a NextJS website with a single page to kick off development.

2. **Acceptance Criteria**:  
   - The website is initialized using NextJS.
   - There's a single, accessible page when the website is run.

3. **Implementation**:  
   - Create a blank homepage using NextJS within this project repository.

---

## **Technical Feature 2: Playwright Integration** 
**Objective**: Integrate Playwright for automated testing.

1. **User Story**:  
   - As a developer, I want to integrate Playwright to automate testing throughout the project's lifecycle.

2. **Acceptance Criteria**:  
   - Playwright is successfully integrated into the project.
   - A test ensures the site returns a 200 status code when accessing the root ("/") route.

3. **Implementation**:  
   - Set up Playwright and construct the initial test using the Arrange, Act, Assert (AAA) testing pattern.

---

## **Technical Feature 3: GitHub Actions for Playwright Tests** 
**Objective**: Ensure Playwright tests pass before allowing pull request merges.

1. **User Story**:  
   - As a developer, I want all Playwright tests to pass before any pull request can be merged, ensuring code quality and stability.

2. **Acceptance Criteria**:  
   - A GitHub action is in place that triggers Playwright tests on every pull request.
   - Pull requests can't be merged if any Playwright test fails.

3. **Implementation**:  
   - Implement the specified GitHub action and validate its operation using the detailed acceptance criteria.

---

## **User Feature 1: Web Page Title "Hello Professor"** 
**Objective**: Implement a web page title named "Hello Professor."

1. **User Story**:  
   - As a user, I want to see a web page title as "Hello Professor" to confirm I'm on the correct page.

2. **Acceptance Criteria**:  
   - The web page displays the title "Hello Professor."

3. **Tests**:  
   - Write Playwright tests using the AAA testing pattern to validate the title.

4. **Implementation**:  
   - Incorporate the web page title using NextJS and ensure it passes the written test.

---

## **User Feature 2: H1 Tag "Hello Professor" Display** 
**Objective**: Showcase "Hello Professor" in big bold letters using the h1 tag.

1. **User Story**:  
   - As a user, I want to see "Hello Professor" displayed in big bold letters on the homepage, confirming the primary content.

2. **Acceptance Criteria**:  
   - "Hello Professor" is prominently shown using an h1 tag.
   - The content and the tag are verified.

3. **Design**:  
   - Design the homepage in Figma, ensuring "Hello Professor" is showcased as described.

4. **Tests**:  
   - Formulate Playwright tests using the AAA pattern to validate the h1 content.

5. **Implementation**:  
   - Embed the h1 content feature using NextJS and make sure it aligns with the test.

