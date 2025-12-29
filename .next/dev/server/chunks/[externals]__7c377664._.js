module.exports = [
"[externals]/@sapience/sdk [external] (@sapience/sdk, esm_import, [project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/@sapience/sdk [external] (@sapience/sdk, esm_import, [project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk)");
    });
});
}),
"[externals]/viem [external] (viem, esm_import, [project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[externals]_viem_a65dcc9e._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/viem [external] (viem, esm_import, [project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem)");
    });
});
}),
];