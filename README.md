# Date for 1

## Overview

"Date for 1" is an app designed to help people explore their cities and plan solo dates. The app suggests activities based on the time of day, the user's desired experience, and their current mood.
It aims to provide personalized recommendations for solo outings, encouraging users to enjoy their own company while discovering new experiences in their city.

### Problem Space

There is currently no centralized space for people to easily find and plan activities in their city, particularly for solo outings. This gap is especially noticeable for cultural activities such as attending plays, creating art, or visiting galleries, which are often not widely advertised, while emphasizing local venues and third spaces.

Many individuals feel pressure to engage in interesting activities only when with others, as planning for oneself can seem like too much effort. "Date for 1" aims to address these issues by:

-   Providing a centralized platform for discovering solo activities in one's city.
-   Focusing on cultural and lesser-known experiences that may be overlooked.
-   Simplifying the planning process for solo outings, reducing the perceived effort.
-   Encouraging self-exploration and personal growth through solo experiences.

### User Profile

The primary users of "Date for 1" are individuals with the following characteristics:

-   Age Range: 16-40 years old.
-   Personality: Introverted, self-reflective, likes exploring new places, tries to include new activities to change the daily routine.
-   Interests: Culturally aware, appreciative of local experiences, enjoying ‘me time’.
-   Preferences:
    -   Enjoy exploring local spaces such as restaurants, shops, and museums
    -   Keen to discover new aspects of their city
    -   Value quality "me time" and personal enrichment

These users are likely to be:

-   Comfortable with technology and mobile apps
-   Seeking ways to make solo outings more enjoyable and less daunting
-   Interested in personal growth and self-discovery through experiences
-   Looking for curated suggestions that align with their interests and mood

### Features

-   Activity Recommendation: Users can receive personalized activity suggestions based on their mood, time of day, and preferences.
-   Mood-based Search: Users can search for activities by selecting their current mood from a predefined list.
-   Add an Activity: Users can contribute to the app's database by adding their own activities. They will complete a form with details including:
    -   Activity description
    -   Location
    -   Cost
    -   Preferred time of day
    -   Suitable mood
    -   Image for activity preview
        For the MVP, this function will be demo by the developer and will not require a user login

## Implementation

### Tech Stack

For the "Date for 1" app, we will be using the following technologies:

-   Frontend:
    React.js: A popular JavaScript library for building user interfaces
    React Router DOM: For handling routing in the React application
    Sass: A CSS preprocessor for more maintainable and feature-rich stylesheets
    React-Toastify: For displaying notifications to users
    Vite: A build tool that provides faster and leaner development experience for modern web projects
    React-multi-carousel: To handle a carousel of activity images

-   Backend:
    Node.js: A JavaScript runtime for executing server-side code
    Express: A minimal and flexible Node.js web application framework
    Knex.js: A SQL query builder for Node.js, which will help with database operations
    MySQL: Our chosen relational database management system
    Multer middleware: For handling multipart/form-data, primarily used for uploading files
    CORS middleware: To enable Cross-Origin Resource Sharing, allowing our frontend to communicate with the backend API

-   Development Tools:
    npm: The package manager for JavaScript, used to manage project dependencies
    Figma: For designing and prototyping the user interface

Potential Limitations: - React.js: While powerful, React has a steep learning curve and may require more setup time compared to simpler frameworks. - JavaScript: As a single-threaded language, JavaScript may face performance issues with complex calculations or large data sets. - MySQL: While reliable, MySQL might face scalability issues with very large datasets compared to NoSQL alternatives. - Sass: While Sass offers many features, it requires compilation, which can add complexity to the build process. - Node.js: Being single-threaded, Node.js may not be ideal for CPU-intensive tasks.

### APIs

For the "Date for 1" app, we will be developing our own custom API to handle the core functionality of the application. This API will be responsible for:

-   Managing activity data (CRUD operations)
-   Processing activity recommendations based on user input
-   Storing and retrieving venue information

Key endpoints of our custom API will include:

-   /api/activities: For retrieving, adding, updating, and deleting activities
-   /api/recommendations: For generating personalized activity recommendations

### Sitemap

The "Date for 1" app will consist of the following main pages:

1. Home Page
    - Search bar for finding activities
    - Option to take a quiz for personalized recommendations
    - Brief explanation of the app's purpose
    - Link to about us page
2. Quiz Page
    - Interactive quiz for users to input preferences
    - Displays recommended activity based on quiz results
    - Link to full activity page for the recommendation
3. Activities List Page
    - Carousel of 30 minutes or less activities for those looking for a small adventure.
    - Comprehensive list of all available activities
    - Filtering functionality based on user preferences (e.g., mood, time of day, cost)
4. Add Activity Page
    - Form for users to submit new activities
    - Fields for activity details, location, cost, suitable mood, etc.
5. Activity Details Page
    - Detailed description of a specific activity
    - Location information
    - Activity image
    - In future implementation, option to add to user's upcoming dates list (for logged-in users)
6. About Us Page
    - Information about the app creator
    - Project background and motivation
    - Links to creator's LinkedIn, GitHub, and portfolio

### Mockups

Mockups will be created using Figma, focusing on the following key screens:

-   Home Page
-   Quiz Page
-   Activities List Page
-   Activity Details Page
-   Add Activity Form
-   About us page

The design process will include:

-   Creating low-fidelity wireframes
-   Developing a consistent design system (color palette, typography, reusable components)
-   Designing responsive layouts for both mobile, tablet and desktop views

Check out the wireframes and mockups [here](https://www.figma.com/design/QP53muwNQXRfvMPhkQvC7q/Date-for-1?node-id=0-1&t=Vto5dVwaEaU2yPUl-1)

### Data

The "Date for 1" app will primarily manage data related to activities, venues, moods, times of day, and price ranges. Here's a revised breakdown of the main data entities and their attributes:

Activities

-   ID (unique identifier)
-   Name
-   Description
-   Image URL
-   Venue ID (foreign key to Venues table)
-   Price Range ID (foreign key to Price Ranges table)

Venues
-   ID (unique identifier)
-   Name - Address - Website URL
    Moods
-   ID (unique identifier)
-   Name (e.g., creative, hungry, adventurous, curious)

Times of Day
-   ID (unique identifier)
-   Name (e.g., morning, afternoon, evening, night)
    Price Ranges
-   ID (unique identifier)
-   Range (e.g., $, $$, $$$, $$$$)

Activity_Moods (junction table)
-   Activity ID (foreign key to Activities table)
-   Mood ID (foreign key to Moods table)

Activity_Times (junction table)
-   Activity ID (foreign key to Activities table)
-   Time of Day ID (foreign key to Times of Day table)

Relationships:

-   An Activity belongs to one Venue
-   A Venue can have many Activities
-   An Activity is associated with one or two Moods (through Activity_Moods junction table)
-   An Activity is associated with multiple Times of Day (through Activity_Times junction table)
-   An Activity belongs to one Price Range

### Endpoints

The "Date for 1" app will implement the following API endpoints:

Activities

-   GET /api/activities
-   POST /api/activities
-   GET /api/activities/:id
-   PUT /api/activities/:id
-   DELETE /api/activities/:id

Recommendations

-   POST /api/recommendations

Venues

-   GET /api/venues
-   POST /api/venues
-   GET /api/venues/:id
-   PUT /api/venues/:id
-   DELETE /api/venues/:id

## Roadmap

Week 1 (October 8 - October 14):
Day 1-2: Finalize project design and create detailed wireframes
Day 3-4: Set up project structure and development environment
Day 5-7: Implement basic backend structure and database setup

Week 2 (October 15 - October 21):
Day 1-3: Develop frontend components
Day 4-5: Implement quiz feature and recommendation algorithm
Day 6-7: Develop "Add Activity" form and integrate with backend

Week 3 (October 22 - October 27):
Day 1-2: Implement remaining pages (About Us, Contact Us)
Day 3-4: Polish UI/UX, ensure responsive design
Day 5: Thorough testing and bug fixing
Day 6: Final adjustments and preparation for presentation

---

## Nice to Have

-   Venue Information: The app will provide detailed information about venues hosting activities, including:
    -   Website link
    -   Average activity cost range
    -   Location with map using Google Maps api

## Future Implementations

-   User Profiles
-   Favorite Activities
-   Calendar Integration
-   Activity List Confirmation with self-love quotes
-   Enhanced Recommendation System
-   Social Features
-   Expanded Activity Database
-   Mobile App Development
-   Upcoming Dates List: Authenticated users can add activities to their personal "Upcoming Dates" list for future reference and planning.
-   Activity Details Page: option to add to user's upcoming dates list (for logged-in users)

    API endpoints and functionality:

    -   Managing user profiles and preferences
    -   Handling user authentication and authorization

    -Proposed endpoints for future implementation

    Users

    -   POST /api/users/register
    -   POST /api/users/login
    -   GET /api/users/profile
    -   PUT /api/users/profile
