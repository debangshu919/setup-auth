# Contributing to Authzey

We would love for you to contribute to Authzey and help make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:

- [Question or Problem?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)
- [Submission Guidelines](#submit)
- [Development Setup](#development)
- [Coding Rules](#rules)
- [Commit Message Guidelines](#commit)

## <a name="question"></a> Got a Question or Problem?

If you have questions about how to use Authzey, please open a [GitHub Discussion](https://github.com/debangshu919/authzey/discussions) or reach out via GitHub Issues.

## <a name="issue"></a> Found a Bug?

If you find a bug in Authzey, you can help us by [submitting an issue](#submit-issue) to our [GitHub Repository](https://github.com/debangshu919/authzey). It would be even better if you can [submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a Feature?

You can _request_ a new feature by [submitting an issue](#submit-issue) to our GitHub Repository. If you would like to _implement_ a new feature, please consider the following:

- For a **Major Feature**, first open an issue and outline your proposal so that it can be discussed. This allows us to coordinate efforts and ensure the feature aligns with the project's direction.
- **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the issue tracker to check if an issue for your problem already exists.

When submitting a bug report, please include:

- Version of Authzey used
- Node.js version
- Operating system
- Steps to reproduce the issue
- Expected vs actual behavior

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR), consider the following guidelines:

1. Search [GitHub Pull Requests](https://github.com/debangshu919/authzey/pulls) for an open or closed PR that relates to your submission.
2. Fork the repository.
3. Create a new branch for your changes:

   ```shell
   git checkout -b my-fix-branch main
   ```

4. Make your changes, **including appropriate test cases** if applicable.
5. Follow our [Coding Rules](#rules).
6. Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit):

   ```shell
   npm run commit
   ```

7. Push your branch to GitHub:

   ```shell
   git push origin my-fix-branch
   ```

8. Open a Pull Request to `main`.

If changes are requested:

- Make the required updates.
- Rebase your branch if needed and force push:

  ```shell
  git rebase main -i
  git push -f
  ```

#### After Your Pull Request is Merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main repository:

```shell
git push origin --delete my-fix-branch
git checkout main -f
git branch -D my-fix-branch
git pull --ff upstream main
```

## <a name="development"></a> Development Setup

### Prerequisites

- Node.js `>=18`
- npm (comes with Node.js)

### Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/debangshu919/authzey.git
   cd authzey
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

3. Run the CLI in development mode:

   ```shell
   npm run dev
   ```

### Common Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Run the CLI in development mode              |
| `npm run build`     | Build the project for production             |
| `npm run lint`      | Lint the codebase using Biome                |
| `npm run format`    | Format the codebase using Biome              |
| `npm run test`      | Run tests                                    |
| `npm run type-check`| Run TypeScript type checking                 |
| `npm run commit`    | Create a commit using Commitizen             |

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind:

- All features or bug fixes **should be tested** when applicable.
- We use [Biome](https://biomejs.dev/) for linting and formatting. Run `npm run format` before committing.
- Follow TypeScript best practices and ensure `npm run type-check` passes.

## <a name="commit"></a> Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) for our commit messages. This leads to more readable messages and enables automatic changelog generation.
> [!TIP]
> We recommend using the built-in Commitizen setup for creating commits:
> 
> ```shell
> npm run commit
> ```
>
> This will guide you through creating a properly formatted commit message.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

The **header** is mandatory and the **scope** is optional.

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files

### Subject

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No period (.) at the end

### Examples

```
feat: add support for clerk auth provider
fix: resolve config file parsing error
docs: update installation instructions
refactor: simplify provider detection logic
```

### Thank you for contributing to Authzey! 💜