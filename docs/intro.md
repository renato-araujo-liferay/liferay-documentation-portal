---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Liferay in less than 5 minutes**.

## Getting Started

Get started by **Cloning documentation from our repository**.

Create a local mirror of a Github
Open your terminator and navigate or create your favorite project folder
Example:

- Accessing an existed folder:
```
cd Project/Documentation
```
- Create a new folder
```
mkdir Project

```
Now Let`s Clone our repository
```
 git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.wiki.git
 cd YOUR_REPOSITORY.wiki
 grip
```

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

*Already installed on Liferay laptops*

## Start our site

Run the development server:

Go to the root folder previously downloaded

```bash
cd liferay-documentation
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
