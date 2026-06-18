# Canonical Product Definition: Farms Empire Web Platform

## 1. Product Overview

The Farms Empire Web Platform is a dual-purpose web application consisting of a highly optimized, SEO-friendly public marketing website and a secure, role-restricted administrative dashboard, designed for Farms Empire's internal teams and the global public. It solves the problem of promoting Africa's communal agriculture movement and UN SDG 2 (Zero Hunger) initiatives—driven by the "Communities Grow Empires" philosophy—while empowering internal staff to manage dynamic content, user accounts, and public inquiries without requiring codebase modifications.

## 2. User Roles & Permissions

- **Admin (Super Admin):** Has full system access including Create, Read, Update, and Delete (CRUD) capabilities for Users, Blogs, Careers, Projects, and Contact Submissions. Can modify all user fields, change user roles, and reset any user's password.
- **Manager:** Has restricted access allowing them to Read Users and reset passwords _only_ for non-Admin users. They possess full CRUD access to Blogs, Careers, Projects, and Contact Submissions, but are strictly blocked from creating, deleting, or changing the roles of Users.

## 3. Core Features

- **SEO-Optimized Public Marketing Site:** Delivers statically generated (SSG) informational pages and server-side rendered (SSR) dynamic pages detailing the mission, communal farming model, projects, and UN SDG 2 impact.
- **Dynamic Content Routing:** Automatically generates unique, URL-friendly slugs for Blogs, Careers, and Projects to enable clean public routing.
- **Public Engagement Forms:** Captures categorized contact form submissions and newsletter/publication subscriptions directly into the backend database without dispatching automated emails.
- **Administrative Dashboard Overview:** Displays quick, cached statistics (Total Blogs, Open Careers, Unread Contacts, Total Users) to minimize database read loads.
- **Role-Based User Management:** Provides a secure interface for Admins to manage all users and for Managers to view users and reset non-admin passwords, with UI elements dynamically hidden based on permissions.
- **Rich Text Content Management:** Offers CRUD interfaces for Blogs, Careers, and Projects utilizing a TipTap WYSIWYG editor with direct Cloudinary image integration.
- **Contact Inbox:** Allows internal teams to view, manage, mark as read, and archive public contact form submissions.

## 4. Non-Negotiable Business Logic Rules

- **Direct Publishing:** Managers can publish Blogs, Careers, and Projects directly to the live site without requiring an Admin approval workflow.
- **Slug Generation:** Duplicate titles for Blogs, Careers, and Projects must automatically append incremental numbers (e.g., `-1`, `-2`) to ensure unique URL slugs.
- **User Deletion Reassignment:** If an Admin deletes a User who authored content, the `author_id` foreign key on existing Blogs and Projects must be reassigned to the deleting Admin.
- **Manager User Restrictions:** Managers can only read user profiles and reset passwords for non-Admin users; all other user modifications are strictly reserved for Admins.
- **Publications & Subscriptions:** Publications are managed as external URL links only (no PDF uploads), and newsletter subscriptions only capture and store user details in the database without triggering automated email dispatches.
- **No External Portals:** The platform is strictly for internal staff and public information; external partners (landowners, investors, community reps) do not have authenticated portals to view project data.

## 5. Technical Constraints

- **Cloudflare Worker Limits:** All backend processing must adhere to strict CPU and memory limits, requiring heavy image processing to be entirely offloaded to Cloudinary to prevent Worker timeouts.
- **Cloudinary Free Tier Protection:** The system must strictly remain within the 25GB storage and 25GB monthly bandwidth limits by implementing aggressive Cloudflare edge caching for all Cloudinary transformation URLs.
- **Turso Database Efficiency:** Drizzle ORM queries must be highly optimized to prevent N+1 issues, and dashboard statistics must be cached to minimize read/write unit consumption.
- **Strict Server-Side RBAC:** All protected dashboard routes and data mutations must be validated server-side using Better Auth sessions; client-side UI restrictions are for UX only and do not constitute security.
- **Rendering Strategy:** Purely static pages must use Static Site Generation (SSG) for maximum SEO priority, while dynamic pages must use Server-Side Rendering (SSR) with aggressive edge caching for speed and freshness.
- **WYSIWYG Error Handling:** TipTap image uploads to Cloudinary must fail gracefully, displaying an error state without interrupting the user's typing or losing drafted content.
