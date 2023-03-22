import { JsonSchema } from "@jsonforms/core";
import { UISchema } from "../store";

const StartupMode = ["Earliest", "Latest"];
const RowFormat = ["JSON", "Avro", "Protobuf", "Debezium JSON", "Maxwell JSON"];
const SSLSettings = [
  "SSL without SASL",
  "SASL/PLAIN",
  "SASL/SCRAM",
  "SASL/GSSAPI",
  "SASL/OAUTHBEARER",
];

export const kafkaSchema: JsonSchema = {
  type: "object",
  properties: {
    sourceName: {
      type: "string",
    },
    topic: {
      type: "string",
    },
    bootstrapServers: {
      type: "string",
    },
    startupMode: {
      type: "string",
      enum: StartupMode,
    },
    startupTimeOffset: {
      type: "string",
    },
    message: {
      type: "string",
    },
    rowFormat: {
      type: "string",
      enum: RowFormat,
    },
    description: {
      title: "",
      type: "string",
    },
    schemaLocation: {
      type: "string",
    },
    confluentSchemaRegistryURL: {
      type: "string",
    },
    SSLandSSALSettings: {
      type: "string",
      enum: SSLSettings,
    },
  },
  required: ["sourceName", "topic", "bootstrapServers"],
};

export const kafkaUISchema: UISchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/sourceName",
        },
        {
          type: "Control",
          scope: "#/properties/topic",
        },
      ],
    },
    {
      type: "Control",
      scope: "#/properties/bootstrapServers",
      options: {
        trim: true,
      },
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/startupMode",
        },
        {
          type: "Control",
          scope: "#/properties/startupTimeOffset",
        },
      ],
    },
    {
      type: "Control",
      scope: "#/properties/rowFormat",
      options: {
        trim: true,
      },
    },
    {
      type: "Control",
      scope: "#/properties/message",
    },
    {
      type: "Control",
      scope: "#/properties/description",
      options: {
        readOnly: true,
      },
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/schemaLocation",
        },
        {
          type: "Control",
          scope: "#/properties/confluentSchemaRegistryURL",
        },
      ],
    },
    {
      type: "Control",
      scope: "#/properties/SSLandSSALSettings",
      options: {
        trim: true,
      },
    },
  ],
};

export const initialData = {
  sourceName: "source_name",
  topic: "",
  bootstrapServers: "",
  scanStartupMode: "earliest",
  startupTimestampOffset: "140000000",
  description: "Please specify one of the following locations:",
};
