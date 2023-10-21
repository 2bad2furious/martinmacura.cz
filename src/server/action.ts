import { ZodSchema } from 'zod';

export const action = <T, R>(schema: ZodSchema<T>, cb: (values: T) => R) => {
    return (unsafe: T) => {
        const values = schema.parse(unsafe);

        return cb(values);
    };
};
