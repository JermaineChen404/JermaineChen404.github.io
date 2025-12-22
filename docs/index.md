---
hide:
  - navigation
  - toc
---

# <span class="twemoji">🚀</span> 你好呀 | Welcome to Jermaine's Hub

**Chen Hejian (Jermaine)** • Year 2 Business Student @ HKUST  
*Synthesizing Finance, Economics, and Operations through a Digital Lens.*

---

## 🧭 Quick Navigation
*Select a portal to begin browsing my notes and insights.*

<div class="grid cards" markdown>

-   :material-chart-line:{ .lg .middle } __Market News__
    ---
    Daily digest of global market movements and financial headlines.
    [:octicons-arrow-right-24: View News](Market_News/Nov%206th.md)

-   :material-bank:{ .lg .middle } __Finance & Econ__
    ---
    Macroeconomics, Derivatives, and Corporate Finance synthesis.
    [:octicons-arrow-right-24: 2025 Fall Notes](ECON2123/Ch1%262%20-%20Overview.md)

-   :material-factory:{ .lg .middle } __Operations__
    ---
    Process Analysis, Supply Chain, and Inventory Management (ISOM2700).
    [:octicons-arrow-right-24: View Ops](ISOM2700/Process_Analysis.md)

-   :material-lightbulb-on:{ .lg .middle } __Cheat Sheets__
    ---
    Condensed formulas and high-density review for exams.
    [:octicons-arrow-right-24: Get Prepared](FINA3103/Cheatsheet.md)

</div>

---

## 📖 About This Website

This site primarily contains my course notes and random blogs worth sharing. You are welcome to browse at your discretion.

!!! info "Intellectual Property & Accuracy"
    The intellectual property rights of the course notes ultimately belong to the **instructors at HKUST**. I may remove content at any time if requested. Please note that content may contain inaccuracies—if you notice an error, I’d appreciate your feedback!

### 🖱️ How to Browse
=== "💻 PC"
    Select a **Topic** from the tab bar at the top, then choose an **Article** from the directory on the left.
=== "📱 Mobile"
    Tap the **Menu icon** (top-left) to select a topic and article. Use the search icon for keywords.

---

## 🛠️ The Workflow
*How I build this digital garden using Markdown and Automation.*



```mermaid
graph LR
  A[Obsidian] -- Edit --> B[GitHub Repo];
  B -- CI/CD --> C[GitHub Actions];
  C -- Build --> D[MkDocs Material];
  D -- Deploy --> E[Live Website];
  style E fill:#3f51b5,color:#fff

```

I primarily use **Obsidian** to manage notes. The site is generated via **MkDocs** and hosted on **GitHub Pages**.

??? abstract "View Directory Structure"
```text $ tree -a . ├── .obsidian                 # Obsidian configuration ├── JermaineChen404.github.io     ├── .github/workflows      # Auto-publish scripts     ├── docs/                  # Markdown source files     |   └── index.md     └── mkdocs.yml             # Theme & Plugin settings ```

!!! warning "Markdown Compatibility"
Obsidian supports special syntax (like Wikilinks). I aim for standard Markdown, but use MkDocs plugins to bridge the gap where necessary.

---

!!! danger "Don't click me"
Seriously... [I wouldn't if I were you](https://jermainechen404.github.io/Don't%20click%20me.md).
