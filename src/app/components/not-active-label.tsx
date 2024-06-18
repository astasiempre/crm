import React from "react";

import styles from "./not-active-label.module.css"


export interface NotActiveLabelIProps {
    children: React.ReactNode
}

export default function NotActiveLabel({ children }: NotActiveLabelIProps) {
    return (
        <span className={styles.label}>{children}</span>
 )   
} 
