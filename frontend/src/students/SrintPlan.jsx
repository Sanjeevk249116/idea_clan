import { CalendarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

function SrintPlan() {
  const array = [
    {
      week: 1,
      topics: [
        "Introduction to HTML",
        "HTML Elements and Tags",
        "Semantic HTML",
      ],
      assignments: [
        "Create a basic HTML webpage",
        "Exercise on using semantic HTML",
      ],
      readings: ["HTML MDN Documentation", "W3Schools HTML Tutorial"],
    },
    {
      week: 2,
      topics: ["Introduction to CSS", "CSS Selectors", "CSS Box Model"],
      assignments: [
        "Style the HTML webpage created in Week 1",
        "CSS Selectors Practice",
      ],
      readings: ["CSS MDN Documentation", "W3Schools CSS Tutorial"],
    },
    {
      week: 3,
      topics: ["CSS Flexbox", "CSS Grid", "Responsive Web Design"],
      assignments: [
        "Create a responsive layout using Flexbox and Grid",
        "Responsive Design Challenge",
      ],
      readings: [
        "Flexbox Froggy",
        "CSS Grid Garden",
        "Responsive Web Design Fundamentals",
      ],
    },
    {
      week: 4,
      topics: [
        "Introduction to JavaScript",
        "Variables and Data Types",
        "Control Flow",
      ],
      assignments: [
        "Write basic JavaScript programs",
        "Control Flow Exercises",
      ],
      readings: ["JavaScript MDN Documentation", "Eloquent JavaScript Book"],
    },
    {
      week: 5,
      topics: ["Functions", "Arrays", "Objects"],
      assignments: [
        "Practice writing JavaScript functions",
        "Manipulate arrays and objects",
      ],
      readings: ["MDN JavaScript Guide", "You Don't Know JS Series"],
    },
    {
      week: 6,
      topics: ["DOM Manipulation", "Event Handling", "Forms and Validation"],
      assignments: [
        "Create interactive web pages using DOM manipulation",
        "Form Validation Project",
      ],
      readings: ["DOM Enlightenment", "Handling Events"],
    },
    {
      week: 7,
      topics: [
        "Introduction to APIs",
        "AJAX and Fetch API",
        "Asynchronous JavaScript",
      ],
      assignments: [
        "Fetch data from an API",
        "Build an asynchronous JavaScript application",
      ],
      readings: ["APIs and Asynchronous JavaScript"],
    },
    {
      week: 8,
      topics: [
        "Introduction to Node.js",
        "Node.js Modules",
        "Express.js Framework",
      ],
      assignments: [
        "Set up a basic Node.js server",
        "Build a RESTful API using Express.js",
      ],
      readings: ["Node.js Documentation", "Express.js Guide"],
    },
    {
      week: 9,
      topics: [
        "Database Fundamentals",
        "SQL Basics",
        "Introduction to MongoDB",
      ],
      assignments: [
        "Create and query a SQL database",
        "MongoDB CRUD Operations",
      ],
      readings: ["SQL Tutorial", "MongoDB Documentation"],
    },
    {
      week: 10,
      topics: [
        "Authentication and Authorization",
        "Session Management",
        "Security Best Practices",
      ],
      assignments: [
        "Implement user authentication using Passport.js",
        "Secure your web application",
      ],
      readings: [
        "Authentication and Authorization in Express.js",
        "OWASP Top 10",
      ],
    },
    {
      week: 11,
      topics: [
        "Introduction to React.js",
        "Components and Props",
        "State and Lifecycle",
      ],
      assignments: [
        "Build a simple React application",
        "State Management Exercise",
      ],
      readings: ["React Documentation", "React Tutorial"],
    },
    {
      week: 12,
      topics: [
        "React Router",
        "Redux State Management",
        "API Integration with React",
      ],
      assignments: [
        "Implement routing in your React application",
        "Integrate Redux for state management",
      ],
      readings: ["React Router Documentation", "Redux Documentation"],
    },
    {
      week: 13,
      topics: [
        "Introduction to TypeScript",
        "Type Annotations",
        "Interfaces and Generics",
      ],
      assignments: [
        "Convert a JavaScript project to TypeScript",
        "TypeScript Exercises",
      ],
      readings: ["TypeScript Documentation", "TypeScript Handbook"],
    },
    {
      week: 14,
      topics: [
        "Testing Fundamentals",
        "Unit Testing with Jest",
        "End-to-End Testing with Cypress",
      ],
      assignments: [
        "Write unit tests using Jest",
        "End-to-End Testing Project with Cypress",
      ],
      readings: ["Jest Documentation", "Cypress Documentation"],
    },
    {
      week: 15,
      topics: [
        "Deployment Strategies",
        "Continuous Integration and Deployment",
        "Performance Optimization",
      ],
      assignments: [
        "Deploy your web application",
        "Optimize your application for performance",
      ],
      readings: ["Deployment Best Practices", "Web Performance Optimization"],
    },
  ];
  return (
    <Box>
    {array?.map((el) => {
      return (
        <Box key={el.week}>
          <Grid templateColumns="repeat(10, 1fr)" alignItems="center" my={5}>
            <GridItem colSpan={2}>
              <Text color={'greenyellow'} fontSize={18} fontWeight={600}>
            Weel: {el.week}
              </Text>
            </GridItem>
            <GridItem colSpan={8}>
              <Grid templateColumns="repeat(3, 1fr)" gap={10}>
              {el.topics.map((topic, index) => (
                <GridItem key={index}>
                  <Text fontSize={18}>{topic}</Text>
                </GridItem>
              ))}
              </Grid>
            </GridItem>
          </Grid>
          <hr />
        </Box>
      );
    })}
  </Box>
  );
}

export default SrintPlan;
