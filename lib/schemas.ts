import { z } from 'zod';

// Define a recursive schema for content
const contentSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    type: z.string().min(1, {
      message: 'Must have a type.',
    }),
    content: z.union([
      z
        .array(z.any())
        .nonempty({ message: 'Must contain content.' })
        .refine(
          (items) =>
            items.length > 0 &&
            items.some(
              (item) =>
                item.type !== 'paragraph' ||
                (item.content && item.content.length > 0)
            ),
          {
            message: 'Article must have content!',
          }
        ),
      z
        .array(z.lazy(() => contentSchema))
        .nonempty({ message: 'Must contain content.' }),
    ]),
  })
);

export const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Must have a title.',
  }),
  content: contentSchema,
});
