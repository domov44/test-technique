type Props = {
    isLoading: boolean;
    error: Error | null;
    data: any | undefined;
    children: React.ReactNode;
};

export function EntityLayout({ isLoading, error, data, children }: Props) {
    if (isLoading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
    if (!data) return <div className="text-center mt-10">Not found</div>;
    return <>{children}</>;
}