import React from "react";

import styles from "./active-label.module.css"


export interface ActiveLabelIProps {
    children: React.ReactNode
}


export default function ActiveLabel({ children }: ActiveLabelIProps) {
    return (
        <span className={styles.label}>{children}</span>
 )   
} 
