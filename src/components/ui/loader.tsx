
import { Loader2 } from "lucide-react";

export const Loader = () => {
    return (
        <div className="flex h-[100vh] w-full items-center justify-center bg-background">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
    );
};
