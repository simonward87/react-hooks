# Custom React Hooks

This is a small personal collection of custom React hooks. I've tried to make
the functionality as clear as possible by commenting each hook throughout.
Decided to make them public as I felt they may be useful for others with the
same problems to solve.

| Note: |
| :--- |
| The React library is not included — it is assumed that these hooks are always used with a project already using react. |

## useViewport

`useViewport()` returns the current viewport height and width, which can then
be used within components for conditional rendering etc. An event listener is used
to update the values whenever the dimensions change.

### Return value

`[viewportHeight, viewportWidth]`
