# Github User Search ReactJS App

## Getting Started

1. Install node 14 LTS
2. Install create-react-app `npm install -g create-react-app`

- css provided (global styles, styled components)
- folders/files already setup
- all imports included (warnings)
- index.js for easier imports

## createContext()

[docs](https://reactjs.org/docs/context.html#when-to-use-context)
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // return a styled **component**
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
// use a named import
// follow the docs on getting certain icons
import { FiUsers, FiUserPlus } from "react-icons/fi";
// use the icon as a component
<FiUsers className="nameOfTheClass"> </FiUsers>;
```

## React Router Dom

version used - "react-router-dom": "^5.2.0",

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/tranquangkhai2612)
- [Repos](https://api.github.com/users/tranquangkhai2612/repos)
- [Followers](https://api.github.com/users/tranquangkhai2612/followers)
- [Rate Limit](https://api.github.com/rate_limit)

## Auth0

## Deployment

## Additional Info
