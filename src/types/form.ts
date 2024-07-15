import { UseFormReturn, FieldValues } from 'react-hook-form';
import { UseMutationResult } from 'react-query';
import { ZodSchema } from 'zod';

export interface FormGeneratorProps<T extends FieldValues> {
    useMutation: () => UseMutationResult<any, any, T, unknown>;
    validationSchema: ZodSchema<T>;
    renderForm: (methods: UseFormReturn<T>) => React.ReactNode;
    successMessage?: string;
}
