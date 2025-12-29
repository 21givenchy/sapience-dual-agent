module.exports = [
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/createClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "rpcSchema",
    ()=>rpcSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/utils/uid.js [app-route] (ecmascript)");
;
;
function createClient(parameters) {
    const { batch, chain, ccipRead, key = 'base', name = 'Base Client', type = 'base' } = parameters;
    const experimental_blockTag = parameters.experimental_blockTag ?? (typeof chain?.experimental_preconfirmationTime === 'number' ? 'pending' : undefined);
    const blockTime = chain?.blockTime ?? 12_000;
    const defaultPollingInterval = Math.min(Math.max(Math.floor(blockTime / 2), 500), 4_000);
    const pollingInterval = parameters.pollingInterval ?? defaultPollingInterval;
    const cacheTime = parameters.cacheTime ?? pollingInterval;
    const account = parameters.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAccount"])(parameters.account) : undefined;
    const { config, request, value } = parameters.transport({
        account,
        chain,
        pollingInterval
    });
    const transport = {
        ...config,
        ...value
    };
    const client = {
        account,
        batch,
        cacheTime,
        ccipRead,
        chain,
        key,
        name,
        pollingInterval,
        request,
        transport,
        type,
        uid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uid"])(),
        ...experimental_blockTag ? {
            experimental_blockTag
        } : {}
    };
    function extend(base) {
        return (extendFn)=>{
            const extended = extendFn(base);
            for(const key in client)delete extended[key];
            const combined = {
                ...base,
                ...extended
            };
            return Object.assign(combined, {
                extend: extend(combined)
            });
        };
    }
    return Object.assign(client, {
        extend: extend(client)
    });
}
function rpcSchema() {
    return null;
} //# sourceMappingURL=createClient.js.map
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/decorators/public.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "publicActions",
    ()=>publicActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAddress$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/ens/getEnsAddress.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAvatar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/ens/getEnsAvatar.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/ens/getEnsName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/ens/getEnsResolver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsText$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/ens/getEnsText.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/call.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createAccessList$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/createAccessList.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createBlockFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/createBlockFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createContractEventFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/createContractEventFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createEventFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/createEventFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createPendingTransactionFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateContractGas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/estimateContractGas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/estimateFeesPerGas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/estimateGas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$fillTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/fillTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getBalance.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlobBaseFee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getBlobBaseFee.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getBlock.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockTransactionCount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getBlockTransactionCount.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getChainId.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getCode.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getContractEvents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getContractEvents.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getEip712Domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getEip712Domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFeeHistory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getFeeHistory.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getFilterChanges.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterLogs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getFilterLogs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getGasPrice.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getLogs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getProof$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getProof.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getStorageAt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getStorageAt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionConfirmations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getTransactionConfirmations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getTransactionReceipt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$multicall$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/multicall.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/readContract.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/simulateBlocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateCalls$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/simulateCalls.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateContract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/simulateContract.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/uninstallFilter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/verifyHash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/verifyMessage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyTypedData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/verifyTypedData.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlockNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/watchBlockNumber.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/watchBlocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchContractEvent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/watchContractEvent.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchEvent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/watchEvent.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchPendingTransactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/watchPendingTransactions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$siwe$2f$verifySiweMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/siwe/verifySiweMessage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransactionSync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/sendRawTransactionSync.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function publicActions(client) {
    return {
        call: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["call"])(client, args),
        createAccessList: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createAccessList$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAccessList"])(client, args),
        createBlockFilter: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createBlockFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createBlockFilter"])(client),
        createContractEventFilter: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createContractEventFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createContractEventFilter"])(client, args),
        createEventFilter: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createEventFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEventFilter"])(client, args),
        createPendingTransactionFilter: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createPendingTransactionFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPendingTransactionFilter"])(client),
        estimateContractGas: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateContractGas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["estimateContractGas"])(client, args),
        estimateGas: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["estimateGas"])(client, args),
        getBalance: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBalance"])(client, args),
        getBlobBaseFee: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlobBaseFee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBlobBaseFee"])(client),
        getBlock: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBlock"])(client, args),
        getBlockNumber: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBlockNumber"])(client, args),
        getBlockTransactionCount: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockTransactionCount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBlockTransactionCount"])(client, args),
        getBytecode: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCode"])(client, args),
        getChainId: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getChainId"])(client),
        getCode: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCode"])(client, args),
        getContractEvents: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getContractEvents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getContractEvents"])(client, args),
        getEip712Domain: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getEip712Domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEip712Domain"])(client, args),
        getEnsAddress: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAddress$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEnsAddress"])(client, args),
        getEnsAvatar: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAvatar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEnsAvatar"])(client, args),
        getEnsName: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEnsName"])(client, args),
        getEnsResolver: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEnsResolver"])(client, args),
        getEnsText: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsText$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEnsText"])(client, args),
        getFeeHistory: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFeeHistory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFeeHistory"])(client, args),
        estimateFeesPerGas: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["estimateFeesPerGas"])(client, args),
        getFilterChanges: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFilterChanges"])(client, args),
        getFilterLogs: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterLogs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFilterLogs"])(client, args),
        getGasPrice: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGasPrice"])(client),
        getLogs: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLogs"])(client, args),
        getProof: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getProof$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProof"])(client, args),
        estimateMaxPriorityFeePerGas: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["estimateMaxPriorityFeePerGas"])(client, args),
        fillTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$fillTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fillTransaction"])(client, args),
        getStorageAt: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getStorageAt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStorageAt"])(client, args),
        getTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTransaction"])(client, args),
        getTransactionConfirmations: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionConfirmations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTransactionConfirmations"])(client, args),
        getTransactionCount: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTransactionCount"])(client, args),
        getTransactionReceipt: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTransactionReceipt"])(client, args),
        multicall: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$multicall$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["multicall"])(client, args),
        prepareTransactionRequest: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prepareTransactionRequest"])(client, args),
        readContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readContract"])(client, args),
        sendRawTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendRawTransaction"])(client, args),
        sendRawTransactionSync: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransactionSync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendRawTransactionSync"])(client, args),
        simulate: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["simulateBlocks"])(client, args),
        simulateBlocks: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["simulateBlocks"])(client, args),
        simulateCalls: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateCalls$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["simulateCalls"])(client, args),
        simulateContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateContract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["simulateContract"])(client, args),
        verifyHash: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyHash"])(client, args),
        verifyMessage: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyMessage"])(client, args),
        verifySiweMessage: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$siwe$2f$verifySiweMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySiweMessage"])(client, args),
        verifyTypedData: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyTypedData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyTypedData"])(client, args),
        uninstallFilter: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uninstallFilter"])(client, args),
        waitForTransactionReceipt: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["waitForTransactionReceipt"])(client, args),
        watchBlocks: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["watchBlocks"])(client, args),
        watchBlockNumber: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlockNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["watchBlockNumber"])(client, args),
        watchContractEvent: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchContractEvent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["watchContractEvent"])(client, args),
        watchEvent: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchEvent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["watchEvent"])(client, args),
        watchPendingTransactions: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchPendingTransactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["watchPendingTransactions"])(client, args)
    };
} //# sourceMappingURL=public.js.map
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/createPublicClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPublicClient",
    ()=>createPublicClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/createClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/decorators/public.js [app-route] (ecmascript)");
;
;
function createPublicClient(parameters) {
    const { key = 'public', name = 'Public Client' } = parameters;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])({
        ...parameters,
        key,
        name,
        type: 'publicClient'
    });
    return client.extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicActions"]);
} //# sourceMappingURL=createPublicClient.js.map
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/decorators/test.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "testActions",
    ()=>testActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$dropTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/dropTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$dumpState$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/dumpState.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$getAutomine$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/getAutomine.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$getTxpoolContent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/getTxpoolContent.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$getTxpoolStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/getTxpoolStatus.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$impersonateAccount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/impersonateAccount.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$increaseTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/increaseTime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$inspectTxpool$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/inspectTxpool.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$loadState$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/loadState.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$mine$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/mine.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$removeBlockTimestampInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/removeBlockTimestampInterval.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$reset$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/reset.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$revert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/revert.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$sendUnsignedTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/sendUnsignedTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setAutomine$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setAutomine.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setBalance$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setBalance.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setBlockGasLimit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setBlockGasLimit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setBlockTimestampInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setBlockTimestampInterval.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setCode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setCode.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setCoinbase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setCoinbase.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setIntervalMining$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setIntervalMining.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setLoggingEnabled$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setLoggingEnabled.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setMinGasPrice$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setMinGasPrice.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setNextBlockBaseFeePerGas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setNextBlockBaseFeePerGas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setNextBlockTimestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setNextBlockTimestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setNonce$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setNonce.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setRpcUrl$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setRpcUrl.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setStorageAt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/setStorageAt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$snapshot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/snapshot.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$stopImpersonatingAccount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/test/stopImpersonatingAccount.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function testActions({ mode }) {
    return (client_)=>{
        const client = client_.extend(()=>({
                mode
            }));
        return {
            dropTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$dropTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dropTransaction"])(client, args),
            dumpState: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$dumpState$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dumpState"])(client),
            getAutomine: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$getAutomine$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAutomine"])(client),
            getTxpoolContent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$getTxpoolContent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTxpoolContent"])(client),
            getTxpoolStatus: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$getTxpoolStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTxpoolStatus"])(client),
            impersonateAccount: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$impersonateAccount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["impersonateAccount"])(client, args),
            increaseTime: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$increaseTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["increaseTime"])(client, args),
            inspectTxpool: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$inspectTxpool$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspectTxpool"])(client),
            loadState: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$loadState$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadState"])(client, args),
            mine: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$mine$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mine"])(client, args),
            removeBlockTimestampInterval: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$removeBlockTimestampInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeBlockTimestampInterval"])(client),
            reset: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$reset$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["reset"])(client, args),
            revert: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$revert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revert"])(client, args),
            sendUnsignedTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$sendUnsignedTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendUnsignedTransaction"])(client, args),
            setAutomine: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setAutomine$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setAutomine"])(client, args),
            setBalance: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setBalance$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setBalance"])(client, args),
            setBlockGasLimit: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setBlockGasLimit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setBlockGasLimit"])(client, args),
            setBlockTimestampInterval: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setBlockTimestampInterval$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setBlockTimestampInterval"])(client, args),
            setCode: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setCode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setCode"])(client, args),
            setCoinbase: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setCoinbase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setCoinbase"])(client, args),
            setIntervalMining: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setIntervalMining$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setIntervalMining"])(client, args),
            setLoggingEnabled: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setLoggingEnabled$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setLoggingEnabled"])(client, args),
            setMinGasPrice: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setMinGasPrice$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setMinGasPrice"])(client, args),
            setNextBlockBaseFeePerGas: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setNextBlockBaseFeePerGas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setNextBlockBaseFeePerGas"])(client, args),
            setNextBlockTimestamp: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setNextBlockTimestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setNextBlockTimestamp"])(client, args),
            setNonce: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setNonce$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setNonce"])(client, args),
            setRpcUrl: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setRpcUrl$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setRpcUrl"])(client, args),
            setStorageAt: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$setStorageAt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setStorageAt"])(client, args),
            snapshot: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$snapshot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["snapshot"])(client),
            stopImpersonatingAccount: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$test$2f$stopImpersonatingAccount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stopImpersonatingAccount"])(client, args)
        };
    };
} //# sourceMappingURL=test.js.map
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/createTestClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTestClient",
    ()=>createTestClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/createClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$test$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/decorators/test.js [app-route] (ecmascript)");
;
;
function createTestClient(parameters) {
    const { key = 'test', name = 'Test Client', mode } = parameters;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])({
        ...parameters,
        key,
        name,
        type: 'testClient'
    });
    return client.extend((config)=>({
            mode,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$test$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["testActions"])({
                mode
            })(config)
        }));
} //# sourceMappingURL=createTestClient.js.map
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/decorators/wallet.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "walletActions",
    ()=>walletActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$fillTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/fillTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/public/getChainId.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$addChain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/addChain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$deployContract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/deployContract.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getAddresses$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/getAddresses.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCallsStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/getCallsStatus.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCapabilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/getCapabilities.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/getPermissions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareAuthorization$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/prepareAuthorization.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestAddresses$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/requestAddresses.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/requestPermissions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/sendCalls.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCallsSync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/sendCallsSync.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransactionSync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/sendRawTransactionSync.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransactionSync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/sendTransactionSync.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$showCallsStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/showCallsStatus.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signAuthorization$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/signAuthorization.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/signMessage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/signTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/signTypedData.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$switchChain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/switchChain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$waitForCallsStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/waitForCallsStatus.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$watchAsset$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/watchAsset.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/writeContract.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContractSync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/actions/wallet/writeContractSync.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function walletActions(client) {
    return {
        addChain: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$addChain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addChain"])(client, args),
        deployContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$deployContract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deployContract"])(client, args),
        fillTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$fillTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fillTransaction"])(client, args),
        getAddresses: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getAddresses$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAddresses"])(client),
        getCallsStatus: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCallsStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallsStatus"])(client, args),
        getCapabilities: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCapabilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCapabilities"])(client, args),
        getChainId: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getChainId"])(client),
        getPermissions: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPermissions"])(client),
        prepareAuthorization: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareAuthorization$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prepareAuthorization"])(client, args),
        prepareTransactionRequest: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prepareTransactionRequest"])(client, args),
        requestAddresses: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestAddresses$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requestAddresses"])(client),
        requestPermissions: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestPermissions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requestPermissions"])(client, args),
        sendCalls: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendCalls"])(client, args),
        sendCallsSync: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCallsSync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendCallsSync"])(client, args),
        sendRawTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendRawTransaction"])(client, args),
        sendRawTransactionSync: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransactionSync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendRawTransactionSync"])(client, args),
        sendTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendTransaction"])(client, args),
        sendTransactionSync: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransactionSync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendTransactionSync"])(client, args),
        showCallsStatus: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$showCallsStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["showCallsStatus"])(client, args),
        signAuthorization: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signAuthorization$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signAuthorization"])(client, args),
        signMessage: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signMessage"])(client, args),
        signTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signTransaction"])(client, args),
        signTypedData: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signTypedData"])(client, args),
        switchChain: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$switchChain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["switchChain"])(client, args),
        waitForCallsStatus: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$waitForCallsStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["waitForCallsStatus"])(client, args),
        watchAsset: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$watchAsset$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["watchAsset"])(client, args),
        writeContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeContract"])(client, args),
        writeContractSync: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContractSync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeContractSync"])(client, args)
    };
} //# sourceMappingURL=wallet.js.map
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/createWalletClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWalletClient",
    ()=>createWalletClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/createClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$wallet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/decorators/wallet.js [app-route] (ecmascript)");
;
;
function createWalletClient(parameters) {
    const { key = 'wallet', name = 'Wallet Client', transport } = parameters;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])({
        ...parameters,
        key,
        name,
        transport,
        type: 'walletClient'
    });
    return client.extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$wallet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["walletActions"]);
} //# sourceMappingURL=createWalletClient.js.map
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/transports/createTransport.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTransport",
    ()=>createTransport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$buildRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/utils/buildRequest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/utils/uid.js [app-route] (ecmascript)");
;
;
function createTransport({ key, methods, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uid"])();
    return {
        config: {
            key,
            methods,
            name,
            request,
            retryCount,
            retryDelay,
            timeout,
            type
        },
        request: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$buildRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildRequest"])(request, {
            methods,
            retryCount,
            retryDelay,
            uid
        }),
        value
    };
} //# sourceMappingURL=createTransport.js.map
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/transports/custom.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "custom",
    ()=>custom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/transports/createTransport.js [app-route] (ecmascript)");
;
function custom(provider, config = {}) {
    const { key = 'custom', methods, name = 'Custom Provider', retryDelay } = config;
    return ({ retryCount: defaultRetryCount })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTransport"])({
            key,
            methods,
            name,
            request: provider.request.bind(provider),
            retryCount: config.retryCount ?? defaultRetryCount,
            retryDelay,
            type: 'custom'
        });
} //# sourceMappingURL=custom.js.map
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/transports/fallback.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fallback",
    ()=>fallback,
    "rankTransports",
    ()=>rankTransports,
    "shouldThrow",
    ()=>shouldThrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/errors/node.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/errors/rpc.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$wait$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/utils/wait.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/transports/createTransport.js [app-route] (ecmascript)");
;
;
;
;
function fallback(transports_, config = {}) {
    const { key = 'fallback', name = 'Fallback', rank = false, shouldThrow: shouldThrow_ = shouldThrow, retryCount, retryDelay } = config;
    return ({ chain, pollingInterval = 4_000, timeout, ...rest })=>{
        let transports = transports_;
        let onResponse = ()=>{};
        const transport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTransport"])({
            key,
            name,
            async request ({ method, params }) {
                let includes;
                const fetch = async (i = 0)=>{
                    const transport = transports[i]({
                        ...rest,
                        chain,
                        retryCount: 0,
                        timeout
                    });
                    try {
                        const response = await transport.request({
                            method,
                            params
                        });
                        onResponse({
                            method,
                            params: params,
                            response,
                            transport,
                            status: 'success'
                        });
                        return response;
                    } catch (err) {
                        onResponse({
                            error: err,
                            method,
                            params: params,
                            transport,
                            status: 'error'
                        });
                        if (shouldThrow_(err)) throw err;
                        // If we've reached the end of the fallbacks, throw the error.
                        if (i === transports.length - 1) throw err;
                        // Check if at least one other transport includes the method
                        includes ??= transports.slice(i + 1).some((transport)=>{
                            const { include, exclude } = transport({
                                chain
                            }).config.methods || {};
                            if (include) return include.includes(method);
                            if (exclude) return !exclude.includes(method);
                            return true;
                        });
                        if (!includes) throw err;
                        // Otherwise, try the next fallback.
                        return fetch(i + 1);
                    }
                };
                return fetch();
            },
            retryCount,
            retryDelay,
            type: 'fallback'
        }, {
            onResponse: (fn)=>onResponse = fn,
            transports: transports.map((fn)=>fn({
                    chain,
                    retryCount: 0
                }))
        });
        if (rank) {
            const rankOptions = typeof rank === 'object' ? rank : {};
            rankTransports({
                chain,
                interval: rankOptions.interval ?? pollingInterval,
                onTransports: (transports_)=>transports = transports_,
                ping: rankOptions.ping,
                sampleCount: rankOptions.sampleCount,
                timeout: rankOptions.timeout,
                transports,
                weights: rankOptions.weights
            });
        }
        return transport;
    };
}
function shouldThrow(error) {
    if ('code' in error && typeof error.code === 'number') {
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionRejectedRpcError"].code || error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExecutionRevertedError"].nodeMessage.test(error.message) || error.code === 5000 // CAIP UserRejectedRequestError
        ) return true;
    }
    return false;
}
function rankTransports({ chain, interval = 4_000, onTransports, ping, sampleCount = 10, timeout = 1_000, transports, weights = {} }) {
    const { stability: stabilityWeight = 0.7, latency: latencyWeight = 0.3 } = weights;
    const samples = [];
    const rankTransports_ = async ()=>{
        // 1. Take a sample from each Transport.
        const sample = await Promise.all(transports.map(async (transport)=>{
            const transport_ = transport({
                chain,
                retryCount: 0,
                timeout
            });
            const start = Date.now();
            let end;
            let success;
            try {
                await (ping ? ping({
                    transport: transport_
                }) : transport_.request({
                    method: 'net_listening'
                }));
                success = 1;
            } catch  {
                success = 0;
            } finally{
                end = Date.now();
            }
            const latency = end - start;
            return {
                latency,
                success
            };
        }));
        // 2. Store the sample. If we have more than `sampleCount` samples, remove
        // the oldest sample.
        samples.push(sample);
        if (samples.length > sampleCount) samples.shift();
        // 3. Calculate the max latency from samples.
        const maxLatency = Math.max(...samples.map((sample)=>Math.max(...sample.map(({ latency })=>latency))));
        // 4. Calculate the score for each Transport.
        const scores = transports.map((_, i)=>{
            const latencies = samples.map((sample)=>sample[i].latency);
            const meanLatency = latencies.reduce((acc, latency)=>acc + latency, 0) / latencies.length;
            const latencyScore = 1 - meanLatency / maxLatency;
            const successes = samples.map((sample)=>sample[i].success);
            const stabilityScore = successes.reduce((acc, success)=>acc + success, 0) / successes.length;
            if (stabilityScore === 0) return [
                0,
                i
            ];
            return [
                latencyWeight * latencyScore + stabilityWeight * stabilityScore,
                i
            ];
        }).sort((a, b)=>b[0] - a[0]);
        // 5. Sort the Transports by score.
        onTransports(scores.map(([, i])=>transports[i]));
        // 6. Wait, and then rank again.
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$wait$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wait"])(interval);
        rankTransports_();
    };
    rankTransports_();
} //# sourceMappingURL=fallback.js.map
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/transports/http.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "http",
    ()=>http
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/errors/request.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/errors/transport.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/utils/promise/createBatchScheduler.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$http$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/utils/rpc/http.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/transports/createTransport.js [app-route] (ecmascript)");
;
;
;
;
;
function http(/** URL of the JSON-RPC API. Defaults to the chain's public RPC URL. */ url, config = {}) {
    const { batch, fetchFn, fetchOptions, key = 'http', methods, name = 'HTTP JSON-RPC', onFetchRequest, onFetchResponse, retryDelay, raw } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ })=>{
        const { batchSize = 1000, wait = 0 } = typeof batch === 'object' ? batch : {};
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10_000;
        const url_ = url || chain?.rpcUrls.default.http[0];
        if (!url_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UrlRequiredError"]();
        const rpcClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$http$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpRpcClient"])(url_, {
            fetchFn,
            fetchOptions,
            onRequest: onFetchRequest,
            onResponse: onFetchResponse,
            timeout
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTransport"])({
            key,
            methods,
            name,
            async request ({ method, params }) {
                const body = {
                    method,
                    params
                };
                const { schedule } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createBatchScheduler"])({
                    id: url_,
                    wait,
                    shouldSplitBatch (requests) {
                        return requests.length > batchSize;
                    },
                    fn: (body)=>rpcClient.request({
                            body
                        }),
                    sort: (a, b)=>a.id - b.id
                });
                const fn = async (body)=>batch ? schedule(body) : [
                        await rpcClient.request({
                            body
                        })
                    ];
                const [{ error, result }] = await fn(body);
                if (raw) return {
                    error,
                    result
                };
                if (error) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RpcRequestError"]({
                    body,
                    error,
                    url: url_
                });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'http'
        }, {
            fetchOptions,
            url: url_
        });
    };
} //# sourceMappingURL=http.js.map
}),
"[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/transports/webSocket.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "webSocket",
    ()=>webSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/errors/request.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/errors/transport.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$compat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/utils/rpc/compat.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$webSocket$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/utils/rpc/webSocket.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_bufferutil@4.1._cbb50a80756cd464cabdb9dee0b4d617/node_modules/viem/_esm/clients/transports/createTransport.js [app-route] (ecmascript)");
;
;
;
;
;
function webSocket(/** URL of the JSON-RPC API. Defaults to the chain's public RPC URL. */ url, config = {}) {
    const { keepAlive, key = 'webSocket', methods, name = 'WebSocket JSON-RPC', reconnect, retryDelay } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ })=>{
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10_000;
        const url_ = url || chain?.rpcUrls.default.webSocket?.[0];
        const wsRpcClientOpts = {
            keepAlive,
            reconnect
        };
        if (!url_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UrlRequiredError"]();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTransport"])({
            key,
            methods,
            name,
            async request ({ method, params }) {
                const body = {
                    method,
                    params
                };
                const rpcClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$webSocket$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWebSocketRpcClient"])(url_, wsRpcClientOpts);
                const { error, result } = await rpcClient.requestAsync({
                    body,
                    timeout
                });
                if (error) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RpcRequestError"]({
                    body,
                    error,
                    url: url_
                });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'webSocket'
        }, {
            getSocket () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$compat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSocket"])(url_);
            },
            getRpcClient () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$webSocket$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWebSocketRpcClient"])(url_, wsRpcClientOpts);
            },
            async subscribe ({ params, onData, onError }) {
                const rpcClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_bufferutil$40$4$2e$1$2e$_cbb50a80756cd464cabdb9dee0b4d617$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$webSocket$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWebSocketRpcClient"])(url_, wsRpcClientOpts);
                const { result: subscriptionId } = await new Promise((resolve, reject)=>rpcClient.request({
                        body: {
                            method: 'eth_subscribe',
                            params
                        },
                        onError (error) {
                            reject(error);
                            onError?.(error);
                            return;
                        },
                        onResponse (response) {
                            if (response.error) {
                                reject(response.error);
                                onError?.(response.error);
                                return;
                            }
                            if (typeof response.id === 'number') {
                                resolve(response);
                                return;
                            }
                            if (response.method !== 'eth_subscription') return;
                            onData(response.params);
                        }
                    }));
                return {
                    subscriptionId,
                    async unsubscribe () {
                        return new Promise((resolve)=>rpcClient.request({
                                body: {
                                    method: 'eth_unsubscribe',
                                    params: [
                                        subscriptionId
                                    ]
                                },
                                onResponse: resolve
                            }));
                    }
                };
            }
        });
    };
} //# sourceMappingURL=webSocket.js.map
}),
];

//# sourceMappingURL=3038c_viem__esm_clients_176fa251._.js.map