# Teach Access Tutorial

This resource is part of the [Teach Access Initiative](http://teachaccess.org/), and provides best practices for making 
accessible mobile and web apps. You can view the tutorial at <https://teachaccess.github.io/tutorial/>.

---

This tutorial was built with [exerslide](https://facebookincubator.github.io/exerslide/).

The content is located in `slides/`. You can make changes to the content 
without having to generate the presentation, just by cloning this repository 
and editing the files in `slides/`.

---

If you want to generate the presentation on your compute, you need to

1. Install exerslide globally. Exerslide is using Node, you can install it via 
   [npm](https://www.npmjs.com/):

   ```
   npm install -g exerslide-cli
   ```
   or
   ```
   sudo ln -s `which nodejs` /usr/bin/node
   sudo install -g exerslide-cli
   ```
   If using Debian/Ubuntu, you first need to create a symlink for the 'node' command.
   This is needed because in the node was changed to nodejs to prevent name collisions for
   the Linux OS. The second command allows writing to system library folders Which is required
   for the global install to work.

2. Clone this repository

   ```
   git clone https://github.com/teachaccess/tutorial.git
   ```

3. Install the project's dependencies via

   ```
   npm install
   ```

Now you can generate the presentation. `exerslide serve` will start local 
webserver and automatically regenerate the presentation when you update slides.
