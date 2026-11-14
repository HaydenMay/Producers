# V0.7.1 mobile visual review

These are screenshots of the running application in desktop Chrome with
Playwright's iPhone 13 device emulation, at 390 × 844 CSS pixels. The desktop
image uses 1280 × 800. They are not physical iPhone or Safari captures.

- before-planning.png: deployed V0.7 planning sheet.
- after-planning.png: shorter approach copy, visible risk, no grabber.
- after-casting.png and after-distribution.png: concise comparisons with
  expandable details.
- after-premiere.png: scores and current money, with expandable accounting.
- after-desktop.png: the same planning view on desktop.

The pre-change browser probe confirmed that changing Genre disconnected both
select elements and focused a newly created Genre control. The post-change
probe confirms the original controls remain mounted through repeated changes
and that the selected concept survives reload and starts the real project.
Native iOS picker behavior still requires testing on an actual iPhone.
