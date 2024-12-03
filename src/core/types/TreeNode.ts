export type TreeNode = {
  id: string;
  fields: {
    label: string;
    url: string;
    isEdited: boolean;
  };
  children: TreeNode[];
};

export type TreeData = TreeNode[][];
