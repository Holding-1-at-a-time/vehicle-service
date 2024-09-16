import { v } from "convex/values";
import { query } from "./_generated/server";

export const listAppointmentsByDetailer = query({
  args: { detailerId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("appointments")
      .filter((q) => q.eq(q.field("detailerId"), args.detailerId))
      .collect();
  },
});

export const listAppointmentsByClient = query({
  args: { clientId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("appointments")
      .filter((q) => q.eq(q.field("clientId"), args.clientId))
      .collect();
  },
});