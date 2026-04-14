# Tableau Payroll Visual Analytics Dashboard

!!! info "Project Snapshot"
    - **Project Type:** Data Visualization and Visual Analytics (Tableau)
    - **Audience:** Recruiters, hiring managers, and analytics practitioners
    - **Core Goal:** Turn payroll and workforce data into actionable, decision-ready insights
    - **Tools:** Tableau, calculated fields, table calculations, parameters, clustering

!!! success "Recruiter Snapshot (60 Seconds)"
  - Built a four-view Tableau dashboard to analyze compensation concentration, diversity profile, and tenure-salary segmentation.
  - Implemented key analytics features required by coursework: reference line, table calculation, parameter control, calculated fields, and clustering.
  - Designed views to support practical decisions in hiring strategy, compensation planning, and workforce structure review.

!!! warning "Before Publishing Final"
    Replace the placeholder Tableau URL in this page with your real Tableau Public link.

## Live Dashboard

<div style="position: relative; width: 100%; max-width: 1200px; margin: 0 auto;">
  <iframe
    src="https://public.tableau.com/views/REPLACE_WITH_YOUR_WORKBOOK/MainDashboard?:showVizHome=no"
    width="100%"
    height="760"
    frameborder="0"
    allowfullscreen
    title="Tableau Payroll Visual Analytics Dashboard">
  </iframe>
</div>

- Direct link: [Open on Tableau Public](https://public.tableau.com/views/REPLACE_WITH_YOUR_WORKBOOK/MainDashboard?:showVizHome=no)

## Business Question

How can payroll, role structure, and diversity metrics be visualized so leaders can quickly identify pay concentration, demographic composition, and tenure-based role segmentation?

## Data Scope and Preparation

- Data level: employee payroll and workforce records, aggregated for dashboard views.
- Key fields used: location, department, job title, age range, gender, race, annual salary, and `HIRE_DATE`.
- Data preparation highlights:
  - Standardized category labels for dimensions used in filters and grouping.
  - Built calculated fields for tenure and parameter-driven metric selection.
  - Applied analytical filters to focus on departments with meaningful representation.

## Executive Insight Summary

- Compensation concentration is not evenly distributed across locations and roles.
- Payroll share by age and gender can diverge from headcount distribution, which is useful for equity review.
- Diversity interpretation changes depending on whether the metric is pay level or employee count, so parameter switching is essential.
- Tenure and salary clusters provide a compact view of workforce strata from entry-level to leadership roles.

## Dashboard Walkthrough

### Worksheet 1: Treemap - Top 3 Highest-Paid Jobs in Major Locations

- Top 5 city locations by **employee count**
- Within each location, top 3 job titles by **average annual salary**
- Box size encodes **average salary**
- Box color distinguishes **location**

**Decision support:** Quickly identifies where compensation is concentrated and which roles drive high payroll in each major location.

### Worksheet 2: Bar Chart - Salary Percentile and Composition by Age & Gender

- Total annual payroll (in millions) by **age range**
- Side-by-side bars split by **gender**
- **Reference line** for average payroll per age group
- **Table calculation (Percent of Total)** on labels to show each bar's share of total city payroll

**Decision support:** Reveals payroll composition across demographics and flags age-gender segments with outsized payroll share.

### Worksheet 3: Highlight Table - Diversity in Top-Paying Departments

- Heatmap crossing **department** (rows) and **race** (columns)
- Cell color intensity controlled by parameterized metric
- Parameter options:
  - **Average Salary**
  - **Median Salary**
  - **Employee Count**
- Filter logic:
  - Department employee count >= 5
  - Department is in top 5 by average salary

**Decision support:** Lets users switch analytical lens instantly and assess diversity profile in high-paying departments.

### Worksheet 4: Scatter Plot - Tenure and Salary Segmentation (Clusters)

- Each point represents a **job title**
- **X-axis:** Years of Service (calculated from `HIRE_DATE`)
- **Y-axis:** Annual Salary Rate
- Points colored by cluster:
  - Cluster 1: **Senior / Supervisory**
  - Cluster 2: **Entry-Level Roles**
  - Cluster 3: **Skilled / Mid-Career**
  - Cluster 4: **Executive / Leadership**

**Decision support:** Segments workforce roles by compensation and tenure profile for targeted workforce planning.

## Technical Implementation Proof

| Requirement | Implemented In | Status |
| --- | --- | --- |
| At least one reference line | WS2 (Average payroll) | ✅ |
| At least one table calculation | WS2 (Percent of total payroll) | ✅ |
| At least one parameter | WS3 (Select Metric) | ✅ |
| At least one calculated field | WS3 (Metric Value), WS4 (Years of Service) | ✅ |
| At least one analytics element | WS4 (Clustering) | ✅ |

### Key Calculated Fields

```text
// Years of Service (continuous)
DATEDIFF('day', [HIRE_DATE], TODAY()) / 365.25
```

```text
// Metric Value (parameter-driven)
CASE [Select Metric]
WHEN 'Average Salary' THEN [Avg Salary]
WHEN 'Median Salary' THEN [Median Salary]
WHEN 'Employee Count' THEN [Employee Count]
END
```

## Skills Demonstrated

- Translating business questions into dashboard-ready analytical views
- Building interactive Tableau components (parameters, table calculations, clustering)
- Designing visuals that balance readability and analytical depth
- Communicating findings for hiring, compensation, and workforce strategy decisions

## Resume-Ready Impact Bullets

- Designed and delivered an interactive Tableau dashboard with 4 coordinated worksheets for payroll composition, diversity analytics, and tenure-salary segmentation.
- Implemented advanced Tableau features including parameterized metric switching, percent-of-total table calculations, reference lines, and cluster-based role segmentation.
- Translated raw workforce records into decision-ready insights for compensation concentration analysis and organizational planning.

## How to Interact

1. Use the location and demographic filters to narrow the analysis scope.
2. Switch the metric parameter in Worksheet 3 to compare salary vs. headcount patterns.
3. Hover points in Worksheet 4 to inspect cluster-level role characteristics.
4. Use the treemap and bar chart together to compare where payroll concentration and demographic composition align.

## Publishing Assets Checklist

Add these files to this folder before final release:

- `attachments/dashboard-overview.png`
- `attachments/ws1-treemap.png`
- `attachments/ws2-bar-reference-line.png`
- `attachments/ws3-highlight-parameter.png`
- `attachments/ws4-cluster-scatter.png`

Then insert them into this page where needed to provide static preview support for mobile users.

## Final Publish Checklist

1. Replace `REPLACE_WITH_YOUR_WORKBOOK` in this page's iframe URL.
2. Replace `REPLACE_WITH_YOUR_WORKBOOK` in `docs/Projects/index.md` live dashboard link.
3. Upload static screenshot assets listed above.
4. Run local build check:

```bash
cd "Blog/JermaineChen404.github.io"
python -m mkdocs build
```

5. Push updates to your feature branch and open a pull request.
