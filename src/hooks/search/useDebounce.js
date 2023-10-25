import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { NameFilter } from "store";

export default function useDebounce() {
    const [search,] = useRecoilState(NameFilter)
    const [debouncedValue, setDebouncedValue] = useState(search)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(search)
        }, 300)

        return () => clearTimeout(timeoutId)

    }, [search])

    return debouncedValue
}