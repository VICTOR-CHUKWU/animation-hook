'use client'

import React, { useEffect, useRef, useState } from 'react'

function useScrollReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    useEffect(() => {
        let animAnchors = ref.current?.querySelectorAll(':scope [data-anim-container]');
        // console.log(animAnchors, 'anchor');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // @ts-ignore
                    entry.target.dataset.animate_targets = true
                    observer.unobserve(entry.target)
                }
            })
        });
        animAnchors?.forEach((animAnchor) => {
            observer.observe(animAnchor)

        });
        return () => observer.disconnect()
        // }
    }, []);


    return (
        [ref]
    )
}

export default useScrollReveal