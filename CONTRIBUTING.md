# Contributing to Miligram Admin Dashboard

Can you contributing to Miligram? **This you can help**.

Take some minutes of your life for read this document, and see how can easy is contribute with few steps.


## Issues

The issues tab is the preferred channel for [report bugs](#bug-reports), [new features request](#feature-requests) and submitting [pull request](#pull-requests) for any issue.

* Please **do not** use the issue tracker for personal support requests.  Please [email me](mailto:mazipanneh@gmail.com) or [send me a tweet](https://twitter.com/Maz_Ipan) as they are better places to get help.

* Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.


## Bug reports

** Bug ** is a demostrable problem caused by the code in the repository. When you report a bug is very useful for us, so thank you!

For bug report the steps are:

1. Check if the issue is not reported yet,  **use the GitHub issue search**
2. **Check if the issue has been fixed** , try to reproduce in master or development branch of repository.
3. **Isolate the problem** &mdash; ideally create a [reduced test case](https://css-tricks.com/reduced-test-cases/).

## New feature requests

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to *you* to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

**Please ask first** before embarking on any significant pull request (e.g. implementing features, refactoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

Please adhere to the [coding guidelines](#code-guidelines) used throughout the project (indentation, accurate comments, etc.) and any other requirements (such as test coverage).

Adhering to the following process is the best way to get your work included in the project:

1. [Fork](https://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/<repo-name>
   # Navigate to the newly cloned directory
   cd <repo-name>
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/mazipan/vue-currency-filter
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Make sure to update, or add to the tests when appropriate. **Patches and
   features will not be accepted without tests.** Run `npm test` to check that
   all tests pass after you've made changes.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description against the `master` branch.

## Code guidelines

### HTML

 - Use tags and elements appropriate for an HTML5 doctype (e.g., self-closing tags).

### JS

  -  No semicolons (in client-side JS)
  -  2 spaces (no tabs)
  -  Don't use jQuery (no "$" allowed)


## License

By contributing your code, you agree to license your contribution under the [MIT License](LICENSE).
