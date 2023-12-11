//import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { defineConfig } from "@sanity-typed/types";
import type { InferSchemaValues } from "@sanity-typed/types";
import { picture } from './schemas/sanity-schemas/picture';
import { picture_section } from './schemas/sanity-schemas/picture_section';
import { preview } from './schemas/sanity-schemas/preview';
import { project } from './schemas/sanity-schemas/project';
import { quote } from './schemas/sanity-schemas/quote';
import { section } from './schemas/sanity-schemas/section';
import { three_cols } from './schemas/sanity-schemas/three_cols';
import { website } from './schemas/sanity-schemas/website';

const config = defineConfig({
  name: 'default',
  title: 'Amy Jackson Portfolio',

  projectId: 'qyyz7qna',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [
			picture,
			picture_section,
			preview,
			project,
			quote,
			section,
			three_cols,
			website
		],
  },
})

export default config;
export type SanityValues = InferSchemaValues<typeof config>;
