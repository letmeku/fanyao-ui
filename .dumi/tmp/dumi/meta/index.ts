// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { frontmatter as fm0, toc as t0 } from 'F:/workspaces/01_fanyao/fanyao-ui/docs/getting-started.md?type=frontmatter';
import { demoIndex as dmi0 } from 'F:/workspaces/01_fanyao/fanyao-ui/docs/getting-started.md?type=demo-index';
import { frontmatter as fm1, toc as t1 } from 'F:/workspaces/01_fanyao/fanyao-ui/docs/index.md?type=frontmatter';
import { demoIndex as dmi1 } from 'F:/workspaces/01_fanyao/fanyao-ui/docs/index.md?type=demo-index';
import { frontmatter as fm2, toc as t2 } from 'F:/workspaces/01_fanyao/fanyao-ui/src/alert/index.md?type=frontmatter';
import { demoIndex as dmi2 } from 'F:/workspaces/01_fanyao/fanyao-ui/src/alert/index.md?type=demo-index';

export const filesMeta = {
  'docs/getting-started': {
    frontmatter: fm0,
    toc: t0,
    demoIndex: dmi0,
    textGetter: () => import(/* webpackChunkName: "meta__docs" */'F:/workspaces/01_fanyao/fanyao-ui/docs/getting-started.md?type=text'),
  },
  'docs/index': {
    frontmatter: fm1,
    toc: t1,
    demoIndex: dmi1,
    textGetter: () => import(/* webpackChunkName: "meta__docs" */'F:/workspaces/01_fanyao/fanyao-ui/docs/index.md?type=text'),
  },
  'components/alert/index': {
    frontmatter: fm2,
    toc: t2,
    demoIndex: dmi2,
    textGetter: () => import(/* webpackChunkName: "meta__alert" */'F:/workspaces/01_fanyao/fanyao-ui/src/alert/index.md?type=text'),
  },
}

export { tabs as tabsMeta } from './tabs';