import { z } from "zod";

export const footerFieldSchema = z.object({
  name: z.string(),
  type: z.string(),
  placeholder: z.string(),
  required: z.boolean().optional(),
});

export const footerSocialLinkSchema = z.object({
  platform: z.string(),
  url: z.string().url(),
  icon: z.string(),
});

export const footerMenuItemSchema = z.object({
  text: z.string(),
  url: z.string().url(),
});

export const footerDocSchema = z.object({
  title: z.string(),
  description: z.string(),
  fields: z.array(footerFieldSchema),
  checkbox: z.object({
    text: z.string(),
  }),
  socialLinks: z.array(footerSocialLinkSchema).optional(),
  footerMenu: z.array(footerMenuItemSchema).optional(),
});

export type FooterDoc = z.infer<typeof footerDocSchema>;
export type FooterField = z.infer<typeof footerFieldSchema>;
export type FooterSocialLink = z.infer<typeof footerSocialLinkSchema>;
export type FooterMenuItem = z.infer<typeof footerMenuItemSchema>;
