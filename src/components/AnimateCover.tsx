"use client";

import React, { FC, PropsWithChildren, Children, useCallback, DetailedHTMLProps, HTMLAttributes, BlockquoteHTMLAttributes, memo } from "react";
import { TAnimatTransitionName } from "@/types";

const _AnimateCover: FC<PropsWithChildren & { animName?: TAnimatTransitionName, delay?: number, duration?: number, easing?: string } & Partial<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>> = ({
    children,
    animName,
    className,
    easing,
    delay,
    duration
}): JSX.Element => {
        return (
            <div
                className={`${className || ''} `.trim()}
                data-anim-container >
                {/* <div> */}

                {Children.map(
                    children,
                    useCallback((_child: any, i: number) => {
                        if (!_child?.props) {
                            return _child;
                        }
                        const newChild = { ..._child };
                        const { style, ...childprops } = {
                            ...newChild.props,
                            className: newChild.props.className || "",
                            style: newChild.props.style || {},
                        };
                        childprops.className += ` trans__${animName || "fadeInUp"}`;
                        childprops.className = childprops.className.trim();

                        if (!childprops['data-anim_delay']) {
                            style.transitionDelay = `${delay ?? (i * 0.15).toFixed(2)}s`;
                        } else {
                            style.transitionDelay = `${childprops['data-anim_delay']}s`;
                            delete childprops['data-anim_delay'];
                        }

                        if (!childprops['data-anim_duration']) {
                            style.transitionDuration = `${duration || 0.75}s`;
                        } else {
                            style.transitionDuration = `${childprops['data-anim_duration']}s`;
                            delete childprops['data-anim_duration'];
                        }

                        if (!childprops['data-anim_easing']) {
                            style.transitionTimingFunction = `${easing || 'cubic-bezier(0.5, -0.25, .25, 1.125)'
                                }`;
                        } else {
                            style.transitionTimingFunction = `${childprops['data-anim_easing']}`;
                            delete childprops['data-anim_easing'];
                        }

                        newChild.props = { ...childprops, ...(Object.keys(style).length < 1 ? {} : { style }) };
                        // console.log(newChild.props, "child called");

                        return newChild;
                    }, [])
                )}
                {/* </div> */}
            </div>
        );
    };

export const AnimateCover = memo(_AnimateCover);
