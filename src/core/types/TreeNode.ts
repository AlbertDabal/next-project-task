export type TreeNode = {
  id: string;
  collapsed?: boolean;
  fields: {
    label: string;
    url: string;
    isEdited: boolean;
  };
  children: TreeNode[];
};

export type TreeData = TreeNode[][];
