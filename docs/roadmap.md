Project Roadmap
===============

V0.1.x: MVP - Current Version
-----------------------------

This is a basic MVP which includes the UI, State, Data Access and a super simple demo.

V0.2.x: Form views
------------------

Provide a standardized collection of common form views including:

* Form: blank form
* SideNav: form with a list of sidebar nav options
* Table: MaterialUi data table with sorting, search and detail view

V0.3.x: Auth / ACL
------------------

This release will include support for the following Firebase Auth methods:

* Email / Password
* Facebook
* Twitter
* Google
* GitHub

It will also provide components for managing application access control. 

On the back end (Firebase) we will focus on documenting best security practices and publish example schemas to integrate
with our ACL rules.

__Note that this is client based functionality, and is NOT a replacement for securing your data in your Firebase app__


V0.4.x: Public Express API
--------------------------

This release will include a pre-built Express API that you can serve through Firebase Cloud Functions. It will include the 
following features:

* REST read access to your data that is in the Dig domain
* Configurable MemCache


V0.5.x: Extensions
------------------

Extensions are pre built modules which enable developers to share common CMS functionality. We will share a number
of our own, including: 

* Taxonomy
* Pages



