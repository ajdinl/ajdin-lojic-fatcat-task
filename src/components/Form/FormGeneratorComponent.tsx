import { FormGeneratorProps } from '@homework-task/types/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FormGeneratorComponent = <T extends FieldValues>({
    useMutation,
    validationSchema,
    renderForm,
    successMessage,
    setIsSubmitting,
}: FormGeneratorProps<T> & {
    setIsSubmitting: (isSubmitting: boolean) => void;
}) => {
    const methods = useForm<T>({
        resolver: zodResolver(validationSchema),
        mode: 'onSubmit',
    });
    const { handleSubmit, reset } = methods;

    const mutation = useMutation();

    const onSubmit: SubmitHandler<T> = (data) => {
        setIsSubmitting(true);
        mutation.mutate(data, {
            onSuccess: () => {
                if (successMessage) {
                    toast.success(successMessage);
                }
                reset();
                setIsSubmitting(false);
            },
            onError: (error) => {
                if (error instanceof Error) {
                    toast.error(error.message);
                } else {
                    toast.error('An unknown error occurred');
                }
                setIsSubmitting(false);
            },
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {renderForm(methods)}
            </form>
            <ToastContainer />
        </>
    );
};
