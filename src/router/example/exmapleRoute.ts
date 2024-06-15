import * as repl from "repl";
/**
 * pathはユースケース
 */
import type { FastifyPluginAsyncJsonSchemaToTs } from "@fastify/type-provider-json-schema-to-ts";

export const exmapleRouteer: FastifyPluginAsyncJsonSchemaToTs = async (fastify, _options) => {
    fastify.get(
        "/example",
        {
            schema: {
                querystring: {
                    type: "object",
                    properties: {
                        p1: { type: "string" },
                        p2: { type: "string" },
                    },
                    required: ["p1"],
                },
            } as const,
        },
        async (request, reply) => {
            // const { num, str } = request.query;
            // return { num, str, path: "api-get" };
            reply.code(404).header("x-xss-protection", "freedom").send({ "payload-key": "sdfasfa" });
            //return "リターン";
        },
    );
    fastify.post(
        "/example",
        {
            schema: {
                body: {
                    type: "object",
                    required: ["music"],
                    properties: {
                        music: { type: "string" },
                    },
                },
            } as const,
        },
        async (request, _reply) => {
            //const { music } = request.body;
            //return music;
            return request.body;
        },
    );
};
