import { State, TreeNode, TreeNodeType } from '@/store/tree';
import { setParent } from '@/store/tree/actions';

export const createMock = (state: State) =>
  setParent(
    new TreeNode({
      node: {
        name: 'vuerd-app',
        open: true,
        parent: state.root,
        children: [
          new TreeNode({
            node: {
              name: '.git',
            },
          }),
          new TreeNode({
            node: {
              name: 'node_modules',
            },
          }),
          new TreeNode({
            node: {
              name: 'public',
              open: true,
              children: [
                new TreeNode({
                  node: {
                    name: 'static',
                    children: [
                      new TreeNode({
                        node: {
                          name: 'logo.png',
                          type: TreeNodeType.file,
                        },
                      }),
                      new TreeNode({
                        node: {
                          name: 'mov_bbb.mp4',
                          type: TreeNodeType.file,
                        },
                      }),
                      new TreeNode({
                        node: {
                          name: 'flower.mp4',
                          type: TreeNodeType.file,
                        },
                      }),
                    ],
                  },
                }),
                new TreeNode({
                  node: {
                    name: 'index.html',
                    type: TreeNodeType.file,
                  },
                }),
              ],
            },
          }),
          new TreeNode({
            node: {
              name: '.gitignore',
              type: TreeNodeType.file,
            },
          }),
          new TreeNode({
            node: {
              name: 'README.md',
              type: TreeNodeType.file,
            },
          }),
          new TreeNode({
            node: {
              name: 'package.json',
              type: TreeNodeType.file,
            },
          }),
          new TreeNode({
            node: {
              name: 'yarn.lock',
              type: TreeNodeType.file,
            },
          }),
        ],
      },
    })
  );
