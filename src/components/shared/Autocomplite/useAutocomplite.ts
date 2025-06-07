import { useState, useRef, useEffect, useCallback } from "react";

interface UseAutocompleteProps<T> {
    options: T[];
    onChange: (value: string) => void;
    onClick: (option: T) => void;
    maxItems: number;
}

export const useAutocomplete = <T,>({
    options,
    onChange,
    onClick,
    maxItems = 5,
}: UseAutocompleteProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState(options)
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        setFilteredOptions(options.slice(0, maxItems))
    },[options, maxItems])

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClick = useCallback(
        (value: T) => {
            onClick(value);
            setIsOpen(false);
        },
        [onClick]
    )

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
            setIsOpen(true);
        }, 
        [onChange]
    );

    const handleInputFocus = useCallback(() => {setIsOpen(true)}, [])

    const handleClickOutside = (e: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };


    return {
        isOpen,
        setIsOpen,
        wrapperRef,
        filteredOptions,
        handleClick,
        handleInputChange,
        handleInputFocus,
    };
};