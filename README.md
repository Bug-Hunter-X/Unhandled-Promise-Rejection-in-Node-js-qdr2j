# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  The `bug.js` file contains code that creates a promise; this promise is purposely set to reject without proper error handling.  The `bugSolution.js` file shows how to correctly handle this rejection using `.catch()`.

## How to reproduce the bug

1.  Clone this repository.
2.  Run `node bug.js`.
3.  Observe the lack of error output and the potential application instability.

## Solution

The solution involves adding a `.catch()` block to the promise chain, as shown in `bugSolution.js`. This ensures any errors during promise execution are handled gracefully and prevent unexpected application crashes.

## Additional Notes

Unhandled promise rejections are problematic because they can silently cause applications to fail.  Always handle promise rejections using `.catch()` to ensure your application remains stable and predictable.