import * as z from 'zod';

export const validate =
  (schema, source = 'query') =>
  (req, res, next) => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      return res.status(400).json({
        error: 'Invalid input',
        details: result.error.issues.map(issue => issue.message),
      });
    }

    req.validated = result.data;
    next();
  };

export const cardsQuery = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name cannot be empty')
    .max(20, 'Please put a valid pokemon name (20 characters max)')
    .optional(),
});
