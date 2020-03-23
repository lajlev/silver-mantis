# Eleventy, SASS & NPM template
A template for eleventy, sass compiled through NPM


## Run a local development server
``` bash
npm i
npm run serve
```
## Build
``` bash
npm i
npm run build
```

## Optional: Super easy deployment to github pages
Method: Push dist folder to gh-pages branch


### Setup

``` bash
git branch gh-pages
```

This makes a branch based on the `master` HEAD.
It would be okay but the files and the git history of `master` branch are not meaningful on `gh-pages` branch.
Using an `--orphan` branch, you can initialize `gh-pages` in a clean way.

``` bash
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Init gh-pages branch"
git checkout master
```

Then, mount the branch as a subdirectory using `git worktree`:

``` bash
git worktree add dist gh-pages
```

### Deploy
``` bash
npm run deploy
```