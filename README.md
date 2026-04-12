# Oda — Contemporary Furniture Store

A modern furniture e-commerce app built with React, Vite, and AWS Amplify Gen 2.

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Backend:** AWS Amplify Gen 2 (AppSync GraphQL, DynamoDB, Cognito)
- **Styling:** Custom CSS with BEM naming, CSS custom properties
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router v7

## Upcoming Features

### Product variant awareness

- [ ] Product detail page
- [ ] Variant model in schema (size, color, material)
- [ ] Variant selector UI

### Shopping cart + checkout

- [ ] Cart state management and add-to-cart interaction
- [ ] Cart item quantity controls and order summary
- [ ] Checkout flow and payment integration

### Robust filtering with URL state

- [ ] Price range, rating, and in-stock filters
- [ ] Sort options (price, rating, newest)
- [ ] Sync filter state to URL search params for shareable links

## What's Been Done

- Product CRUD with real-time updates via Amplify `observeQuery`
- Public API key auth for browsing; Cognito auth for account/wishlist pages
- Client-side routing with layout route pattern (`/`, `/account`, `/cart`, `/wishlist`)
- `RequireAuth` component and `useAuth` hook for shared auth logic
- Seed script with 50 products across 5 categories
- Transparent-to-frosted navbar on scroll, hero with animated heading
- Responsive product grid (1/2/4 columns), category filter nav
- Centralized TypeScript interfaces in `src/types/`
