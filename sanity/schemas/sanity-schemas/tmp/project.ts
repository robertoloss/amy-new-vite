

export const project = {
  name: 'project',
  type: 'document',
	title: 'Projects',
  fields: [	
		{
			name: 'preview',
			type: 'preview',
			title: 'Preview'
		},
    {
      name: 'name',
      type: 'string',
      title: 'Project Name (eg: Case Study 01)'
    },
		{
			name: 'title',
			type: 'string',
			title: 'Project Title'
		},
		{
			name: 'rank',	
			type: 'string',
			title: 'Project Order of Appearance'
		},
		{
			name: 'description_left',
			type: 'array',
			of: [{type: 'block'}],
			title: 'Description Left (Big)'
		},
		{
			name: 'description_right',
			type: 'array',
			of: [{type: 'block'}],
			title: 'Description Right (Small)'
		},
		{
			name: 'wide_picture',
			type: 'picture',
			title: 'Wide Picture'
		},
		{
			name: 'three_cols_yesNo',
			type: 'boolean',
			title: 'Insert three cols section?'
		},
		{
			name: 'three_cols_proj',
			type: 'three_cols',
			title: 'Three Columns (Project)'
		},
		{
			name: 'sections',
			type: 'array',
			of: [{type: 'section'}]
		}
  ]
}
