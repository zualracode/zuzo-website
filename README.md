# ZUZO Landing Page — v9 Cache-Busted

This version addresses the deployment/cache issue observed on the live site.

Changes:
- `style.css?v=9` cache-bust added to index.html.
- Defensive inline black-header CSS added directly to index.html.
- White transparent SVG logo remains the actual logo asset.
- Header and utility text sizing are explicit.

If the live site still shows the cream header after replacing index.html and style.css, the issue is deployment/file replacement rather than the CSS itself.

Keep the existing CNAME file.
