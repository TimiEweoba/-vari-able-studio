module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/shared/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactRequests",
    ()=>contactRequests,
    "insertContactSchema",
    ()=>insertContactSchema,
    "insertPaymentSchema",
    ()=>insertPaymentSchema,
    "insertProjectSchema",
    ()=>insertProjectSchema,
    "insertUserSchema",
    ()=>insertUserSchema,
    "payments",
    ()=>payments,
    "projects",
    ()=>projects,
    "users",
    ()=>users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-zod/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
;
;
;
const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("users", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("id").primaryKey().default(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`gen_random_uuid()`),
    username: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("username").notNull().unique(),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("password").notNull()
});
const contactRequests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("contact_requests", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("id").primaryKey().default(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`gen_random_uuid()`),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("email").notNull(),
    company: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("company"),
    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("message").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("created_at").default(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`CURRENT_TIMESTAMP`)
});
const projects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("projects", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("id").primaryKey().default(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`gen_random_uuid()`),
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("title").notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("description").notNull(),
    category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("category").notNull(),
    imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("image_url").notNull(),
    link: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("link"),
    featured: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("featured").default("false")
});
const payments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("payments", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("id").primaryKey().default(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`gen_random_uuid()`),
    txRef: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("tx_ref").notNull().unique(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("email").notNull(),
    amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("amount").notNull(),
    currency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("currency").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("status").notNull().default("pending"),
    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("data"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("created_at").default(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`CURRENT_TIMESTAMP`)
});
const insertUserSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInsertSchema"])(users).pick({
    username: true,
    password: true
});
const insertContactSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInsertSchema"])(contactRequests).omit({
    id: true,
    createdAt: true
}).extend({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Name must be at least 2 characters"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Please enter a valid email address"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Message must be at least 10 characters")
});
const insertProjectSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInsertSchema"])(projects).omit({
    id: true
});
const insertPaymentSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInsertSchema"])(payments).omit({
    id: true,
    createdAt: true
});
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/neon-http/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/schema.ts [app-route] (ecmascript)");
;
;
;
if (!process.env.DATABASE_URL && !process.env.MONGO_URI) {
    console.warn("DATABASE_URL is not set and MONGO_URI is missing. Database features will not work.");
}
// Validate that the URL is actually for Postgres/Neon before attempting connection
const isPostgres = process.env.DATABASE_URL && (process.env.DATABASE_URL.startsWith("postgres") || process.env.DATABASE_URL.startsWith("neondb"));
if (process.env.DATABASE_URL && !isPostgres) {
    console.warn("DATABASE_URL is set but does not look like a Postgres URL (e.g. MongoDB). Falling back to in-memory storage.");
}
const db = isPostgres ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neon"])(process.env.DATABASE_URL), {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
}) : null;
}),
"[project]/lib/mongo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactRequestModel",
    ()=>ContactRequestModel,
    "PaymentModel",
    ()=>PaymentModel,
    "ProjectModel",
    ()=>ProjectModel,
    "UserModel",
    ()=>UserModel,
    "connectToMongo",
    ()=>connectToMongo
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
const connectToMongo = async ()=>{
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connection.readyState >= 1) return;
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI not set");
    await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
        family: 4
    });
};
// Schemas
const userSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    id: {
        type: String,
        default: ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const projectSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    id: {
        type: String,
        default: ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    featured: {
        type: String,
        default: "false"
    }
});
const contactRequestSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    id: {
        type: String,
        default: ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const paymentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    id: {
        type: String,
        default: ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
        unique: true
    },
    txRef: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
    data: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const UserModel = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('User', userSchema);
const ProjectModel = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Project || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Project', projectSchema);
const ContactRequestModel = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.ContactRequest || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('ContactRequest', contactRequestSchema);
const PaymentModel = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Payment || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Payment', paymentSchema);
}),
"[project]/lib/storage.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DatabaseStorage",
    ()=>DatabaseStorage,
    "MemStorage",
    ()=>MemStorage,
    "MongoStorage",
    ()=>MongoStorage,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
;
;
;
;
;
class MongoStorage {
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToMongo"])().catch((err)=>console.error("MongoDB connection error:", err));
    }
    mapDoc(doc) {
        const obj = doc.toObject();
        // Convert _id to string if needed, but we used explicit 'id' field.
        // Convert Dates to ISO strings to match Drizzle schema types
        if (obj.createdAt instanceof Date) obj.createdAt = obj.createdAt.toISOString();
        delete obj._id;
        delete obj.__v;
        return obj;
    }
    async ensureConnection() {
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["connection"].readyState !== 1) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToMongo"])();
            } catch (err) {
                console.error("MongoDB still disconnected. Operation may fail or timeout.");
                throw err;
            }
        }
    }
    async getUser(id) {
        try {
            await this.ensureConnection();
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserModel"].findOne({
                id
            });
            return user ? this.mapDoc(user) : undefined;
        } catch (e) {
            console.error("MongoStorage.getUser fallback error:", e);
            return undefined;
        }
    }
    async getUserByUsername(username) {
        try {
            await this.ensureConnection();
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserModel"].findOne({
                username
            });
            return user ? this.mapDoc(user) : undefined;
        } catch (e) {
            console.error("MongoStorage.getUserByUsername fallback error:", e);
            return undefined;
        }
    }
    async createUser(insertUser) {
        await this.ensureConnection();
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserModel"].create(insertUser);
        return this.mapDoc(user);
    }
    async createContactRequest(insertRequest) {
        await this.ensureConnection();
        const request = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ContactRequestModel"].create(insertRequest);
        return this.mapDoc(request);
    }
    async getProjects() {
        try {
            if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["connection"].readyState !== 1) {
                console.warn("[MongoStorage] MongoDB not connected, returning empty list or fallback projects would be better here.");
                // We'll try to connect but if it fails, we fall back to an empty list to prevent 10s timeout
                await Promise.race([
                    this.ensureConnection(),
                    new Promise((_, reject)=>setTimeout(()=>reject(new Error("Timeout")), 2000))
                ]);
            }
            const allProjects = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectModel"].find().lean();
            if (allProjects.length === 0) {
                // ... (existing seeding logic)
                const initialProjects = [
                    {
                        title: "TenantFlow — Landlord CRM template",
                        description: "A vertical starter product for small landlords. Listings, tenant onboarding, rent collection, and basic analytics.",
                        category: "Featured",
                        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
                        link: "#",
                        featured: "true"
                    },
                    {
                        title: "XPlus Commerce",
                        description: "A high-performance e-commerce platform built for the Nigerian market. Features real-time inventory, secure payments via Flutterwave, and a modular architecture for rapid scaling.",
                        category: "E-commerce",
                        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
                        link: "https://xplus.com.ng",
                        featured: "true"
                    },
                    {
                        title: "Stripe Billing",
                        description: "Customer portal, subscriptions.",
                        category: "Integration",
                        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                        link: "#",
                        featured: "false"
                    },
                    {
                        title: "Admin Panel",
                        description: "Role management, user controls.",
                        category: "Infrastructure",
                        imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop",
                        link: "#",
                        featured: "false"
                    }
                ];
                for (const p of initialProjects){
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectModel"].create(p);
                    } catch (e) {}
                }
                const seeded = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectModel"].find().lean();
                return seeded.map((p)=>this.mapDoc(p));
            }
            return allProjects.map((p)=>this.mapDoc(p));
        } catch (e) {
            console.error("[MongoStorage] Critical failure, returning static fallback projects:", e);
            // Dynamic fallback to prevent empty page
            return [
                {
                    id: "fb-1",
                    title: "System Online (Offline Mode)",
                    description: "The database is currently unreachable. Some projects might be hidden.",
                    category: "Service",
                    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
                    link: "#",
                    featured: "true"
                }
            ];
        }
    }
    async createProject(insertProject) {
        await this.ensureConnection();
        const project = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectModel"].create(insertProject);
        return this.mapDoc(project);
    }
    async createPayment(insertPayment) {
        try {
            await this.ensureConnection();
            const payment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PaymentModel"].create(insertPayment);
            return this.mapDoc(payment);
        } catch (e) {
            console.error("[MongoStorage] createPayment failed, falling back to transaction log:", e);
            // If Mongo fails, we return a virtual object so the payment can at least BEGIN.
            // But we warn that it won't be saved.
            return {
                ...insertPayment,
                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                status: "pending",
                createdAt: new Date().toISOString(),
                data: insertPayment.data || null
            };
        }
    }
    async getPaymentByTxRef(txRef) {
        try {
            await this.ensureConnection();
            const payment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PaymentModel"].findOne({
                txRef
            });
            return payment ? this.mapDoc(payment) : undefined;
        } catch (e) {
            return undefined;
        }
    }
    async updatePaymentStatus(txRef, status, data) {
        try {
            await this.ensureConnection();
            const payment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PaymentModel"].findOneAndUpdate({
                txRef
            }, {
                status,
                data
            }, {
                new: true
            });
            if (!payment) throw new Error("Payment not found");
            return this.mapDoc(payment);
        } catch (e) {
            console.error("[MongoStorage] updatePaymentStatus failed:", e);
            throw e;
        }
    }
}
class DatabaseStorage {
    async getUser(id) {
        const [user] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].id, id));
        return user;
    }
    async getUserByUsername(username) {
        const [user] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].username, username));
        return user;
    }
    async createUser(insertUser) {
        const [user] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"]).values(insertUser).returning();
        return user;
    }
    async createContactRequest(insertRequest) {
        const [request] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contactRequests"]).values(insertRequest).returning();
        return request;
    }
    async getProjects() {
        const allProjects = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]);
        if (allProjects.length === 0) {
            const initialProjects = [
                {
                    title: "TenantFlow — Landlord CRM template",
                    description: "A vertical starter product for small landlords. Listings, tenant onboarding, rent collection, and basic analytics.",
                    category: "Featured",
                    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
                    link: "#",
                    featured: "true"
                },
                {
                    title: "XPlus Commerce",
                    description: "A high-performance e-commerce platform built for the Nigerian market. Features real-time inventory, secure payments via Flutterwave, and a modular architecture for rapid scaling.",
                    category: "E-commerce",
                    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
                    link: "https://xplus.com.ng",
                    featured: "true"
                },
                {
                    title: "Stripe Billing",
                    description: "Customer portal, subscriptions.",
                    category: "Integration",
                    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                    link: "#",
                    featured: "false"
                },
                {
                    title: "Admin Panel",
                    description: "Role management, user controls.",
                    category: "Infrastructure",
                    imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop",
                    link: "#",
                    featured: "false"
                }
            ];
            for (const p of initialProjects){
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]).values(p);
                } catch (e) {
                    console.warn("Failed to seed project (might already exist):", p.title);
                }
            }
            return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]);
        }
        return allProjects;
    }
    async createProject(insertProject) {
        const [project] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"]).values(insertProject).returning();
        return project;
    }
    async createPayment(insertPayment) {
        const [payment] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payments"]).values(insertPayment).returning();
        return payment;
    }
    async getPaymentByTxRef(txRef) {
        const [payment] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payments"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payments"].txRef, txRef));
        return payment;
    }
    async updatePaymentStatus(txRef, status, data) {
        const [payment] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payments"]).set({
            status,
            data
        }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payments"].txRef, txRef)).returning();
        if (!payment) throw new Error("Payment not found");
        return payment;
    }
}
class MemStorage {
    users;
    contactRequests;
    projects;
    payments;
    constructor(){
        this.users = new Map();
        this.contactRequests = new Map();
        this.projects = new Map();
        this.payments = new Map();
        this.seedProjects();
    }
    seedProjects() {
        const initialProjects = [
            {
                title: "TenantFlow — Landlord CRM template",
                description: "A vertical starter product for small landlords. Listings, tenant onboarding, rent collection, and basic analytics.",
                category: "Featured",
                imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
                link: "#",
                featured: "true"
            },
            {
                title: "XPlus Commerce",
                description: "A high-performance e-commerce platform built for the Nigerian market. Features real-time inventory, secure payments via Flutterwave, and a modular architecture for rapid scaling.",
                category: "E-commerce",
                imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
                link: "https://xplus.com.ng",
                featured: "true"
            },
            {
                title: "Stripe Billing",
                description: "Customer portal, subscriptions.",
                category: "Integration",
                imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                link: "#",
                featured: "false"
            },
            {
                title: "Admin Panel",
                description: "Role management, user controls.",
                category: "Infrastructure",
                imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop",
                link: "#",
                featured: "false"
            }
        ];
        initialProjects.forEach((p)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
            this.projects.set(id, {
                ...p,
                id,
                link: p.link ?? null,
                featured: p.featured ?? "false"
            });
        });
    }
    async getUser(id) {
        return this.users.get(id);
    }
    async getUserByUsername(username) {
        return Array.from(this.users.values()).find((u)=>u.username === username);
    }
    async createUser(insertUser) {
        const id = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
        const user = {
            ...insertUser,
            id
        };
        this.users.set(id, user);
        return user;
    }
    async createContactRequest(insertRequest) {
        const id = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
        const req = {
            ...insertRequest,
            id,
            company: insertRequest.company ?? null,
            createdAt: new Date().toISOString()
        };
        this.contactRequests.set(id, req);
        return req;
    }
    async getProjects() {
        return Array.from(this.projects.values());
    }
    async createProject(insertProject) {
        const id = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
        const p = {
            ...insertProject,
            id,
            link: insertProject.link ?? null,
            featured: insertProject.featured ?? "false"
        };
        this.projects.set(id, p);
        return p;
    }
    async createPayment(insertPayment) {
        const id = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
        const p = {
            ...insertPayment,
            id,
            status: insertPayment.status ?? "pending",
            data: insertPayment.data ?? null,
            createdAt: new Date().toISOString()
        };
        this.payments.set(id, p);
        return p;
    }
    async getPaymentByTxRef(txRef) {
        return Array.from(this.payments.values()).find((p)=>p.txRef === txRef);
    }
    async updatePaymentStatus(txRef, status, data) {
        const p = Array.from(this.payments.values()).find((x)=>x.txRef === txRef);
        if (!p) throw new Error("Payment not found");
        p.status = status;
        if (data) p.data = data;
        return p;
    }
}
let storage = new MemStorage();
async function initializeStorage() {
    const MONGO_URI = process.env.MONGO_URI;
    const DATABASE_URL = process.env.DATABASE_URL;
    if (MONGO_URI) {
        try {
            console.log("[Storage] Attempting to connect to MongoDB...");
            // Attempt to connect to Mongo with a timeout
            await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["connect"](MONGO_URI, {
                serverSelectionTimeoutMS: 5000
            });
            console.log("[Storage] Using MongoDB Storage");
            storage = new MongoStorage();
            return;
        } catch (e) {
            console.error("[Storage] MongoDB connection failed:", e.message);
        }
    }
    const isPostgres = !!DATABASE_URL && (DATABASE_URL.startsWith("postgres") || DATABASE_URL.startsWith("neondb"));
    if (isPostgres) {
        console.log("[Storage] Using Database Storage (Postgres)");
        storage = new DatabaseStorage();
    } else {
        console.warn("[Storage] Using In-Memory Storage (Data will be lost on restart)");
        storage = new MemStorage();
    }
}
// Start initialization
initializeStorage().catch((err)=>{
    console.error("[Storage] Critical initialization error:", err);
});
}),
"[project]/app/api/payments/verify/[txRef]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-route] (ecmascript)");
;
;
async function GET(req, { params }) {
    try {
        const { txRef } = params;
        const payment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].getPaymentByTxRef(txRef);
        if (!payment) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Payment not found"
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: payment.status
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: error.message || "Failed to verify payment"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ba8924b6._.js.map