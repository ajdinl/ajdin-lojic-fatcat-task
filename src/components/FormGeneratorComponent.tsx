import { FormGeneratorProps } from '@homework-task/types/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

export const FormGeneratorComponent = <T extends FieldValues>({
    useMutation,
    validationSchema,
    renderForm,
    successMessage,
}: FormGeneratorProps<T>) => {
    const methods = useForm<T>({
        resolver: zodResolver(validationSchema),
        mode: 'onSubmit',
    });
    const { handleSubmit, reset } = methods;

    const mutation = useMutation();

    const onSubmit: SubmitHandler<T> = (data) => {
        mutation.mutate(data, {
            onSuccess: () => {
                if (successMessage) {
                    alert(successMessage);
                }
                reset();
            },
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {renderForm(methods)}
            {mutation.isError && (
                <p className="text-red mt-2">
                    Error: {mutation.error?.message}
                </p>
            )}
        </form>
    );
};
