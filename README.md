# andrewdefilippis.com

My personal site. Plain HTML and CSS built with [Jekyll](https://jekyllrb.com/). No JavaScript, cookies, or trackers.

## Where things live

| To change | Edit |
|---|---|
| Name, pitch, "open to work" status, email, links | `_data/profile.yml` |
| Projects (and which ones show on the home page) | `_data/projects.yml` |
| Gallery photos | `_data/gallery.yml` |
| Menu | `_data/nav.yml` |
| Home page | `index.html` |
| Resume | `resume.html` |
| About | `about.md` |
| Blog posts | `_posts/` |
| Color theme (cerulean, navy, or steel) | `color_theme` in `_config.yml`; themes live in `_includes/themes/` |
| Layout and spacing | `assets/css/style.css` |

## Run it locally

```sh
bundle install
bundle exec jekyll serve --drafts   # then open http://localhost:4000
```

After changing `_config.yml`, restart `jekyll serve` to see it.

Pushing to `master` builds and deploys with GitHub Actions (`.github/workflows/pages-deploy.yml`).
