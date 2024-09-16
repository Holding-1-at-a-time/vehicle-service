// NOTE: You can remove this file. Declaring the shape
// of the database is entirely optional in Convex.
// See https://docs.convex.dev/database/schemas.

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    _id: v.id('users'),
    name: v.string(),
    email: v.string(),
    role: v.string(),
    tenantId: v.id('tenants'),
  }).index("by_email", ["email"]),

  tenants: defineTable({
    _id: v.id('tenants'),
    name: v.string(),
    plan: v.string(),
  }),

  services: defineTable({
    _id: v.id('services'),
    name: v.string(),
    description: v.string(),
    basePrice: v.number(),
    tenantId: v.id('tenants'),
  }).index("by_tenant", ["tenantId"]),

  appointments: defineTable({
    _id: v.id('appointments'),
    clientId: v.id('clients'),
    detailerId: v.id('detailers'),
    serviceId: v.id('services'),
    date: v.string(),
    status: v.string(),
    tenantId: v.id('tenants'),
  }).index("by_tenant", ["tenantId"]),
});