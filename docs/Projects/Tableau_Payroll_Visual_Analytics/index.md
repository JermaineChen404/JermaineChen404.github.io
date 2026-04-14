# Tableau Payroll Visual Analytics Dashboard

!!! info "Project Snapshot"
    - **Project Type:** Data Visualization and Visual Analytics (Tableau)
    - **Audience:** Recruiters, hiring managers, and analytics practitioners
    - **Core Goal:** Turn payroll and workforce data into actionable, decision-ready insights
    - **Tools:** Tableau, calculated fields, table calculations, parameters, clustering
  - **Dataset Source:** City of Cincinnati Open Data portal

!!! success "Recruiter Snapshot (60 Seconds)"
  - Built a four-view Tableau dashboard to analyze compensation concentration, diversity profile, and tenure-salary segmentation.
  - Implemented key analytics features required by coursework: reference line, table calculation, parameter control, calculated fields, and clustering.
  - Designed views to support practical decisions in hiring strategy, compensation planning, and workforce structure review.

!!! warning "Before Publishing Final"
  If you publish a revised workbook version, update the embed URL and direct link below.

## Live Dashboard

<div class='tableauPlaceholder' id='tableauVizPayroll' style='position: relative; width: 100%; max-width: 1200px; margin: 0 auto;'>
  <noscript>
    <a href='https://public.tableau.com/views/isom3330_project_2/CincinnatiWorkforceAnalyticsDashboard?:language=en-US&:display_count=n&:origin=viz_share_link'>
      <img alt='Cincinnati Workforce Analytics Dashboard' src='https://public.tableau.com/static/images/is/isom3330_project_2/CincinnatiWorkforceAnalyticsDashboard/1_rss.png' style='border: none' />
    </a>
  </noscript>
  <object class='tableauViz' style='display:none;'>
    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
    <param name='embed_code_version' value='3' />
    <param name='site_root' value='' />
    <param name='name' value='isom3330_project_2/CincinnatiWorkforceAnalyticsDashboard' />
    <param name='tabs' value='yes' />
    <param name='toolbar' value='yes' />
    <param name='static_image' value='https://public.tableau.com/static/images/is/isom3330_project_2/CincinnatiWorkforceAnalyticsDashboard/1.png' />
    <param name='animate_transition' value='yes' />
    <param name='display_static_image' value='yes' />
    <param name='display_spinner' value='yes' />
    <param name='display_overlay' value='yes' />
    <param name='display_count' value='yes' />
    <param name='language' value='en-US' />
  </object>
</div>
<script type='text/javascript'>
  var divElement = document.getElementById('tableauVizPayroll');
  var vizElement = divElement.getElementsByTagName('object')[0];
  if (divElement.offsetWidth > 500) {
    vizElement.style.minWidth = '420px';
    vizElement.style.maxWidth = '100%';
    vizElement.style.minHeight = '610px';
    vizElement.style.maxHeight = (divElement.offsetWidth * 0.75) + 'px';
  } else {
    vizElement.style.width = '100%';
    vizElement.style.minHeight = '1150px';
    vizElement.style.maxHeight = (divElement.offsetWidth * 1.77) + 'px';
  }
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>

- Direct link: [Open on Tableau Public](https://public.tableau.com/views/isom3330_project_2/CincinnatiWorkforceAnalyticsDashboard?:language=en-US&:display_count=n&:origin=viz_share_link)

## Business Question

How can payroll, role structure, and diversity metrics be visualized so leaders can quickly identify pay concentration, demographic composition, and tenure-based role segmentation?

## Data Scope and Preparation

- Data level: employee payroll and workforce records, aggregated for dashboard views.
- Source dataset: [City of Cincinnati Employees w Salaries](https://data.cincinnati-oh.gov/Efficient-Service-Delivery/City-of-Cincinnati-Employees-w-Salaries/wmj4-ygbf/about_data)
- Key fields used: location, department, job title, age range, gender, race, annual salary, and `HIRE_DATE`.
- Data preparation highlights:
  - Standardized category labels for dimensions used in filters and grouping.
  - Built calculated fields for tenure and parameter-driven metric selection.
  - Applied analytical filters to focus on departments with meaningful representation.

!!! note "Data Provenance"
    Dashboard inputs are based on the official Cincinnati Open Data source linked above. Any filters, calculations, and aggregations shown in Tableau are transformations of that source dataset.

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

1. Confirm embed and direct link open the same dashboard version.
2. Update both this page and `docs/Projects/index.md` if workbook name/path changes.
3. Upload static screenshot assets listed above.
4. Run local build check:

```bash
cd "Blog/JermaineChen404.github.io"
python -m mkdocs build
```

5. Push updates to your feature branch and open a pull request.
