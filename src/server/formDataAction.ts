import { ZodSchema } from 'zod';

export const formDataAction = <T, R>(schema: ZodSchema<T>, cb: (values: T) => R) => {
    return (formData: FormData) => {
        const unsafe = Object.fromEntries([...formData.entries()]);

        const values = schema.parse(unsafe);

        return cb(values);
    };
};
