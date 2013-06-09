**blogin** is A simple static blog framework, powered by Node.js.

How to install
---
1. Install [node.js](http://nodejs.org/) and [npm](https://npmjs.org/).
2. `npm install -g blogin`
3. `blogin init blogdir`
4. `cd blogdir`
5. Change blog config at "blogdir/blogin.json"
4. `blogin update`
5. `blogin server`
6. Open `http://127.0.0.1:3000` in browser.

Create post
---
1. `blogin post this is my first post`
2. Then edit "blogindir/data/posts/2013/this-is-my-first-post.md". Blogin use markdown format to write blog. 
3. `blogin update`
4. `blogin server`

Usage
---
blogin command:

    deploy     Deploy static files to git server, like github.
    server     Start a server on http://localhost:3000 .
    update     Generate the static files.
    post       Create post, show post tree, delete post.
    page       Create page, show page tree, delete page.
    init       Init the blog directory.
    help       Display help.
    trash      Show trash tree, recovery deleted file.

Custom theme
---
Edit the file at "blogindir/public/" to custom your own theme.


Please feel free to use blogin.

Update
---

* 0.1.0
* 0.1.1 <br/>bug fix.
* 0.2.0 <br/>support delete post/page.
  <br/> support post/page tree view, when using `blogin post` / `blogin page`.![image](./other/post_command.png)
  <br/> new command `blogin trash`, to view or recovery deleted file. see `blogin help trash` for detail.
  <br/> support `blogin help commandName`.
  <br/> bug fix.
* 0.2.1 <br/> bug fix #1.
* 0.2.2 <br/> fix bug when create new page.

