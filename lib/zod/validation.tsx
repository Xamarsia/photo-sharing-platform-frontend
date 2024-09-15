import { SafeParseReturnType } from "zod";


export function getValidationErrors(response: SafeParseReturnType<any, any>): Map<string | number, string> {
    const errorsMap: Map<string | number, string> = new Map();
    try {
        if (!response.success) {
            const { errors } = response.error;

            errors.forEach((error) => {
                errorsMap.set(error.path[0], error.message);
            });
        }

        return errorsMap;
    } catch (error) {
        console.error(error);
        throw new Error("[getValidationErrors]: Form validation failed!");
    }
}
