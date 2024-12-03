import classNames from "classnames";
import React, { forwardRef, HTMLAttributes } from "react";

// import { Action, Handle, Remove } from "../../../../components";
import { Handle, Remove } from "@/lib/dnd-kit/global/Item";
import styles from "./TreeItem.module.css";
import { CustomTreeItem } from "./CustomTreeItem";
import { CustomTreeWrapper } from "./CustomTreeWrapper";

export interface Props extends Omit<HTMLAttributes<HTMLLIElement>, "id"> {
  treeItem: any;
  childCount?: number;
  clone?: boolean;
  collapsed?: boolean;
  depth: number;
  disableInteraction?: boolean;
  disableSelection?: boolean;
  ghost?: boolean;
  handleProps?: any;
  indicator?: boolean;
  indentationWidth: number;
  value: string;
  onCollapse?(): void;
  onRemove?(): void;
  wrapperRef?(node: HTMLLIElement): void;
}

export const TreeItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      treeItem,
      clone,
      depth,
      disableSelection,
      disableInteraction,
      ghost,
      handleProps,
      indentationWidth,
      indicator,
      onRemove,
      style,
      value,
      wrapperRef,
      dataItems,
      handleChangeDataItem,
      ...props
    },
    ref
  ) => {
    return (
      <li
        className={classNames(
          styles.Wrapper,
          clone && styles.clone,
          ghost && styles.ghost,
          indicator && styles.indicator,
          disableSelection && styles.disableSelection,
          disableInteraction && styles.disableInteraction
        )}
        ref={wrapperRef}
        style={
          {
            "--spacing": `${indentationWidth * depth}px`,
          } as React.CSSProperties
        }
        {...props}
      >
        <div className={styles.TreeItem} ref={ref} style={style}>
          <CustomTreeWrapper
            handle={<Handle {...handleProps} />}
            onRemove={onRemove}
            dataItems={dataItems}
            value={value}
            handleChangeDataItem={handleChangeDataItem}
          />

          {/* <CustomTreeItem
            handle={<Handle {...handleProps} />}
            onRemove={onRemove}
          /> */}
        </div>
      </li>
    );
  }
);
