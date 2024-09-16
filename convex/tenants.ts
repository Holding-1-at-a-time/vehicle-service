import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const listTenants = query({
  handler: async (ctx) => {
    return await ctx.db.query("tenants").collect();
  },
});

export const createTenant = mutation({
  args: { name: v.string(), plan: v.string() },
  handler: async (ctx, args) => {
    const tenantId = await ctx.db.insert("tenants", {
      name: args.name,
      plan: args.plan,
    });
    return tenantId;
  },
});

export const getTenantById = query({
  args: { tenantId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.tenantId);
  },
});

export const updateTenantPlan = mutation({
  args: { tenantId: v.string(), newPlan: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.tenantId, { plan: args.newPlan });
  },
});

export const listTenantUsers = query({
  args: { tenantId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("tenantId"), args.tenantId))
      .collect();
  },
});

export const listTenantAppointments = query({
  args: { tenantId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("appointments")
      .filter((q) => q.eq(q.field("tenantId"), args.tenantId))
      .collect();
  },
});
