import { useRef, useCallback } from 'react'

export function useHorizontalScroll() {
    const elRef = useRef<HTMLDivElement | null>(null)

    const setRef = useCallback((node: HTMLDivElement | null) => {
        if (node) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) return
                e.preventDefault()
                node.scrollLeft += e.deltaY
            }
            node.addEventListener('wheel', onWheel, { passive: false })
            elRef.current = node

            // Cleanup function for when node changes or unmounts
            return () => {
                node.removeEventListener('wheel', onWheel)
            }
        }
    }, [])

    return setRef
}
