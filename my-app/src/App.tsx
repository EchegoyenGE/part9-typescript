import React from 'react';
import './App.css';

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartDescription extends CoursePartBase{
  description: string;
}

interface CoursePartOne extends CoursePartDescription {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartDescription {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;

const courseName = "Half Stack application development";

const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
  }
];

const Header: React.FC<{ courseName: string }> = ({ courseName }) => (
   <h1>{courseName}</h1>
)

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part: React.FC<{ coursePart: CoursePart }> = ({ coursePart }) => {
  switch (coursePart.name) {
    case "Fundamentals":
      return (
        <div>{ coursePart.name}  {coursePart.exerciseCount }  {coursePart.description }</div>
      )
    case "Using props to pass data":
      return (
        <div>{ coursePart.name}  { coursePart.exerciseCount}  {coursePart.groupProjectCount }</div>
      )
    case "Deeper type usage":
      return (
        <div>{coursePart.name}  {coursePart.exerciseCount }  {coursePart.description }  {coursePart.exerciseSubmissionLink }</div>
      )
    default:
      return assertNever(coursePart)
  }
}

const Content: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }): JSX.Element => {
  return (
    <div>
      {courseParts.map(part => <Part key={part.name} coursePart={part}/>)}
    </div>
  )
}

const Total: React.FC<{ courseParts: Array<CoursePart> }> = ({ courseParts }) => {
  return (
    <p>
      Number of exercises {" "}
      {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  )
}

const App: React.FC = () => {
  return (
    <div>
      <Header courseName={courseName}/>
      <Content courseParts={courseParts}/>
      <Total courseParts={courseParts}/>
    </div>
  );
}

export default App;
