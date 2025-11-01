# 你好呀
## Where u at?
The is a [personal website](https://jermainechen404.github.io) created by Chen Hejian (Jermaine).

## What can be found here?
This website primarily contains my course notes and random blogs that I feel worth sharing. You are welcome to browse at your discretion. However, **the intellectual property rights of the course notes ultimately belong to the instructor of my course at HKUST**. I may remove the relevant content at any time if requested to do so. The content may contain inaccuracies. If you notice any errors or flaws, please contact me. Thank you very much.

## How to browse it?
- Browse articles by topic and directory.  
    - **PC**: Select a topic from the tab bar at the top, and choose an article from the directory on the left.  
    - **Mobile**: Tap the icon in the upper left corner to select a topic and article.  
- Search for articles by keyword.

---
## About me
I am a year 2 student studying in School of Business and Management, Hong Kong University of Science and Technology. You can find my [Github](https://github.com/JermaineChen404) and [LinkedIn](https://www.linkedin.com/in/hejian-chen-b4945a35b/) at the footnote.

## Workflow
Here is the workflow of this website for those whom may be interested in:

All of the contents are written in **Markdown**. I primarily use [Obsidian](https://obsidian.md/) to edit and manage my notes since it has a vibrant community and can be easily synced across platforms.

>[!warning] Reminder
> Obsidian supports some special markdown syntaxes that might be invalid elsewhere. My solution is to use standard Markdown if possible; otherwise, additional plugins are needed.

The website is built with [MkDocs](https://www.mkdocs.org/). Workload is greatly simplified since it can generate static sites based on Markdown files smoothly. [MkDocs-Material](https://squidfunk.github.io/mkdocs-material/) is used as the theme.

The website is published via [GitHub Pages](https://docs.github.com/en/pages). Therefore, the website will be updated once I edit and commit.

The structure is:

```
$ tree -a
.
├── .obsidian
├── JermaineChen404.github.io
	├── .github
	|   ├── .DS_Store
	|   └── workflows
	|       └── PublishMySite.yml
	├── docs
	|   └── index.md
	└── mkdocs.yml
```

