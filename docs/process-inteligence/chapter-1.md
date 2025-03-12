# Chapter 1 - Introduction to Business Process Management

## What is a business process?

BP can be considered as a complete set of activities end-to-end that creates value for the costumer

## What can be considered as BP Management?

A disciplined approach to identify, document, measure, design, execute,
monitor and control both automated and non-automated business processes.

### Components of business processes

- Events: things that occur automatically
- Activities: do not occur without intervention
- Task: simple activity, the smallest unit of work
- Decision points: point that decides the outcome
- Entities that partake in the process
- Outcome: can be positive or negative, depending if it brough value to main actor

### Modelling

1. Events
2. Activities and sequence flow
3. Gateways
   1. XOR (exclusive path after asking a question)
   2. AND (both paths in parallel )
   3. OR (take one or more paths)

A **repetition block** can be created if activities are not done correctly, for this to be done, the model needs to have a select block of activities with a xor getaway to check if the activity was done correctly.

### Resources

1. Pools : resource classes
2. Lanes : partition pool into sub classes , can be nested

## BPM Lifecycle

### Process identification

Start by identifying the processes that are relevant to the problem.

### Process discovery

Understand the process in detail by creating the **AS-IS** model.

### Process analysis

Basically analyzing and assessing potential issues.

### Process redesign

Analyze potential solutions to create the **TO-BE** model.

### Process implementation

Implement necessary changes so the **TO-Be** can eventually be put into place.

### Process monitoring and controlling

Control the execution of the processes

## BPM vs Process Mining

While BPM aims to discover and blah blah processes, Process Mining aims to do the same thing but with **knowledge**.
