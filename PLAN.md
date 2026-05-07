# Build Plan: DriveEase CRM System

**Client:** DriveEase Rentals
**Total action points:** 8

This plan was generated from the approved action points. Items are ordered by build dependency — start at the top and work down.

---

### 1. Develop Fleet Management Module

_Category: `feature` · Priority: `high`_

Create a module for managing the car fleet including car profiles with details such as registration, model, year, location, availability status, and service history.

**Acceptance criteria:**
- System allows creation of car profiles with all specified details.
- Car availability status updates automatically based on booking and service entries.
- Service history is logged and viewable for each car.

---

### 2. Build Booking System with Availability Calendar

_Category: `feature` · Priority: `high`_

Develop a booking system that prevents double bookings, allows staff to check car availability on specific dates, and create new bookings.

**Acceptance criteria:**
- System shows a calendar view with car availability on selected dates.
- Double bookings are not allowed; system blocks conflicting bookings.
- Bookings record customer details and car assignment.

---

### 3. Implement Customer Management Module

_Category: `feature` · Priority: `high`_

Develop a CRM module with customer profiles, document uploads, rental history, and notes.

**Acceptance criteria:**
- System allows adding customer profiles with required personal and document details.
- Document uploads (CNIC and license) are attached to profiles.
- Historical rental data can be viewed on profiles.

---

### 4. Design Branch-Level Access Control

_Category: `infra` · Priority: `high`_

Create a system where each branch views and manages its own data while allowing the owner to access all branches' data collectively.

**Acceptance criteria:**
- System splits data visibility by branch, restricting access to respective branch's staff.
- Owner account has permissions to view and manage data across all branches.

---

### 5. Develop Payments and Invoicing Module

_Category: `feature` · Priority: `medium`_

Create a system to record manual payments (cash, bank transfer, Easypaisa) against bookings, generate invoices, and provide daily/monthly financial reports.

**Acceptance criteria:**
- System records payment methods and amounts against bookings accurately.
- Invoice generation is possible for each transaction.
- Summary reports are available for daily and monthly collections.

---

### 6. Create Vehicle Handover and Return Checklist

_Category: `ui` · Priority: `medium`_

Design a mobile-friendly checklist for staff to complete during vehicle handover and return, including condition checks and photo uploads.

**Acceptance criteria:**
- Checklists are accessible and usable on mobile devices.
- Staff can fill in details such as fuel level, mileage, and condition on checklists.
- Photos can be uploaded as part of the checklist process.

---

### 7. Implement Public Booking Inquiry Form

_Category: `feature` · Priority: `medium`_

Develop a simple form on the client's website for collecting booking inquiries, which automatically creates leads in the CRM.

**Acceptance criteria:**
- Form is integrated on the website and captures required customer inquiry details.
- Submitted inquiries automatically become leads within the CRM.
- Staff can view and process inquiries into bookings.

---

### 8. Design Owner Dashboard and Reporting Suite

_Category: `feature` · Priority: `medium`_

Develop a dashboard for the owner to view daily operational data and access detailed weekly and monthly reports on performance, revenues, and customer metrics.

**Acceptance criteria:**
- Dashboard shows daily metrics about active cars, cash collection, and return schedules.
- Reports provide weekly and monthly analytics on revenues, branch performance, and customer activity.

