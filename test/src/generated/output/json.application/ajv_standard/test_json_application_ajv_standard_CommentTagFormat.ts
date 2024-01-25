import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagFormat } from "../../../../structures/CommentTagFormat";

export const test_json_application_ajv_standard_CommentTagFormat =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "CommentTagFormat",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagFormat",
      },
    ],
    components: {
      schemas: {
        CommentTagFormat: {
          $id: "#/components/schemas/CommentTagFormat",
          type: "object",
          properties: {
            byte: {
              type: "string",
              format: "byte",
            },
            password: {
              type: "string",
              format: "password",
            },
            regex: {
              type: "string",
              format: "regex",
            },
            uuid: {
              type: "string",
              format: "uuid",
            },
            email: {
              type: "string",
              format: "email",
            },
            hostname: {
              type: "string",
              format: "hostname",
            },
            idnEmail: {
              type: "string",
              format: "idn-email",
            },
            idnHostname: {
              type: "string",
              format: "idn-hostname",
            },
            iri: {
              type: "string",
              format: "iri",
            },
            iriReference: {
              type: "string",
              format: "iri-reference",
            },
            ipv4: {
              type: "string",
              format: "ipv4",
            },
            ipv6: {
              type: "string",
              format: "ipv6",
            },
            uri: {
              type: "string",
              format: "uri",
            },
            uriReference: {
              type: "string",
              format: "uri-reference",
            },
            uriTemplate: {
              type: "string",
              format: "uri-template",
            },
            url: {
              type: "string",
              format: "url",
            },
            datetime: {
              type: "string",
              format: "date-time",
            },
            date: {
              type: "string",
              format: "date",
            },
            time: {
              type: "string",
              format: "time",
            },
            duration: {
              type: "string",
              format: "duration",
            },
            jsonPointer: {
              type: "string",
              format: "json-pointer",
            },
            relativeJsonPointer: {
              type: "string",
              format: "relative-json-pointer",
            },
          },
          required: [
            "byte",
            "password",
            "regex",
            "uuid",
            "email",
            "hostname",
            "idnEmail",
            "idnHostname",
            "iri",
            "iriReference",
            "ipv4",
            "ipv6",
            "uri",
            "uriReference",
            "uriTemplate",
            "url",
            "datetime",
            "date",
            "time",
            "duration",
            "jsonPointer",
            "relativeJsonPointer",
          ],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
