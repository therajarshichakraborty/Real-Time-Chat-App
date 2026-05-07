import { z, ZodType } from "zod";

class BaseDTO {
  static schema: ZodType = z.object({});

  static validate<T>(
    this: { schema: ZodType<T> },
    data: unknown
  ): {
    errors: string[] | null;
    value: T | null;
  } {
    const result = this.schema.safeParse(data);

    if (!result.success) {
      return {
        errors: result.error.issues.map((issue) => issue.message),
        value: null,
      };
    }

    return {
      errors: null,
      value: result.data,
    };
  }
}

export default BaseDTO;
