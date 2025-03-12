# Chapter 2 - Introduction to Process Mining

## What is process mining?
- Process mining: discover, analysis and optimize business processes through events logs stores on information system
- Data centric perspective and process centric perspective    

## Process mining framework
1. Discover: event log = AS IS model
2. Conformance: event log vs ideal mode  
3. Enhancement: new model, reparing the previous one to be more adequate to reality

## Process mining methodology
Events logs can be taken as the format in which we can retrieve digital footprints\
An event log is the data required for Process Mining

### Process mining components
1. Case ID: case consists of multiple events
2. Activity: describes the action that is captured by the event
3. Timestamp: indicate time when the event takes place
4. Trace: sequence of events ordered by __Timestamp__, need to belong to the same __Case__

**Warning event logs must cover 3 columns: caseID, activity name and timestamp**

### Assumptions
- An event log contains information about a single process
- Each event in the log needs to refer to a single process instance 
- Events inside a case need to be ordered

----

### Some names
- Variant (unique data)
- Most common variant: happy path
- All variants: spaghetti mode