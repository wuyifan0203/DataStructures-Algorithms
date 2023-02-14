import typescript from "@rollup/plugin-typescript";

export default {
    input: "./packages/index.js",
    output: [
        // 两种打包形式
        // 第一种 cjs -> commonjs
        {
            format:"cjs",
            file:'examples/dataStructures-algorithms.cjs.js'
        },
        // 第二种 es module
        {
            format:'es',
            file:'examples/dataStructures-algorithms.esm.js'
        }
    ],
    // plugins :[
    //     typescript()
    // ]
};