# Next.js 15 Image Optimization Issue with Remote URLs and Relative Paths

This repository demonstrates a bug in Next.js 15 where image optimization doesn't work correctly with remote URLs that use relative paths within a nested directory structure.  The `Image` component fails to properly resolve and optimize the image.

## Bug Description
When using the Next.js `Image` component with a remote URL pointing to an image located in a subdirectory of a remote server, the image optimization features (like resizing and format conversion) may not function as expected.  This issue specifically arises when the URL contains relative paths. 

## Steps to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that the image is not optimized (larger file size, possibly incorrect format).

## Solution
The solution is to use absolute URLs for the `src` attribute of the `Image` component.  This ensures that Next.js can correctly resolve and optimize the image regardless of its location on the remote server.  The fixed code is included in `bugSolution.js`.

## Technologies Used
- Next.js 15
- React