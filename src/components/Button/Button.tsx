"use client";
import { useButton } from "@react-aria/button";
import classNames from "classnames";
import Link from "next/link";
import { useRef } from "react";
import { AriaButtonProps } from "react-aria";
import styles from "./Button.module.css";

type Props = AriaButtonProps & {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "light" | "link";
  size?: "small" | "medium" | "large";
};
export default function Button(props: Props) {
  let ref = useRef(null);
  let { buttonProps } = useButton(props, ref);

  const { color = "primary", size = "medium", elementType = "button" } = props;

  const Element = props.href ? Link : elementType;

  return (
    <Element
      {...buttonProps}
      ref={ref}
      className={classNames(
        styles["button"],
        styles[`button--${color}`],
        styles[`button--${size}`],
        props.className
      )}
      href={props.href}
    >
      {props.children}
    </Element>
  );
}
