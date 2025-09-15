# OLA3 - UASS

### Made by

- Lasse Hansen - cph-lh479@stud.ek.dk
- Pelle Hald Vedsmand - cph-pv73@stud.ek.dk
- Nicolai Rosendahl - cph-nr135@stud.ek.dk


## Objective of assignment: 
Create an automated CI pipeline with enforce pull requests on main branch.

Our goal is to automate our test pipeline in 2 steps to ensure a healthy main branch:

- Run maven test lifecycles
- Build app docker image

Second step will only be executed on succesful test phase.

We will add our current test pipeline (unit, integration, System, code coverage and performance testing),
and add Spotbugs, stylechecking (lint) and SBOM.

Performance testing is done in a containerized environment with Docker.

We use a previous OLA we did in the Software Quality course, because it provides an example application, complete with unit- integration- and system tests that are veryfiable by Maven. 

## Deliverables: 

