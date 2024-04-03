## Recruitment Task

This project is a recruiting assignment that I am doing to get a job as a Junior React Developer.

## Links

[App deployment ✨](https://mediporta-app.surge.sh)

[Storybook deployment 💄](https://mediporta-storybook.surge.sh)

## Project Decisions

- Vite as a bundler as CRA is deprecated
- Implemented basis of Atomic Design to keep the components maintainable and reusable
- Business logic and state management decoupled by using custom hook and developing components in isolation (Storybook)
- State management handled by simple `React.useState` hooks as providing separate state management lib like Redux is overkill for project this size
- Leverage browser built-in fetch API to do not increase bundle size, as we are making only two requests

## To Be Improved

- Replacing `React.useState` by `React.useReducer` to prevent unnecessary re-renders and improve testability
- Adding some tests or business logic
- Adding more stories

## How To Run The Project

1. Install NPM packages `npm install`
2. Run dev server `npm start`
3. Run Storybook (optional) `npm run storybook`

## Project Requirements

- ✅ Paginated table or list of tags with the count of associated posts (count field)
- ✅ Number of items per page configurable through a numeric field above the table/list
- ✅ Field and sorting direction selection through a custom UI element
- ✅ Prepare appropriate states for loading data and error handling during retrieval
- ✅ Utilize an existing UI component library, e.g., MUI
- ✅ Use existing state management and data fetching libraries (choice depending on project complexity and for quick task completion)
- ✅ Prepare Storybook for showcasing used application components
- ✅ Publish the solution in a GitHub repository
- ✅ The entire project should only run after executing `npm ci`, `npm start`, `npm run storybook` commands.
