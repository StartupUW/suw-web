Startup UW Website Redesign
==================

## Overview

This is the repository for the new SUW Website. Planning on launch in Oct 2015!

Important links:
- [Design documentation](https://docs.google.com/document/d/1R89lHjBWMJrz_Vh1_UF1osm_404qn5gF09bak8xJwpQ/edit?usp=sharing)
- [Infrastructure documentation](https://docs.google.com/spreadsheets/d/12cQx4J6iozWVqrAVz26X6F8Jufq96ee4j4ZJ1NCNpMo)
- [Ideas and Timeline](https://docs.google.com/document/d/17rMPQ0pNIClu35xPAHzYHl_28HMAYzvtrGGpAxnfaEo/edit)

### Architecture

Web framework: Django Python 1.8

Data store: PostgreSQL 9.4

CI Tools: Git, Github, Jenkins

System specifications: AWS t2.micro, Ubuntu 14.04 Linux

Testing Tools: Pylint, unittest, django_jenkins

Subdomains (TBD):

 - build.startupuw.com // CI builds

 - dev.startupuw.com // test environment

### Philosophy

This website is not only about StartupUW, but about showing our ability to abide by high technical standards of development. When we do things the right way, we'll be more productive, develop faster, and make startupuw.com an example of strong engineering.

### Testing and Development

Good overview of CD: [Wiki](https://en.wikipedia.org/wiki/Continuous_delivery)

Testing background info:

Read up about mocking, white box testing, and black box testing. We'll aim for high test coverage of our code so we ensure that the website won't have any downtime due to problems. In particular, we should mock out pieces of data we fetch from external sources, like Facebook, or from a database -- that way we can test locally without having database/API access for each developer. 

Development strategy: 

1. Checkout a new branch for whatever feature/bug you are working on.
2. Write and run tests on a local machine.
3. Run the server locally and make sure no errors are thrown.
4. Push the code to a Github branch and wait for the build to pass on Jenkins.
6. If the Jenkins build fails, fix whatever broke.
7. Once your build passes, submit a PR to the master branch. If there are merge conflicts, fix them.
8. IMPORTANT: try and keep your branches and changes small and testable. It makes it easier to understand and review that way.
9. dev.startup.uw will be updated to the master branch and will run with a test database. Make sure everything works.
10. When we're ready for a release, we'll get together and release to production, startupuw.com for minimal downtime.
