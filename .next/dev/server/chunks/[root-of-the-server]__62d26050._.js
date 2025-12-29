module.exports = [
"[externals]/@sapience/sdk [external] (@sapience/sdk, esm_import, [project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[externals]_@sapience_sdk_0513d07b._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/@sapience/sdk [external] (@sapience/sdk, esm_import, [project]/node_modules/.pnpm/@sapience+sdk@0.0.1_@tansta_15d88eeafa91732f172c90958de039d3/node_modules/@sapience/sdk)");
    });
});
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/index.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/node_modules__pnpm_9096a015._.js",
  "server/chunks/3038c_viem__esm_utils_35b526a7._.js",
  "server/chunks/3038c_viem__esm_errors_b4a1b897._.js",
  "server/chunks/3038c_viem__esm_actions_b6a6fd91._.js",
  "server/chunks/3038c_viem__esm_clients_176fa251._.js",
  "server/chunks/3038c_viem__esm_index_9d2a02ac.js",
  "server/chunks/3038c_viem__esm_3a407d8f._.js",
  "server/chunks/6ff39_@noble_curves_esm_88a9ed97._.js",
  "server/chunks/35308_ox__esm_e7ce9d57._.js",
  "server/chunks/node_modules__pnpm_e7f98200._.js",
  "server/chunks/[externals]_node:crypto_c20cce38._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/index.js [app-route] (ecmascript)");
    });
});
}),
];