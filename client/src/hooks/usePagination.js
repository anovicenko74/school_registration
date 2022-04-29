import {useMemo} from "react";
import { getPagesArray } from "../utils/pages";

export const usePagination = (totalPages) => {
    const array = useMemo(() => {
        let result = []
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        }
        return result
    }, [totalPages])
    return array
}
